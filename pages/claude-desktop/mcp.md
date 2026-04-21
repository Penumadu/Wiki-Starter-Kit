# MCP: Model Context Protocol

The Model Context Protocol (MCP) is a universal standard that allows Claude to securely connect to your local files, cloud services, databases, and third-party tools — turning it from a chat assistant into a fully connected agent.

## What Is MCP?

Before MCP, every AI tool needed custom code to connect to each service. Want Claude to read your Google Drive? Custom code. Want it to query your database? More custom code. MCP solves this by creating a **single, universal standard** — like USB for AI.

> **Expert Tip:** Think of MCP as a "Universal Adapter." Before MCP, every app had a different plug. Now, every app uses the same AI-shaped plug, allowing Claude to instantly connect to your tools without custom engineering.

## How MCP Works

| Component | Role | Example |
| :--- | :--- | :--- |
| **MCP Client** | Claude Desktop (the AI that sends requests) | "Read my latest Slack messages" |
| **MCP Server** | A small program that bridges Claude to a tool | The "Slack MCP Server" translates Claude's request into Slack API calls |
| **Data Source** | The actual tool or service being accessed | Your Slack workspace, Google Drive, PostgreSQL database |

## Available MCP Servers (2026)

| Server | What It Does |
| :--- | :--- |
| **Local Filesystem** | Read, write, and organize files on your computer |
| **Google Drive** | Access documents, spreadsheets, and presentations |
| **GitHub** | Browse repos, create issues, review pull requests |
| **Slack** | Read messages, post updates, search channels |
| **PostgreSQL / MySQL** | Query databases and analyze data |
| **Google Calendar** | Check availability, create events, manage schedules |
| **Notion** | Read and update Notion pages and databases |
| **Brave Search** | Give Claude live web search capabilities |
| **Puppeteer** | Let Claude browse and scrape web pages |

## Step-by-Step: Connecting Your First MCP Server

1. **Open Claude Desktop** → Go to **Settings** → **Developer** or **MCP**
2. **Find the config file** — On Mac it's at `~/Library/Application Support/Claude/claude_desktop_config.json`
3. **Add a server** — For the Local Filesystem server, add this to the config:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/Documents"]
    }
  }
}
```

4. **Restart Claude Desktop** — You should see a small "plug" icon indicating the server is connected
5. **Test it** — Ask Claude: *"List all the PDF files in my Documents folder"*

```text
[TRY IT]
I've connected the Local Filesystem MCP server to my Documents folder. List all files modified in the last 7 days, grouped by file type, and tell me which ones are the largest.
```

## Real-World Use Case: Automated Reporting

**Scenario:** Every Monday, you need to pull data from a database, create a summary, and post it to Slack.

1. Connect the **PostgreSQL MCP Server** to your analytics database
2. Connect the **Slack MCP Server** to your workspace
3. Ask Claude: *"Query the sales table for last week's data, calculate the total revenue by region, format it as a summary with bullet points, and post it to the #weekly-updates Slack channel."*

Claude handles the entire pipeline — database query, analysis, formatting, and delivery — in one prompt.

## Security & Permissions

- MCP servers only access what you explicitly configure (specific folders, specific databases)
- Claude always asks for your approval before executing actions that modify data
- All communication happens locally on your machine — your data never leaves your computer
- You can revoke access at any time by removing the server from your config

## Pro Tips

> **Pro-Tip:** Use the `xhigh` effort level for MCP tasks involving multiple tools (e.g., reading from a database AND posting to Slack) to ensure Claude's multi-step logic remains accurate.

> **Pro-Tip:** Start with the Local Filesystem server — it's the easiest to set up and immediately useful. You can ask Claude to organize folders, find duplicates, or summarize documents on your machine.

## MCP vs. Perplexity's Approach

| Feature | Claude MCP | Perplexity Computer |
| :--- | :--- | :--- |
| **Where it runs** | Locally on your machine | In the cloud |
| **Data privacy** | Your data stays on your device | Data processed on Perplexity's servers |
| **Best for** | Private files, databases, internal tools | Public web browsing, multi-site research |
| **Setup** | Config file + MCP servers | No setup, works out of the box |
