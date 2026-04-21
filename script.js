/* =============================================
   AI Schools — Engine v2
   ============================================= */

// Curriculum Manifest
const curriculum = [
    { type: "header", title: "Getting Started" },
    { id: "intro", title: "Welcome to AI Schools", path: "pages/intro.md", icon: "ph-house" },
    { id: "cheat-sheet", title: "Cheat Sheet: Which Tool?", path: "pages/cheat-sheet.md", icon: "ph-lightning" },

    { type: "header", title: "Claude Desktop Core" },
    { id: "models", title: "Model Selection (Opus/Sonnet)", path: "pages/claude-desktop/models.md", icon: "ph-brain" },
    { id: "artifacts", title: "Artifacts & Claude Design", path: "pages/claude-desktop/artifacts.md", icon: "ph-palette" },
    { id: "projects", title: "Projects & Knowledge Base", path: "pages/claude-desktop/projects.md", icon: "ph-books" },
    { id: "vision", title: "Vision & Image Analysis", path: "pages/claude-desktop/vision.md", icon: "ph-eye" },
    { id: "custom-instructions", title: "System Prompts & Library", path: "pages/claude-desktop/custom-instructions.md", icon: "ph-faders" },

    { type: "header", title: "Claude Advanced & Enterprise" },
    { id: "mcp", title: "MCP: Connecting Tools", path: "pages/claude-desktop/mcp.md", icon: "ph-plugs-connected" },
    { id: "workflows", title: "Workflows & Automation", path: "pages/claude-desktop/workflows.md", icon: "ph-git-fork" },
    { id: "team-enterprise", title: "Team & Enterprise Controls", path: "pages/claude-desktop/team-enterprise.md", icon: "ph-shield-check" },
    { id: "api-tools", title: "API & Tool Use (Devs)", path: "pages/claude-desktop/api-tools.md", icon: "ph-code" },
    { id: "quiz-claude", title: "✅ Quiz: Claude Mastery", path: "pages/quiz-claude.md", icon: "ph-exam" },

    { type: "header", title: "Claude Code Mastery" },
    { id: "code-intro", title: "Intro & IDE Setup", path: "pages/claude-code/intro-setup.md", icon: "ph-terminal-window" },
    { id: "code-memory", title: "Auto-Memory & CLAUDE.md", path: "pages/claude-code/memory.md", icon: "ph-brain" },
    { id: "code-skills", title: "Skills, Hooks & MCP", path: "pages/claude-code/skills-hooks.md", icon: "ph-anchor" },
    { id: "code-auto", title: "CI/CD & Automation", path: "pages/claude-code/automation.md", icon: "ph-robot" },
    { id: "code-platforms", title: "Agent SDK & Remote", path: "pages/claude-code/platforms.md", icon: "ph-devices" },

    { type: "header", title: "Perplexity Desktop" },
    { id: "pro-search", title: "Pro Search & Focus Modes", path: "pages/perplexity-desktop/pro-search.md", icon: "ph-magnifying-glass-plus" },
    { id: "discover-feed", title: "The Discover Feed", path: "pages/perplexity-desktop/discover-feed.md", icon: "ph-newspaper-clipping" },
    { id: "file-analysis", title: "File Uploads & Analysis", path: "pages/perplexity-desktop/file-analysis.md", icon: "ph-file-pdf" },
    { id: "model-council", title: "Model Council (Consensus)", path: "pages/perplexity-desktop/model-council.md", icon: "ph-users-three" },
    { id: "collections", title: "Collections & Custom AI", path: "pages/perplexity-desktop/collections.md", icon: "ph-folders" },
    { id: "ppages", title: "Pages & Publishing", path: "pages/perplexity-desktop/pages.md", icon: "ph-article" },

    { type: "header", title: "Perplexity Advanced" },
    { id: "computer", title: "Computer Agent & CFO", path: "pages/perplexity-desktop/computer.md", icon: "ph-robot" },
    { id: "shopping", title: "Buy with Pro (Shopping)", path: "pages/perplexity-desktop/shopping.md", icon: "ph-shopping-cart" },
    { id: "api-sonar", title: "Sonar API (Devs)", path: "pages/perplexity-desktop/api-sonar.md", icon: "ph-code" },

    { type: "header", title: "Mastery Workflows" },
    { id: "ai-sandwich", title: "The AI Sandwich Method", path: "pages/workflows/ai-sandwich.md", icon: "ph-hamburger" },
    { id: "mobile-apps", title: "Mobile & Voice Workflows", path: "pages/workflows/mobile-apps.md", icon: "ph-device-mobile" },
    { id: "use-cases", title: "Real-World Use Cases", path: "pages/workflows/use-cases.md", icon: "ph-briefcase" },
];

