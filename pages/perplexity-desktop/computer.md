# Perplexity Computer Agent

In 2026, Perplexity evolved from an answer engine to an **Action Engine**. The Perplexity Computer Agent allows the AI to not just find information, but to execute tasks on the web on your behalf.

## What is the Computer Agent?

While Pro Search reads text from websites, the Computer Agent spins up a secure, cloud-based browser container. It can literally click buttons, fill out forms, navigate paywalls, and interact with complex web applications just like a human would.

> **Expert Tip:** If you ask Perplexity "What is the cheapest flight to Tokyo?", Pro Search will read travel blogs and give you an estimate. The **Computer Agent** will go to Expedia, fill out the departure and arrival fields, click search, wait for the page to load, and extract the exact live prices.

## Core Capabilities

| Feature | What It Does | Example Use Case |
| :--- | :--- | :--- |
| **Deep Web Scraping** | Navigates javascript-heavy, interactive sites | Extracting live stock data from dynamic charts |
| **Form Filling** | Enters data into search fields or calculators | Running a mortgage calculator on a bank's website |
| **Authentication** | Securely logs into your connected accounts | Summarizing your unread Gmail messages |
| **Transactions** | Completes purchases (with approval) | Booking a dinner reservation |

## The "Personal CFO" Integration

The most popular use of the Computer Agent in 2026 is the **Personal CFO** feature. 

By connecting your financial institutions via Plaid securely within the Perplexity Desktop app, the Computer Agent can analyze your actual financial data.

**How to use it:**
1. Connect your accounts in Perplexity Settings → Integrations.
2. Ask a financial question.

```text
[TRY IT]
Analyze my credit card spending for the last 30 days. Group the expenses by category. Then, use the web to find 3 subscription services I am paying for that I can get cheaper alternatives for.
```

Perplexity will use the Computer Agent to read your bank data, identify a $15/mo Netflix subscription, search the web, and suggest a bundled alternative.

## Cloud Agents vs. Local Agents

It's important to understand the difference between Perplexity's Computer Agent and Claude's Computer Use:

- **Perplexity Computer:** Runs in the **cloud**. It is perfect for interacting with public websites, booking flights, and doing web-heavy research. It cannot see your local files or open local apps.
- **Claude Computer Use:** Runs **locally** on your machine. It can open your local Excel files, run terminal commands, and organize your desktop. 

## Pro Tips

> **Pro-Tip:** Use the Computer Agent for "Comparison Shopping." Ask: *"Use the Computer Agent to go to Amazon and Best Buy. Find the exact price, shipping time, and return policy for the Sony WH-1000XM5 headphones right now."*

> **Warning:** The Computer Agent is powerful. For actions that involve spending money or sending messages, Perplexity will always pause and show you a "Confirm Action" button before proceeding. Never disable this safeguard.
