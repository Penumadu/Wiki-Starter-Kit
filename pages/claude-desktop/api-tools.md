# API & Tool Use (Function Calling)

While the Claude Desktop app is powerful, the Anthropic API allows developers to build custom applications powered by Claude. The most important feature of the API is **Tool Use** (also known as Function Calling).

## What is Tool Use?

By default, Claude cannot interact with the outside world. However, via the API, you can define specific "Tools" (functions) that Claude is allowed to use. 

If you give Claude a tool called `get_current_weather(location)`, and the user asks "What's the weather in Seattle?", Claude will pause, tell your application to run the `get_current_weather("Seattle")` function, wait for your app to return the result, and then write the final answer to the user.

> **Expert Tip:** This is exactly how the Model Context Protocol (MCP) works under the hood. MCP is just a standardized way of providing these tools to Claude.

## Basic API Example

Here is what a basic API call using the official Node.js SDK looks like:

```javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: 'your-api-key', // Set this in your environment variables
});

async function main() {
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1000,
    temperature: 0,
    system: "You are a helpful assistant.",
    messages: [
      { role: "user", content: "Write a short poem about a server crashing." }
    ]
  });
  console.log(msg.content[0].text);
}
main();
```

## How to Define a Tool

When making an API request, you pass an array of tools in the JSON schema format:

```javascript
const tools = [
  {
    name: "get_stock_price",
    description: "Get the current stock price for a given ticker symbol.",
    input_schema: {
      type: "object",
      properties: {
        ticker: {
          type: "string",
          description: "The stock ticker symbol, e.g. AAPL or MSFT"
        }
      },
      required: ["ticker"]
    }
  }
];
```

## The Developer Console

To get started with the API, visit `console.anthropic.com`.
Here you can:
1. **Generate API Keys:** Manage your authentication tokens.
2. **Workbench:** Test your prompts and tools in a visual playground before writing code.
3. **Prompt Caching:** (New in 2026) Cache large context blocks (like a 100-page book) so you don't pay to re-process it on every API call. This reduces costs by up to 90% for repetitive long-context queries.

## Next Steps for Developers

If you want to build AI applications, don't start by writing raw API requests. Start by building an **MCP Server**. By building an MCP server, your custom tools instantly become available inside the Claude Desktop app, saving you from having to build your own chat UI.
