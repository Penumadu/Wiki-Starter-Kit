# CI/CD & Automation

Claude Code isn't just for local development on your laptop. It is designed to be integrated into your CI/CD pipelines to automate code reviews, translations, and scheduled tasks.

## GitHub Actions & GitLab CI

You can run Claude Code in a headless mode inside your CI/CD pipeline. 

### Automated Code Review Example
Imagine a workflow where every time a developer opens a Pull Request, Claude Code automatically reads the diff, checks it against your `CLAUDE.md` rules, and posts a review comment.

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code
      - name: Run Claude Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          git diff origin/main | claude -p "Review this diff for security issues and performance bottlenecks. Output the review in markdown format." > review.md
      # (Additional steps to post review.md as a PR comment)
```

## Scheduled Tasks (Routines)

Claude Code can handle recurring, background tasks. There are three main ways to schedule automation:

### 1. Routines (Cloud)
Routines run on Anthropic-managed infrastructure. They keep running even when your computer is turned off. 
- **Trigger:** Time-based (e.g., every morning at 8 AM) or Event-based (e.g., when a GitHub webhook fires).
- **Use Case:** "Every morning at 8 AM, read my GitHub issues, summarize the high-priority bugs, and Slack them to me."

### 2. Desktop Scheduled Tasks (Local)
These run locally on your machine. They require your computer to be awake but have the advantage of accessing your local files securely.
- **Use Case:** "Every Friday at 5 PM, run `npm run lint:fix` across my local codebase and commit any formatting changes."

### 3. The `/loop` Command
For quick, temporary polling, you can use `/loop` directly in your active terminal session.
- **Use Case:** You are waiting for a long deployment to finish. Type: `/loop Every 30 seconds, curl the staging server. When it returns 200 OK, play a sound and stop the loop.`

```text
[TRY IT]
In your terminal, use the schedule command:
`/schedule Every hour, check the ./logs/error.log file. If there are new exceptions, summarize them and output to summary.txt`
```
