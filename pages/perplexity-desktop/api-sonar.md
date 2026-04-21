# The Perplexity API (Sonar)

For developers looking to integrate live, cited web search into their own applications, Perplexity offers the **Sonar** API. It provides programmatic access to Perplexity's underlying search and reasoning engine.

## What are the Sonar Models?

Perplexity doesn't just pass queries to GPT or Claude; it uses its own custom-trained, open-weights models optimized specifically for web search and RAG (Retrieval-Augmented Generation). These are the **Sonar** models.

| Model Series | Size / Speed | Best For |
| :--- | :--- | :--- |
| **Sonar Small** | Lightning fast, cheap | Simple, quick fact-retrieval in real-time |
| **Sonar Large** | Slower, highly capable | Deep research synthesis, complex reasoning |
| **Sonar Online** | Live internet access | Any query requiring data from today |
| **Sonar Chat** | Offline / Internal | Reasoning over text you provide without hitting the web |

## The Power of Citations in the API

The most valuable feature of the Perplexity API is the `citations` array.

When you make a standard LLM API call (like to OpenAI), you get a block of text. When you make a call to `sonar-pro-online`, you get the text **AND** an array of URLs that back up the claims made in the text. This allows developers to build AI applications that users can actually trust.

## Basic API Example

Here is how you use the Perplexity API in Node.js to get a cited answer:

```javascript
const options = {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_PERPLEXITY_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'sonar-pro',
    messages: [
      {role: 'system', content: 'Be precise and concise.'},
      {role: 'user', content: 'What is the current status of the Artemis II moon mission?'}
    ],
    return_citations: true
  })
};

fetch('https://api.perplexity.ai/chat/completions', options)
  .then(response => response.json())
  .then(data => {
      console.log("Answer:", data.choices[0].message.content);
      console.log("Sources:", data.citations);
  })
  .catch(err => console.error(err));
```

## Perplexity API vs. Claude Tool Use

If you are a developer, you might wonder: Should I use Perplexity's API for search, or give Claude a web-search tool via MCP?

- **Use Perplexity API (Sonar)** when your app's primary function is finding and displaying cited facts to a user instantly. Perplexity handles the scraping, reading, and synthesizing on its backend.
- **Use Claude Tool Use (MCP)** when your app requires complex agentic logic, where web search is just one small step in a larger workflow (e.g., "Search the web, then write a Python script, then save it to my database").
