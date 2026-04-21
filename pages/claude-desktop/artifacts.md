# Artifacts & Claude Design

Artifacts are Claude's visual workspace — a dedicated panel where Claude renders code, documents, diagrams, websites, and interactive prototypes that you can see, edit, and export in real-time.

## What Are Artifacts?

When you ask Claude to create something visual — a React component, a chart, a slide deck — it doesn't just describe it in text. It opens a **live preview panel** next to the chat where you can see the actual result, click buttons, scroll through it, and iterate on it.

> **Expert Tip:** Think of Artifacts like a "Magic Whiteboard." You talk to Claude, and it draws the finished product on the whiteboard. You can point to any part and say "change that color" or "move this section up."

## Types of Artifacts

| Type | What Claude Creates | Example Prompt |
| :--- | :--- | :--- |
| **Code** | Full working applications | "Build a Pomodoro timer with React" |
| **Documents** | Formatted reports, letters | "Write a business proposal as a formatted document" |
| **Diagrams** | Flowcharts, org charts, timelines | "Create a Mermaid diagram of our CI/CD pipeline" |
| **SVG Graphics** | Logos, icons, illustrations | "Design a minimalist logo for a coffee brand" |
| **Websites** | Complete HTML/CSS pages | "Build a landing page for a SaaS product" |
| **Slides** | Presentation decks | "Create a 5-slide strategy deck for Q3 planning" |

## Claude Design (2026 Feature)

Claude Design is the evolution of Artifacts. It allows you to create **high-fidelity prototypes, one-pagers, and interactive presentations** with one prompt.

**Key capabilities:**
- **Persistent Storage** — Artifacts are auto-saved to your team's Cowork space
- **Collaborative Editing** — Multiple team members can view and modify the same Artifact
- **Export Options** — Download as React component, PDF, PNG, or SVG
- **Version History** — Roll back to previous versions of your design

## Step-by-Step: Creating Your First Artifact

1. **Open Claude Desktop** and start a new conversation
2. **Write a visual prompt** — Example: *"Design an interactive dashboard for tracking monthly expenses. Use a modern dark theme with charts."*
3. **Watch the panel open** — Claude will render a live preview on the right side of your screen
4. **Iterate visually** — Say: *"Change the color scheme to blue and white"* or *"Add a pie chart for expense categories"*
5. **Export or share** — Click the share icon to send it to your Cowork team or download the code

## Example Prompts to Try

```text
[TRY IT]
Design a professional landing page for a fitness app called "FitTrack." Include a hero section with a gradient background, feature cards, pricing table, and a call-to-action button. Use modern design principles.
```

```text
[TRY IT]
Create a Mermaid.js diagram showing the workflow of a customer support ticket system: Customer submits ticket → Auto-categorized by AI → Assigned to agent → Resolved → Follow-up survey.
```

## Pro Tips

> **Pro-Tip:** Use the `xhigh` effort level when designing complex, multi-component artifacts. This tells Claude to spend extra time ensuring pixel-perfect layouts and smooth interactions.

> **Pro-Tip:** You can highlight a specific part of an Artifact (like a button or section) and give targeted feedback: *"Make this button larger and add a hover animation."*

## Common Mistakes to Avoid

- **Don't be vague** — "Make a website" is too broad. Say "Make a portfolio website for a photographer with a grid gallery and contact form."
- **Don't skip iteration** — The first output is a starting point. Always refine with 2-3 follow-up prompts.
- **Don't forget to export** — Artifacts live inside the chat. Export or save them before starting a new conversation.
