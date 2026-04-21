# Collections & Custom AI

Collections in Perplexity are not just folders for organizing your searches. They are **Custom AI Environments** tailored to specific topics, with their own custom instructions and default AI models.

## What is a Collection?

When you create a Collection, you are creating a specialized silo of knowledge. Every search you perform inside that Collection inherits specific rules that you define.

> **Expert Tip:** Think of a Collection like a "Department" in a company. You have the Legal Department Collection, the Marketing Collection, and the Coding Collection. When you walk into the Legal Department, the AI automatically acts like a lawyer and only searches legal databases.

## Setting Up a Collection

1. **Create:** In the left sidebar, click "+ New Collection."
2. **Name it:** e.g., "Python Development."
3. **Set the AI Prompt (Crucial Step):** This tells the AI how to behave for every search in this Collection.

```text
[TRY IT]
You are a senior Python developer. When I ask a coding question, do not give me long explanations. Give me the raw, optimized Python code first, followed by a maximum of 3 bullet points explaining the logic. Always check StackOverflow and GitHub for the latest patterns.
```

## Collaborative Collections

In 2026, Perplexity upgraded Collections to be fully collaborative for teams.
- **Shared Prompts:** The entire team benefits from the same highly-tuned AI prompt.
- **Shared Threads:** If a junior developer asks a question and gets a great answer, the senior developer can see that thread in the Collection and add follow-up questions.
- **Document Grounding:** You can upload PDFs or code files directly into the Collection. The AI will search these files *before* searching the public web.

## Claude Projects vs. Perplexity Collections

They sound similar, but they serve different purposes:

| Feature | Claude Projects | Perplexity Collections |
| :--- | :--- | :--- |
| **Primary Use** | Working with your private data | Researching the live web with a specific persona |
| **Data Source** | ONLY the files you upload | The internet + files you upload |
| **Best For** | Writing, Coding, Deep Analysis | Quick answers, Web research, Fact-checking |

## Pro Tips

> **Pro-Tip:** Create a "Health & Fitness" Collection. Set the prompt to: *"Only provide information verified by peer-reviewed medical journals or the NIH. Ignore all wellness blogs and supplements marketing."* This instantly filters out internet junk for all your health searches.

> **Pro-Tip:** You can pin a Collection to your Perplexity homepage so that it's just one click away when you open the app.
