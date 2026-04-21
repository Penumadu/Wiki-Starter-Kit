# Skills, Hooks & MCP

To make Claude Code truly yours, you can extend its capabilities using Custom Commands (Skills), Lifecycle Hooks, and the Model Context Protocol (MCP).

## Custom Commands (Skills)

Instead of typing the same long prompt every day, you can define **Custom Commands** in your `.claude/config.json` file. These act as shortcuts.

### Creating a Skill

Edit your `.claude/config.json`:
```json
{
  "commands": {
    "/review-pr": "Run git diff against the main branch. Review the changes for security flaws, performance issues, and adherence to our CLAUDE.md rules. Output a markdown summary.",
    "/deploy-staging": "Run the npm build script. If it succeeds, run the deployment script to our staging environment."
  }
}
```

Now, when you open Claude Code, you can simply type `/review-pr`, and Claude will execute the entire complex workflow.

## Lifecycle Hooks

Hooks allow you to run specific scripts or prompts automatically *before* or *after* Claude takes an action.

- **Pre-commit Hook:** You can configure Claude to always run your test suite automatically before it attempts to write a git commit.
- **Post-generation Hook:** You can configure Claude to run a linter (like ESLint or Prettier) automatically on any file it edits, ensuring the AI's code matches your formatting perfectly.

## Connecting MCP Servers

As covered in the Desktop modules, the Model Context Protocol (MCP) connects Claude to external tools. Claude Code (the CLI) fully supports MCP.

By modifying your `.claude/config.json`, you can give your terminal agent access to external databases, Slack, or GitHub.

### Example: Connecting PostgreSQL
```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost/mydb"]
    }
  }
}
```

```text
[TRY IT]
Once configured, you can type in your terminal:
"Query the local postgres database for the 5 most recent users, format their emails into a CSV file, and save it to my desktop."

Claude Code will use the MCP server to hit the database, write the file, and complete the task autonomously.
```

> **Expert Tip:** Combining Custom Commands with MCP is the ultimate power move. You can create a `/weekly-report` command that uses the GitHub MCP server to read all your merged PRs for the week, uses the Slack MCP server to read your messages, and writes a summary document.
