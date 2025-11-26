# Inngest Connect Example

This project is based on the example from [Inngest Connect documentation](https://www.inngest.com/docs/setup/connect).

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Your Inngest app ID
INNGEST_APP_ID=my-app

# Your Inngest event key (optional for local development)
# Get this from https://app.inngest.com
INNGEST_EVENT_KEY=

# Your Inngest signing key (optional for local development)
# Get this from https://app.inngest.com under your app's signing key section
INNGEST_SIGNING_KEY=

# Development mode (0 for production, 1 for development)
INNGEST_DEV=0

# Node environment
NODE_ENV=production
```

**Note:**
- `INNGEST_APP_ID` defaults to "my-app" if not set
- `INNGEST_EVENT_KEY` is optional for local development but required for production
- `INNGEST_SIGNING_KEY` is used to verify requests between Inngest and your application. Optional for local development but required for production
- `INNGEST_DEV` set to `1` for local development, `0` for production
- All keys can be found in your [Inngest dashboard](https://app.inngest.com)

### 3. Run the application

```bash
npm start
```

The worker will connect to the Inngest Dev Server and listen for `user.created` events.

## What it does

This example creates an Inngest function that:
- Listens for `user.created` events
- Logs the event data when triggered
- Runs using Inngest Connect for local development

## Learn more

- [Inngest Documentation](https://www.inngest.com/docs)
- [Inngest Connect](https://www.inngest.com/docs/setup/connect)
