# File Uploads & Analysis

While Perplexity is famous for searching the web, it also has robust file upload capabilities. Understanding how Perplexity handles files compared to Claude is essential for building efficient workflows.

## How Perplexity Handles Files

When you upload a file (PDF, CSV, TXT, or Image) to Perplexity, it acts as a **context constraint**. You can tell Perplexity to search the web *based on* the file, or you can tell it to *only* look at the file.

### Supported File Types
- **Documents:** PDFs, Word docs, TXT.
- **Data:** CSV, JSON.
- **Images:** Screenshots, charts, photographs.

## Perplexity vs. Claude for Files

If both tools can analyze files, which one should you use?

| Feature | Perplexity | Claude Projects |
| :--- | :--- | :--- |
| **Best For** | Fact-checking a document against the live web | Deep, multi-document synthesis and long-form writing |
| **Storage** | Ephemeral (per thread/collection) | Persistent (Saved in a 200k context knowledge base) |
| **Data Extraction** | Fast, basic extraction | Complex formatting, reasoning, and code generation |
| **Live Web Integration** | Yes ("Verify the claims in this PDF via the web") | No (Claude relies strictly on the uploaded text) |

## The "Verify via Web" Workflow

This is the most powerful way to use File Uploads in Perplexity.

**Scenario:** A vendor sends you a 10-page PDF proposal claiming their software is the fastest on the market and citing an "independent study."

1. **Upload the PDF** to a new Perplexity thread.
2. **Prompt:** 

```text
[TRY IT]
Read the attached vendor proposal. Extract their 3 main claims regarding speed and market share. Then, use the web to verify if these claims are true, and find out if there are any recent controversies regarding their software.
```

3. **The Result:** Perplexity reads the PDF, extracts the claims, goes to the web, searches for the independent study, reads Reddit reviews, and gives you a factual breakdown of whether the vendor is telling the truth.

## Code and Data Files

If you upload a CSV file of sales data to Perplexity, it can use the **Wolfram Alpha focus mode** to run statistical analysis on the data, generating charts and identifying outliers. 

However, if you want to write a Python script to build a web dashboard based on that CSV, you should upload it to **Claude**, as Claude's coding abilities are superior.
