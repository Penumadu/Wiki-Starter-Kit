# Workflows & Automation

Claude Workflows are pre-built, multi-step automation "recipes" that allow you to chain together Claude's reasoning, MCP connections, and Computer Use to automate complex, repetitive tasks end-to-end.

## What Are Workflows?

A standard prompt is a one-time request: "Write an email." A Workflow is an automated process: "Every morning at 9 AM, read my emails, summarize the urgent ones, draft replies, and slack me the summary."

> **Expert Tip:** Think of Workflows as hiring a digital assistant with a strict checklist. You define the exact steps they need to follow, give them the tools (MCP), and let them execute.

## Anatomy of a Workflow

A Workflow consists of three main parts:
1. **Trigger** — What starts the workflow? (A schedule, an incoming email, a manual button click).
2. **Steps** — The sequence of actions (Read data → Analyze → Draft → Send).
3. **Tools** — The MCP servers or APIs needed to execute the steps.

## Built-In Desktop Workflows

Claude Desktop (2026) comes with several built-in workflow templates:

| Workflow Template | What It Does | Best For |
| :--- | :--- | :--- |
| **Morning Briefing** | Summarizes emails, calendar, and Slack | Executives, Managers |
| **Code Reviewer** | Runs `/ultrareview` on every git commit | Developers |
| **Meeting Notes** | Listens to a meeting, generates minutes, emails attendees | Project Managers |
| **Research Synthesizer** | Scrapes 5 URLs, extracts data into a CSV | Researchers, Analysts |

## Step-by-Step: Creating a Custom Workflow

Let's build a workflow that automatically triages customer support tickets.

1. **Open Workflows:** Click the "Workflows" tab in Claude Desktop.
2. **Create New:** Click "+ New Workflow" and name it "Ticket Triage."
3. **Add Trigger:** Select "Manual Trigger" (you'll click a button to run it).
4. **Add Step 1 (Fetch):** Use the Zendesk/Intercom MCP server to fetch all "Unread" tickets.
5. **Add Step 2 (Analyze):** Add a Claude processing step with the prompt: *"Analyze these tickets. Categorize them into 'Bug', 'Feature Request', or 'Billing'. Assign a priority of 1-3 based on customer urgency."*
6. **Add Step 3 (Action):** Use the Slack MCP server to post high-priority (Priority 1) tickets to the `#urgent-support` channel.
7. **Save & Run:** Save the workflow. Now, whenever you click "Run," Claude executes the entire sequence.

## Example Workflow Prompt

When defining a step in a workflow, your prompt needs to be highly structured:

```text
[TRY IT]
You are a Support Triage AI. Read the incoming ticket below.
1. Categorize it (Bug, Billing, Login Issue, Feature Request).
2. Determine urgency (Low, Medium, High).
3. Draft a polite 2-sentence response acknowledging the issue.

Output your response strictly in JSON format with keys: "category", "urgency", "draft_reply".

Ticket text: [TICKET_DATA]
```

## Human-in-the-Loop (HITL)

The safest way to run Workflows is with **Human-in-the-Loop**. This means the workflow pauses before taking any destructive or external action (like sending an email or deleting a file) and asks for your approval.

- **Drafting:** Claude drafts the email automatically.
- **Review:** The workflow pauses and pings you.
- **Approval:** You click "Approve" (or edit the draft), and the workflow continues.

## Pro Tips

- **Start Small:** Don't try to automate your entire job on day one. Automate a single 5-minute task first.
- **Test Extensively:** Run your workflow on dummy data 10 times before pointing it at real customer data or production databases.
- **Chain Prompts:** Sometimes it's better to have 3 small Claude steps (Extract → Analyze → Format) rather than 1 giant prompt that tries to do everything at once.
