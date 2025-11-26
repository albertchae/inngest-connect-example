import { config } from "dotenv";
import { Inngest } from "inngest";
import { connect } from "inngest/connect";
import { WebSocket } from "ws";

// Load environment variables from .env file
config();

// Polyfill WebSocket for Node.js environment
global.WebSocket = WebSocket as any;

const inngest = new Inngest({
  id: process.env.INNGEST_APP_ID || "my-app",
  eventKey: process.env.INNGEST_EVENT_KEY,
});

const handleSignupFunction = inngest.createFunction(
  { id: "handle-signup" },
  { event: "user.created" },
  async ({ event, step }) => {
    console.log("Function called", event);
  },
);

(async () => {
  const connection = await connect({
    apps: [{ client: inngest, functions: [handleSignupFunction] }],
  });

  console.log("Worker: connected", connection);
})();