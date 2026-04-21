# Platforms & The Agent SDK

Claude Code is designed to be accessible from anywhere, and extensible by developers. This section covers Remote Control, multi-channel access, and the Agent SDK.

## Remote Control & Dispatch

You don't need to be sitting at your laptop to run terminal commands. 

1. **Remote Control:** You can initiate a Claude Code task from the web (`claude.ai/code`) or from the Claude iOS/Android app. 
2. **Dispatching Tasks:** While riding the bus, you realize you forgot to run the database migration. You open the Claude iOS app and say, *"Connect to my work laptop and run the production database migration script."*
3. **Teleporting:** You can start a long-running task on the web, walk to your computer, open your terminal, and run `claude --teleport` to instantly pull that cloud session into your local CLI.

## Slack Integration

With the Claude Code Slack integration, your team can interact with the codebase directly from chat.

- A QA tester finds a bug on the staging server.
- They post in Slack: *"@Claude The login button on staging is throwing a 500 error."*
- Claude Code, running as an agent in your Slack workspace, reads the message, accesses your GitHub repo, finds the bug, fixes it, and replies in the Slack thread: *"I found the null reference error in Auth.js. I've opened PR #402 for review."*

## The Agent SDK

For developers who want to build custom agents powered by the Claude Code engine, Anthropic provides the **Agent SDK**.

Instead of using the default `claude` CLI, you can build your own Node.js application that inherits Claude Code's ability to read files, run terminal commands, and use MCP tools.

### Example: Building a Custom Agent

```javascript
import { Agent } from '@anthropic-ai/claude-code-sdk';

const myAgent = new Agent({
  name: "QA-Bot",
  instructions: "You are a QA automation engineer. Your job is to run Cypress tests and fix any failing specs.",
  allowedCommands: ["npm run test:e2e", "git commit"]
});

async function run() {
  await myAgent.execute("Run the E2E suite. If the login spec fails, look at the DOM changes in the source code and fix the test selector.");
}
run();
```

> **Expert Tip:** Using the Agent SDK allows you to create highly specialized "Sub-Agents." A senior engineer might use the CLI to orchestrate a team of three sub-agents: one for writing backend code, one for writing frontend code, and one for testing.
