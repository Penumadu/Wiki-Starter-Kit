# Claude Code: Introduction & Setup

Claude Code is an agentic coding tool that reads your codebase, edits files, runs terminal commands, and integrates directly with your development environment. It is the most powerful way to use Claude for software engineering.

## What is Claude Code?

Unlike the Claude Desktop chat app, Claude Code is an **Agent**. You don't just ask it for code snippets; you give it a high-level task, and it autonomously reads your local files, writes the code, runs your tests, and commits the changes.

It is available everywhere:
- Your Terminal (CLI)
- Visual Studio Code & Cursor
- JetBrains IDEs
- The Web & Desktop App

## Installation

The recommended way to install Claude Code is via the Native Install script or your package manager.

**macOS / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash

# Or via Homebrew
brew install --cask claude-code
```

**Windows:**
```powershell
irm https://claude.ai/install.ps1 | iex

# Or via WinGet
winget install Anthropic.ClaudeCode
```

Once installed, authenticate your account:
```bash
claude auth
```

## IDE Integrations

While the terminal is powerful, you can also run Claude Code directly inside your IDE so it has immediate access to your open tabs and cursor position.

- **VS Code:** Search for `Anthropic.claude-code` in the extensions tab.
- **Cursor:** Search for `Anthropic.claude-code` in the extensions tab.
- **JetBrains:** Download the Claude Code plugin from the JetBrains marketplace.

## Getting Started: The Context Window

When you run `claude` in your terminal inside a project folder, it creates a `.claude` directory. 

The most important concept to understand is the **Context Window**. Claude Code automatically reads your directory structure. When you ask it a question, it intelligently decides *which* files it needs to read in full to answer the question, up to its 200,000 token limit.

```text
[TRY IT]
Navigate to a project folder in your terminal and type `claude`. Then prompt:

"Analyze this project's structure. What framework are we using, and where is the main entry point located?"
```

## Quick Start Actions

You can pass prompts directly via the CLI without opening the interactive session:

- **Create a feature:** `claude "Write tests for the auth module, run them, and fix any failures"`
- **Commit changes:** `claude "Commit my staged changes with a descriptive conventional commit message"`
- **Bulk review:** `git diff main --name-only | claude -p "Review these changed files for security issues"`
