# Vision Capabilities

Claude isn't just a text engine; it has advanced multi-modal vision capabilities. It can "see" and understand images, charts, and diagrams with remarkable accuracy.

## What Can Claude See?

You can upload image files (PNG, JPEG, WEBP) directly into the chat or into a Project's knowledge base. Claude can analyze:
- **Handwritten Notes:** Transcribe and summarize meeting whiteboard photos.
- **UI Mockups:** Convert a screenshot of a website into working HTML/CSS/React code.
- **Data Charts:** Read graphs, pie charts, and complex infographics and extract the underlying data into a CSV format.
- **Technical Diagrams:** Understand architecture diagrams and explain the data flow.

## Step-by-Step: From Sketch to Code

One of the most magical workflows in Claude is turning a rough sketch into a working prototype via Artifacts.

1. **Sketch:** Draw a rough wireframe of a mobile app screen on a piece of paper.
2. **Snap & Upload:** Take a photo with your phone and upload it to Claude Desktop.
3. **Prompt:** 

```text
[TRY IT]
I have uploaded a sketch of a new mobile app dashboard. 
Please write the React/Tailwind code to build this interface. 
Use modern, clean styling, and output the result as an Artifact so I can see it.
```

4. **Result:** Claude will literally build the app you just drew on a napkin.

## Visual Data Extraction

Instead of manually typing data from a static infographic, let Claude do it.

1. Take a screenshot of a complex financial chart from a PDF.
2. Upload it to Claude.
3. Prompt: *"Extract all the data points from this chart and format them as a Markdown table. Then, tell me what the biggest trend is over the last 5 years."*

## Pro Tips

> **Pro-Tip:** Claude's vision model is spatial. If you upload a screenshot of a messy desk and ask "Where are my keys?", it can tell you "They are next to the coffee mug in the top right corner."

> **Warning:** Claude's vision is powerful, but it cannot identify specific human faces (for privacy reasons) and it should not be used to interpret medical images (like X-rays) for diagnostic purposes.
