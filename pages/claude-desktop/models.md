# The Claude Model Family

Claude isn't just one AI; it's a family of models designed for different tasks. Understanding which model to use is critical for balancing speed, cost, and intelligence.

## The Claude 3.5/4.0 Hierarchy

| Model | Intelligence | Speed | Cost (API) | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Opus** | Maximum | Slowest | Highest | Complex reasoning, deep coding, strategic analysis |
| **Claude Sonnet** | Very High | Fast | Medium | Daily tasks, most coding, drafting, artifact creation |
| **Claude Haiku** | High | Near-Instant | Lowest | Data extraction, simple categorization, chatbots |

## Deep Dive: When to Use Which

### 1. Claude Opus (The Architect)
Opus is Anthropic's most capable model. It should be reserved for your most difficult, multi-step problems.
- **Use it when:** You are designing a complex system architecture from scratch, doing deep financial analysis on a 100-page PDF, or need the absolute highest level of nuanced creative writing.
- **Why not use it always?** It is noticeably slower to generate text, and if you are using the API, it is significantly more expensive.

### 2. Claude Sonnet (The Workhorse)
For 90% of users, Sonnet is the default and best choice. It strikes the perfect balance.
- **Use it when:** You are writing React code, drafting emails, using Artifacts, or doing general brainstorming.
- **Why it's great:** It feels "snappy" and responsive, while still being smarter than most other models on the market.

### 3. Claude Haiku (The Sprinter)
Haiku is designed for speed and volume.
- **Use it when:** You need to categorize 1,000 customer support tickets in 5 seconds, or when building a customer-facing chatbot where immediate response time is the top priority.
- **Why it's great:** It is incredibly cheap and fast.

## Switching Models in Desktop

You can switch models mid-conversation in Claude Desktop:
1. Look for the model selector at the bottom of the chat interface.
2. If a task requires heavy lifting, switch to Opus.
3. If you just need a quick format change, switch back to Haiku or Sonnet to save your usage limits.

> **Expert Tip:** A common advanced workflow is to use **Haiku** to quickly clean and format a massive dataset, and then pass that clean data to **Opus** for deep analysis.