const flatCurriculum = curriculum.filter(i => i.id);
let progress = JSON.parse(localStorage.getItem('ai-schools-progress') || '{}');

// ---- Init ----
function init() {
    renderSidebar();
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    setupSearch();
    setupMobileToggle();
    updateProgress();
}

// ---- Sidebar ----
function renderSidebar() {
    const nav = document.getElementById('nav-content');
    nav.innerHTML = '';
    let currentGroup = null;

    curriculum.forEach(item => {
        if (item.type === 'header') {
            currentGroup = document.createElement('div');
            currentGroup.className = 'nav-group';
            currentGroup.innerHTML = `<h5>${item.title}</h5>`;
            nav.appendChild(currentGroup);
        } else {
            const a = document.createElement('a');
            a.className = 'nav-item' + (progress[item.id] ? ' completed' : '');
            a.href = `#${item.path}`;
            a.innerHTML = `<i class="ph ${item.icon || 'ph-file-text'}"></i> ${item.title}`;
            a.dataset.id = item.id;
            (currentGroup || nav).appendChild(a);
        }
    });
}

// ---- Routing ----
function handleRouting() {
    const hash = window.location.hash.slice(1);
    if (hash === 'playground') {
        showPlayground();
        return;
    }
    const path = hash || flatCurriculum[0].path;
    hidePlayground();
    loadPage(path);
}

// ---- Load Page ----
async function loadPage(path) {
    const viewer = document.getElementById('markdown-viewer');
    const breadcrumb = document.getElementById('breadcrumb');

    viewer.innerHTML = '<div class="loading-state"><div class="spinner"></div><span>Loading lesson...</span></div>';
    document.getElementById('lesson-nav').style.display = 'flex';
    document.getElementById('lesson-header').style.display = 'block';

    try {
        const res = await fetch(path);
        if (!res.ok) throw new Error('Not found');
        let md = await res.text();

        // Strip frontmatter
        md = md.replace(/^---[\s\S]*?---\s*/, '');

        // Render
        viewer.innerHTML = marked.parse(md);

        // Breadcrumb
        const current = flatCurriculum.find(i => i.path === path);
        if (current) {
            breadcrumb.innerHTML = `<a href="#pages/intro.md">Home</a> › ${current.title}`;
            markComplete(current.id);
        }

        // Enhance UI elements
        enhanceContent();
        updateActiveNav(path);
        updateNavButtons(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (e) {
        viewer.innerHTML = `<h2>📄 Lesson Not Found</h2><p>This page is under construction. <a href="#pages/intro.md">Return to Home</a></p>`;
    }
}

// ---- Enhance Content ----
function enhanceContent() {
    // Copy buttons on code blocks
    document.querySelectorAll('#markdown-viewer pre').forEach(pre => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn-code';
        btn.innerHTML = 'Copy';
        btn.onclick = () => {
            navigator.clipboard.writeText(pre.innerText.replace('Copy', '').trim());
            btn.innerHTML = '✓ Copied';
            setTimeout(() => btn.innerHTML = 'Copy', 2000);
        };
        pre.style.position = 'relative';
        pre.appendChild(btn);
    });

    // Transform [TRY IT] blocks
    document.querySelectorAll('#markdown-viewer pre').forEach(pre => {
        const text = pre.querySelector('code')?.innerText || pre.innerText;
        if (text.includes('[TRY IT]')) {
            const clean = text.replace('[TRY IT]', '').replace('Copy', '').trim();
            const box = document.createElement('div');
            box.className = 'try-it-box';
            box.innerHTML = `
                <h4><i class="ph ph-play-circle"></i> Try it Yourself</h4>
                <pre><code>${escapeHtml(clean)}</code></pre>
                <div class="try-it-actions">
                    <button class="btn-primary" onclick="copyText(\`${clean.replace(/`/g, '\\`')}\`)"><i class="ph ph-copy"></i> Copy Prompt</button>
                    <a class="btn-secondary" href="https://claude.ai" target="_blank"><i class="ph ph-arrow-square-out"></i> Open Claude</a>
                    <a class="btn-secondary" href="https://perplexity.ai" target="_blank"><i class="ph ph-arrow-square-out"></i> Open Perplexity</a>
                </div>
            `;
            pre.parentNode.replaceChild(box, pre);
        }
    });

    // Transform blockquotes with specific markers
    document.querySelectorAll('#markdown-viewer blockquote').forEach(bq => {
        const html = bq.innerHTML;
        if (html.includes('Pro-Tip') || html.includes('Expert Tip')) {
            bq.className = 'expert-tip';
        } else if (html.includes('Warning') || html.includes('⚠')) {
            bq.className = 'warning-box';
        }
    });
}

