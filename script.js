// Initialize Mermaid
mermaid.initialize({ startOnLoad: true, theme: 'dark' });

// Copy Prompt Function
function copyPrompt(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    });
}

// Tool Switcher Logic
const toolLogic = {
    news: { tool: 'Perplexity', reason: 'Use Perplexity for real-time search and current events. Claude is limited by its knowledge cutoff.' },
    code: { tool: 'Claude', reason: 'Claude Opus is the gold standard for complex coding, debugging, and architectural planning.' },
    essay: { tool: 'Claude', reason: 'Claude excels at long-form writing, maintaining tone, and following complex stylistic instructions.' },
    facts: { tool: 'Perplexity', reason: 'Perplexity provides direct citations for every claim, making it the best for fact-checking.' },
    projects: { tool: 'Claude', reason: 'Claude Projects allow you to upload huge context files (200k+ tokens) that persist across chats.' }
};

function switchTool(type) {
    const result = toolLogic[type];
    const resultDiv = document.getElementById('switcher-result');
    const accent = result.tool === 'Claude' ? 'var(--accent-claude)' : 'var(--accent-perplexity)';
    
    resultDiv.innerHTML = `
        <div style="color: ${accent}; font-size: 1.5rem; margin-bottom: 0.5rem;">Use ${result.tool}</div>
        <div style="font-weight: 400; font-size: 1rem; color: var(--text-muted);">${result.reason}</div>
    `;

    // Highlight active button
    document.querySelectorAll('.switcher-buttons .btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// News Data (Pre-fetched during build)
const newsData = [
    {
        title: "Claude Opus 4.7 Released",
        desc: "Anthropic's latest flagship model features enhanced vision, task budgets for agents, and a new 'xhigh' effort level for complex coding tasks.",
        tag: "Claude",
        date: "April 16, 2026"
    },
    {
        title: "Perplexity 'Personal Computer' Update",
        desc: "Perplexity now acts as a local agent on Mac, capable of organizing files, drafting emails, and orchestrating 19+ different AI models.",
        tag: "Perplexity",
        date: "April 17, 2026"
    },
    {
        title: "Agentic Workflows Surge",
        desc: "AI industry shifts from simple chat to agentic systems that autonomously execute multi-step tasks. Google & Nvidia announce new inference chips.",
        tag: "Industry",
        date: "April 19, 2026"
    }
];

function renderNews() {
    const container = document.getElementById('news-container');
    newsData.forEach(item => {
        const accent = item.tag === 'Claude' ? 'var(--accent-claude)' : (item.tag === 'Perplexity' ? 'var(--accent-perplexity)' : 'var(--text-muted)');
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="color: ${accent}; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">${item.tag} • ${item.date}</div>
            <h3>${item.title}</h3>
            <p style="font-size: 0.95rem; margin-top: 1rem;">${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

// Scroll Reveal & Active Nav
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            updateNav(entry.target.id);
        }
    });
}, observerOptions);

function updateNav(id) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
        }
    });
}

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Initial Render
renderNews();

// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
