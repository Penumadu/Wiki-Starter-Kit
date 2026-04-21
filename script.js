// Curriculum Manifest - Ordered for linear learning
const curriculum = [
    { id: "intro", title: "AI Tutorial Home", path: "pages/intro.md", icon: "ph-house" },
    { id: "cheat-sheet", title: "Tool Cheat Sheet", path: "pages/cheat-sheet.md", icon: "ph-lightning" },
    
    { type: "header", title: "Claude Desktop" },
    { id: "artifacts", title: "Claude Artifacts", path: "pages/claude-desktop/artifacts.md" },
    { id: "projects", title: "Claude Projects", path: "pages/claude-desktop/projects.md" },
    { id: "mcp", title: "Claude MCP", path: "pages/claude-desktop/mcp.md" },
    { id: "claude-code", title: "Claude Code", path: "pages/claude-desktop/claude-code.md" },
    { id: "quiz-claude", title: "Quiz: Claude 101", path: "pages/quiz-claude.md" },
    
    { type: "header", title: "Perplexity Desktop" },
    { id: "computer", title: "Agentic Computer", path: "pages/perplexity-desktop/computer.md" },
    { id: "model-council", title: "Model Council", path: "pages/perplexity-desktop/model-council.md" },
    { id: "collections", title: "Collections", path: "pages/perplexity-desktop/collections.md" },
    { id: "pages", title: "Pages & Publishing", path: "pages/perplexity-desktop/pages.md" },
    
    { type: "header", title: "Workflows" },
    { id: "ai-sandwich", title: "The AI Sandwich", path: "pages/workflows/ai-sandwich.md" },
    { id: "use-cases", title: "Real-World Samples", path: "pages/workflows/use-cases.md" }
];

// Flat list for navigation
const flatCurriculum = curriculum.filter(item => item.id);

// Global State
let currentPath = "";
let progress = JSON.parse(localStorage.getItem('ai-schools-progress') || '{}');

// Initialize
function init() {
    renderCurriculum();
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    setupMobileToggle();
    updateProgressUI();
}

// Render Sidebar Curriculum
function renderCurriculum() {
    const navContent = document.getElementById('nav-content');
    navContent.innerHTML = '';

    curriculum.forEach(item => {
        if (item.type === 'header') {
            const h5 = document.createElement('h5');
            h5.innerText = item.title;
            navContent.appendChild(h5);
        } else {
            const link = document.createElement('a');
            link.className = 'nav-item';
            link.href = `#${item.path}`;
            link.innerHTML = item.icon ? `<i class="ph ${item.icon}"></i> ${item.title}` : item.title;
            link.id = `nav-${item.id}`;
            navContent.appendChild(link);
        }
    });
}

// Handle Routing
function handleRouting() {
    const hash = window.location.hash.slice(1);
    const path = hash || flatCurriculum[0].path;
    loadPage(path);
}

// Load Page
async function loadPage(path) {
    const viewer = document.getElementById('markdown-viewer');
    const breadcrumb = document.getElementById('breadcrumb');
    
    viewer.innerHTML = `<div class="loading"><i class="ph ph-circle-notch ph-spin"></i><span>Loading Lesson...</span></div>`;

    try {
        const response = await fetch(path);
        const markdown = await response.text();
        
        // Render Markdown
        viewer.innerHTML = marked.parse(markdown);
        
        // Update Metadata
        const currentItem = flatCurriculum.find(i => i.path === path);
        breadcrumb.innerText = `Course / ${currentItem ? currentItem.title : 'Lesson'}`;
        
        // Mark as read
        if (currentItem) markAsComplete(currentItem.id);

        // UI Enhancements
        enhanceMarkdownContent();
        window.scrollTo(0, 0);
        updateActiveNavItem(path);

    } catch (err) {
        viewer.innerHTML = `<h2>Lesson Not Found</h2><p>Sorry, this tutorial page is under construction.</p>`;
    }
}

// Next/Prev Navigation
function navigatePage(direction) {
    const hash = window.location.hash.slice(1) || flatCurriculum[0].path;
    const currentIndex = flatCurriculum.findIndex(i => i.path === hash);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < flatCurriculum.length) {
        window.location.hash = flatCurriculum[nextIndex].path;
    }
}

// Enhance Markdown (Try it boxes, Quizzes)
function enhanceMarkdownContent() {
    // Transform "Try it" blocks (we look for specific patterns in markdown)
    document.querySelectorAll('pre').forEach(pre => {
        if (pre.innerText.includes('[TRY IT]')) {
            const content = pre.innerText.replace('[TRY IT]', '').trim();
            const container = document.createElement('div');
            container.className = 'try-it-container';
            container.innerHTML = `
                <h4>Try it Yourself</h4>
                <div class="try-it-code">${content}</div>
                <button class="btn-try" onclick="copyAndJump('${btoa(content)}')">Try it in Claude</button>
            `;
            pre.parentNode.replaceChild(container, pre);
        }
    });

    // Transform Quizzes
    // Logic for rendering simple MCQ quizzes from markdown patterns
}

function copyAndJump(encodedContent) {
    const content = atob(encodedContent);
    navigator.clipboard.writeText(content);
    alert('Prompt copied! Opening Claude...');
    window.open('https://claude.ai', '_blank');
}

// Progress Tracking
function markAsComplete(id) {
    progress[id] = true;
    localStorage.setItem('ai-schools-progress', JSON.stringify(progress));
    updateProgressUI();
}

function updateProgressUI() {
    const completedCount = Object.keys(progress).length;
    const totalCount = flatCurriculum.length;
    const percent = Math.round((completedCount / totalCount) * 100);
    
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.innerText = `${percent}% Complete`;
}

function updateActiveNavItem(path) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const active = Array.from(document.querySelectorAll('.nav-item')).find(i => i.getAttribute('href') === `#${path}`);
    if (active) active.classList.add('active');
}

function setupMobileToggle() {
    const btn = document.getElementById('mobile-toggle');
    const nav = document.getElementById('sidebar');
    if (btn) btn.onclick = () => nav.classList.toggle('open');
}

// Start
init();
