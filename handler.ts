import { App, ExpressReceiver } from '@slack/bolt';
import awsServerlessExpress from '@vendia/serverless-express';

// ------------------------
// Bolt App Initialization
// ------------------------
const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET!,
  processBeforeResponse: true,
});

const boltApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
  processBeforeResponse: true,
});

// ------------------------
// Application Logic
// ------------------------
boltApp.command('/echo', async ({ command, logger, ack, say }) => {
  try {
    await say(`${command.text}`);
    await ack();
  } catch (e) {
    logger.error(e);
    await ack(`:x: Failed to post a message (error: ${e})`);
  }
});

// ------------------------
// AWS Lambda handler
// ------------------------
export const app =  awsServerlessExpress({ app: expressReceiver.app });