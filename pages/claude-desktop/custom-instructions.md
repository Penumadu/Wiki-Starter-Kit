# Custom Instructions & Prompt Library

To get the most out of Claude, you shouldn't have to repeat who you are or what you want every single time you start a chat. This is where **Custom Instructions** and the native **Prompt Library** come in.

## Custom Instructions (System Prompts)

Custom Instructions act as a global "System Prompt." They run silently in the background of every single conversation you start.

### How to Set Them Up
1. Click on your profile icon in the bottom left.
2. Select **Settings**, then **Custom Instructions**.
3. You will see two boxes: "About You" and "How Claude Should Respond."

### Box 1: About You
Give Claude context about your life and work.
*Example:* "I am a senior frontend engineer working primarily in React and TypeScript. I live in Toronto. I prefer direct, concise communication."

### Box 2: How Claude Should Respond
Set global rules for Claude's behavior.

```text
[TRY IT]
1. Never apologize or use filler phrases like "Certainly!" or "Here is the code." Just give me the answer.
2. Always write code in TypeScript unless specified otherwise.
3. If you don't know the answer, tell me exactly what context you are missing.
```

## The Native Prompt Library

In 2026, Claude introduced a built-in Prompt Library to save and share your best workflows.

### Saving a Prompt
When you write a great, complex prompt, you can save it as a template:
1. Highlight your prompt in the chat.
2. Click **"Save to Library"**.
3. Add variables using curly braces (e.g., `[Paste article here]`).

### Using a Saved Prompt
When you open a new chat, simply type `/` to pull up your Prompt Library. Select the prompt, fill in the variable, and hit enter.

## Real-World Example: The "Tone Matcher" Prompt

Save this in your Prompt Library for whenever you need to draft an email:

```text
[TRY IT]
You are an expert copywriter. I need to write an email about: [Insert Topic].

First, analyze the writing style of this text:
[Insert a previous email you wrote]

Now, write the new email, perfectly matching the tone, vocabulary, and sentence structure of my writing style.
```

> **Expert Tip:** If you are on a Team plan, you can publish prompts from your Library to the "Team Library," allowing your entire company to use standardized, highly-optimized prompts for tasks like customer support or code reviews.
