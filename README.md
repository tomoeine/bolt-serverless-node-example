# bolt-serverless-node-example

This project was created with reference to [serverless-slack-bolt-aws](https://github.com/seratch/serverless-slack-bolt-aws).

## How to test

### 1) Slack App Configuration
Go to https://api.slack.com/apps
  - Create a Slash command named `/echo` (Request URL can be a dummy)
  - Create a bot user @{bot-name}
  - Install the app to your workspace

### 2) App Setup
- Clone this repository
- Setup configurations

```shell
npm i
cp .env.example .env
vi .env # set SLACK_SIGNING_SECRET, SLACK_BOT_TOKEN
```

### 3) Local Development

```shell
sls offline # local dev
ngrok http 3000 # on another terminal window
```

- Update the Request URL for the slash command with the ngrok URL

### 4) Make sure it works on Slack
```
/invite @{bot-name}
/echo something
```

### 5) Deploy to AWS
```shell
export AWS_ACCESS_KEY_ID=xxx
export AWS_SECRET_ACCESS_KEY=yyy
sls deploy
```

-  Update the Request URL for the slash command with the AWS URL
