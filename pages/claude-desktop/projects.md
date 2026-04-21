# Projects & Knowledge Base

Projects allow you to upload documents, codebases, and reference material into a persistent knowledge base that Claude remembers across every conversation within that project.

## What Are Projects?

Normally, when you start a new chat with Claude, it starts fresh with no memory of your previous conversations. **Projects change this.** You upload your files once, and Claude has instant access to all of them every time you open a new chat inside that project.

> **Expert Tip:** Think of a Project like giving Claude a "Specialized Briefcase." Inside that briefcase, you put every document it needs for a specific job. Whenever you ask a question inside that Project, Claude reaches into the briefcase first before answering.

## Why Projects Matter

| Without Projects | With Projects |
| :--- | :--- |
| You paste text into every new chat | Upload once, access forever |
| Claude forgets between conversations | Claude remembers your entire library |
| Limited to what fits in one message | Up to 200,000 tokens of context |
| Generic responses | Responses grounded in YOUR data |

## What You Can Upload

- **PDFs** — Research papers, contracts, manuals, reports
- **Code files** — Entire repositories, config files, READMEs
- **Text documents** — Meeting notes, SOPs, guidelines
- **Spreadsheet data** — CSV exports, data tables
- **Images** — Screenshots, diagrams, whiteboard photos

## Step-by-Step: Setting Up Your First Project

1. **Open Claude Desktop** and click **"Projects"** in the left sidebar
2. **Click "+ New Project"** and give it a descriptive name (e.g., "Q3 Marketing Strategy")
3. **Upload your knowledge files** — Drag and drop PDFs, code files, or paste text directly
4. **Set Project Instructions** — This is crucial. Write a custom instruction like:

```text
[TRY IT]
You are a senior marketing strategist. When answering questions, always reference the uploaded documents first. Format responses with clear headers and bullet points. If you're unsure about something, say so rather than guessing.
```

5. **Start chatting** — Open a new conversation within the Project. Claude now has full access to everything you uploaded.

## Real-World Use Case: Technical Documentation

**Scenario:** You're a developer joining a new team with a complex codebase.

1. Upload the entire codebase README, architecture docs, and API specs to a Project called "Team Codebase"
2. Set the instruction: *"Act as a senior engineer familiar with this codebase."*
3. Ask: *"According to the architecture doc, how does the authentication flow work?"*
4. Ask: *"Which file handles the payment webhook?"*
5. Ask: *"Write a new API endpoint for user preferences following the patterns in the existing code."*

Claude answers using YOUR code's patterns — not generic examples from the internet.

## Claude Cowork (Team Feature)

In 2026, Claude introduced **Cowork** — a way to share Projects with your team.

- **Shared Knowledge** — Anyone in your Cowork space can contribute files to the Project
- **Team Instructions** — Set a team-wide persona so everyone gets consistent answers
- **Activity Feed** — See what questions your team is asking the AI
- **Analytics API** — Track token usage and response quality with OpenTelemetry

## Pro Tips

> **Pro-Tip:** Create separate Projects for separate concerns. Don't dump everything into one Project. A "Legal Contracts" Project and a "Product Roadmap" Project will give you much better results than one giant "Everything" Project.

> **Pro-Tip:** Update your Project files regularly. If your company releases a new policy or your codebase changes, upload the latest version. Claude always uses the most recently uploaded files.

## Common Mistakes

- **Uploading too much noise** — Don't upload your entire email archive. Upload only relevant, high-quality documents.
- **Skipping the instructions** — Project Instructions are the most powerful part. Without them, Claude doesn't know how to prioritize your data.
- **Ignoring token limits** — Each project supports ~200k tokens. If you hit the limit, prioritize the most important documents.
