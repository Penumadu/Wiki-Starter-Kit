# Auto-Memory & CLAUDE.md

When working with an AI agent in a codebase, the biggest challenge is context. How does the AI know your team's specific coding standards? How does it remember a bug it fixed yesterday? Claude Code solves this with `CLAUDE.md` and Auto-Memory.

## The CLAUDE.md File

`CLAUDE.md` is a special file you place at the root of your repository. It acts as the "System Prompt" for Claude Code for that specific project. Every time Claude Code runs in that folder, it reads this file first.

You should store architecture rules, style guides, and build commands here.

### Example CLAUDE.md
```markdown
# Project Rules
- This is a Next.js 14 project using App Router. Do not use Pages router.
- We use TailwindCSS for styling. Do not write custom CSS files.
- All new components must include a `.test.tsx` file using Vitest.

# Commands
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`
```

> **Expert Tip:** Commit `CLAUDE.md` to your Git repository. This ensures that every developer on your team who uses Claude Code gets the exact same consistent output tailored to your project.

## Auto-Memory

Writing rules in `CLAUDE.md` is great for static instructions, but what about dynamic knowledge? (e.g., "We tried upgrading React to v19 but it broke the router, so we are staying on v18 for now").

Claude Code features **Auto-Memory**. As you work, Claude Code automatically writes important context, decisions, and learned lessons to the `.claude/memory` directory. 

### How it Works
1. You spend an hour debugging a complex database connection issue with Claude Code.
2. Once resolved, Claude Code automatically generates a memory: *"Learned: The staging database requires SSL mode 'require', not 'prefer'."*
3. Next week, if you ask Claude Code to write a new database script, it will pull that memory from the `.claude` folder and apply the correct SSL setting automatically.

```text
[TRY IT]
Open Claude Code in your terminal and say:
"Please remember that going forward, we are deprecating the `fetchUser` function in favor of the new `UserAPI.get()` class method."

Claude will store this instruction in its memory for future sessions.
```

## Managing Context

While Auto-Memory is powerful, you are always in control. You can view, edit, or delete memories stored in the `.claude` directory if they become outdated.
