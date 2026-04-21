# The AI Sandwich Method

If there is only one thing you take away from AI Schools, it should be the **AI Sandwich**. This is the fundamental workflow that separates AI beginners from power users.

## The Problem with Using Just One Tool

- **If you only use Claude:** It writes beautifully and codes perfectly, but if you ask it for current events or niche facts, it might "hallucinate" (confidently make things up) because it doesn't have live internet access by default.
- **If you only use Perplexity:** It finds the exact facts with citations, but its writing style can be dry, and it struggles to generate complex code, format long essays, or adopt highly specific personas.

## The Solution: The Sandwich

The AI Sandwich combines the strengths of both tools while eliminating their weaknesses.

1. **The Top Bun (Perplexity):** Gather the raw, cited facts.
2. **The Meat (Claude):** Synthesize, format, and creatively write using *only* those facts.
3. **The Bottom Bun (Perplexity):** Verify the final output.

> **Expert Tip:** Think of building a house. Perplexity is the supplier who delivers the raw lumber and bricks to the site. Claude is the master architect who builds the house. You need both to get a good result.

## Step-by-Step Execution

### Step 1: Research (Perplexity)
Go to Perplexity and ask it to find the raw data.

```text
[TRY IT]
Use Pro Search to find the 5 most significant changes to the US Tax Code introduced in 2026 regarding small business deductions. Provide the raw facts and the source URLs.
```

### Step 2: Create (Claude)
Copy the *entire output* from Perplexity (including the source links). Open Claude and give it a strict set of instructions, pasting the Perplexity data at the bottom.

```text
[TRY IT]
You are a friendly, expert CPA writing a newsletter for small business owners.
Using ONLY the facts provided in the text below, write a 300-word email explaining the new 2026 tax changes. Do not invent any new tax rules. Maintain a reassuring tone.

Here are the facts:
[PASTE PERPLEXITY OUTPUT HERE]
```

### Step 3: Verify (Perplexity - Optional but Recommended)
If Claude's output contains a very specific claim or number that you aren't 100% sure was in the original text, take that sentence, put it back into Perplexity, and ask it to verify.

## Why This Works

By feeding Claude pre-verified information from Perplexity and telling it to use *only* that information, you completely eliminate AI hallucinations. Claude no longer has to guess the facts; it only has to do what it does best: write, format, and structure the data.

## Pro Tips

- **Use Claude Projects:** If you are building a massive sandwich (e.g., researching 10 different topics in Perplexity), save each Perplexity output as a PDF or text file and upload them all into a Claude Project. Then, have Claude write the final report based on the entire Project's knowledge base.
- **Don't skip Step 1:** Never ask Claude to "research" something unless you are using the Brave Search MCP server. Always use Perplexity to fetch the raw data first.