function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function copyText(text) {
    navigator.clipboard.writeText(text);
    // Show small toast
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#04AA6D;color:white;padding:0.75rem 1.5rem;border-radius:8px;font-weight:600;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.2)';
    toast.innerText = '✓ Copied to clipboard!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ---- Navigation ----
function navigatePage(dir) {
    const hash = window.location.hash.slice(1) || flatCurriculum[0].path;
    const idx = flatCurriculum.findIndex(i => i.path === hash);
    const next = idx + dir;
    if (next >= 0 && next < flatCurriculum.length) {
        window.location.hash = flatCurriculum[next].path;
    }
}

function updateNavButtons(path) {
    const idx = flatCurriculum.findIndex(i => i.path === path);
    const prevEl = document.getElementById('prev-title');
    const nextEl = document.getElementById('next-title');
    prevEl.innerText = idx > 0 ? flatCurriculum[idx - 1].title : '—';
    nextEl.innerText = idx < flatCurriculum.length - 1 ? flatCurriculum[idx + 1].title : '—';
}

function updateActiveNav(path) {
    document.querySelectorAll('.nav-item').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${path}`) a.classList.add('active');
    });
}

// ---- Progress ----
function markComplete(id) {
    progress[id] = true;
    localStorage.setItem('ai-schools-progress', JSON.stringify(progress));
    updateProgress();
    // Update sidebar checkmark
    const navItem = document.querySelector(`.nav-item[data-id="${id}"]`);
    if (navItem) navItem.classList.add('completed');
}

function updateProgress() {
    const pct = Math.round((Object.keys(progress).length / flatCurriculum.length) * 100);
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.innerText = pct + '%';
}

// ---- Search ----
function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', e => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(a => {
            a.style.display = a.innerText.toLowerCase().includes(q) ? 'flex' : 'none';
        });
        document.querySelectorAll('.nav-group').forEach(g => {
            const hasVisible = [...g.querySelectorAll('.nav-item')].some(a => a.style.display !== 'none');
            g.style.display = hasVisible ? 'block' : 'none';
        });
    });
}

// ---- Mobile ----
function setupMobileToggle() {
    document.getElementById('mobile-toggle').onclick = () => {
        document.getElementById('sidebar').classList.toggle('open');
    };
    // Close sidebar on nav click (mobile)
    document.addEventListener('click', e => {
        if (e.target.closest('.nav-item') && window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
}

// ---- Playground ----
function openPlayground() {
    window.location.hash = 'playground';
}

function showPlayground() {
    document.getElementById('markdown-viewer').innerHTML = '';
    document.getElementById('playground-area').style.display = 'block';
    document.getElementById('lesson-nav').style.display = 'none';
    document.getElementById('lesson-header').style.display = 'none';
    document.querySelectorAll('.topbar-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-tab="playground"]')?.classList.add('active');
}

function hidePlayground() {
    document.getElementById('playground-area').style.display = 'none';
    document.querySelectorAll('.topbar-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-tab="tutorials"]')?.classList.add('active');
}

const playgroundTemplates = {
    summarize: { prompt: 'Summarize the following document in 5 key bullet points. Focus on actionable insights and any deadlines mentioned.\n\n[Paste your document here]', tool: 'claude' },
    debug: { prompt: 'I am getting the following error in my code:\n\n[Paste error message]\n\nHere is the relevant code:\n\n[Paste code]\n\nAnalyze the root cause, explain why it happened, and provide the corrected code with comments.', tool: 'claude' },
    research: { prompt: 'Find the latest 2026 trends in [your topic]. I need:\n1. Top 3 emerging developments with sources\n2. Key statistics or data points\n3. Expert opinions or forecasts\n4. Any controversies or debates in this space', tool: 'perplexity' },
    email: { prompt: 'Draft a professional email to [recipient] regarding [subject].\n\nTone: [Professional / Friendly / Formal]\nKey points to cover:\n- [Point 1]\n- [Point 2]\n- [Point 3]\n\nInclude a clear call to action at the end.', tool: 'claude' },
    compare: { prompt: 'Compare [Option A] vs [Option B] for [use case].\n\nProvide a detailed comparison table with:\n- Price\n- Key features\n- Pros and cons\n- Best use case for each\n- Your recommendation with reasoning', tool: 'perplexity' },
};

const simulatedResponses = {
    claude: `**Here's a structured response based on your prompt:**

This is a simulated preview. In the real Claude interface, you would receive a detailed, context-aware response tailored to your specific input.

**What Claude excels at with this type of prompt:**
- Long-form, nuanced analysis
- Following complex formatting instructions
- Maintaining consistent tone and voice
- Code generation with explanations

**💡 Tip:** Copy your prompt and paste it directly into Claude for the real result.`,
    perplexity: `**Search Results Summary:**

This is a simulated preview. In the real Perplexity interface, you would see:

🔗 **Source [1]** — Primary source with direct citation
🔗 **Source [2]** — Supporting evidence
🔗 **Source [3]** — Alternative perspective

**What Perplexity excels at with this type of prompt:**
- Real-time web search with citations
- Multi-source verification
- Current data and statistics
- Discovering related topics

**💡 Tip:** Copy your prompt and paste it into Perplexity for live, cited results.`
};

function runPlayground() {
    const tool = document.getElementById('playground-tool').value;
    const prompt = document.getElementById('playground-prompt').value;
    const output = document.getElementById('playground-output');
    const label = document.getElementById('output-tool-label');

    if (!prompt.trim()) {
        output.innerHTML = '<p style="color:#e74c3c">Please enter a prompt first.</p>';
        return;
    }

    label.innerText = tool === 'claude' ? 'Claude Response Preview' : 'Perplexity Response Preview';
    output.innerHTML = marked.parse(simulatedResponses[tool]);
}

function copyPlayground() {
    const prompt = document.getElementById('playground-prompt').value;
    if (prompt) copyText(prompt);
}

// Update link when tool changes
document.addEventListener('DOMContentLoaded', () => {
    const toolSelect = document.getElementById('playground-tool');
    const templateSelect = document.getElementById('playground-template');
    const link = document.getElementById('playground-open-link');

    if (toolSelect) {
        toolSelect.addEventListener('change', () => {
            const tool = toolSelect.value;
            link.href = tool === 'claude' ? 'https://claude.ai' : 'https://perplexity.ai';
            link.innerHTML = `<i class="ph ph-arrow-square-out"></i> Open in ${tool === 'claude' ? 'Claude' : 'Perplexity'}`;
        });
    }

    if (templateSelect) {
        templateSelect.addEventListener('change', () => {
            const tmpl = playgroundTemplates[templateSelect.value];
            if (tmpl) {
                document.getElementById('playground-prompt').value = tmpl.prompt;
                toolSelect.value = tmpl.tool;
                toolSelect.dispatchEvent(new Event('change'));
            }
        });
    }
});

// ---- Start ----
init();
