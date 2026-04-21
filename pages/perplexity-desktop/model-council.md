# Model Council

One of the biggest problems with early AI was "hallucinations"—the AI making things up. Perplexity solved this in 2026 with the **Model Council**.

## What is the Model Council?

Instead of relying on a single AI model (like only using ChatGPT or only using Claude), the Model Council sends your query to **three different frontier models simultaneously** (e.g., GPT-4.5, Claude Opus, and Gemini Ultra). 

The models independently research the answer, and then they "debate" the results. If all three agree, the answer is presented to you with high confidence. If they disagree, the Model Council highlights the discrepancy.

> **Expert Tip:** Think of the Model Council like getting a medical diagnosis. You wouldn't rely on just one doctor for a major surgery; you'd get a second and third opinion. The Model Council does this automatically in 3 seconds.

## When to Use It

The Model Council uses a lot of compute power, so it shouldn't be used for everything. You should toggle it on for:
- **Medical or health inquiries**
- **Legal or compliance questions**
- **High-stakes financial research**
- **Deep technical debugging**

## How to Enable It

1. **Start a new Thread** in Perplexity.
2. **Toggle the Council:** Next to the "Focus" button, click the "Model Council" icon (it looks like three overlapping circles).
3. **Ask your question.**

```text
[TRY IT]
What are the legal implications of using open-source GPL-3.0 licensed code in a proprietary commercial SaaS application? Provide specific case law examples.
```

## Reading the Council Output

When the Council runs, the UI changes slightly:
- You will see **three loading indicators** instead of one.
- The final answer will have a **Confidence Score** (e.g., "98% Consensus").
- If there is a disagreement, you will see an expandable box called **"Points of Contention."** For example, it might say: *"GPT and Claude agree that X is true, but Gemini notes a recent 2026 court ruling that complicates this."*

## Pro Tips

> **Pro-Tip:** You can customize who sits on your Council. Go to Settings → AI Models. If you are a developer, you might want your Council to be Claude Opus, Claude Sonnet, and GPT-4.5. If you are a researcher, you might prefer Gemini, Perplexity Native, and Llama 3.

> **Warning:** Model Council queries count as "Pro" searches and use more of your daily quota. Turn it off for simple queries like "What time is the Super Bowl?"
