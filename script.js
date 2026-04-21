// Wiki Manifest - Hardcoded list of files since we are a static SPA
const wikiManifest = {
    "Getting Started": [
        { title: "Intro Guide", path: "pages/intro.md", icon: "ph-house" },
        { title: "Quick Reference", path: "pages/cheat-sheet.md", icon: "ph-lightning" }
    ],
    "Claude Desktop": [
        { title: "Artifacts & Design", path: "pages/claude-desktop/artifacts.md", icon: "ph-palette" },
        { title: "Projects & Knowledge", path: "pages/claude-desktop/projects.md", icon: "ph-books" },
        { title: "Computer Use & Code", path: "pages/claude-desktop/claude-code.md", icon: "ph-terminal-window" },
        { title: "MCP Connectivity", path: "pages/claude-desktop/mcp.md", icon: "ph-plugs-connected" },
        { title: "Workflows", path: "pages/claude-desktop/workflows.md", icon: "ph-git-fork" }
    ],
    "Perplexity Desktop": [
        { title: "Agentic Computer", path: "pages/perplexity-desktop/computer.md", icon: "ph-robot" },
        { title: "Model Council", path: "pages/perplexity-desktop/model-council.md", icon: "ph-users-three" },
        { title: "Collections", path: "pages/perplexity-desktop/collections.md", icon: "ph-folders" },
        { title: "Pages & Publishing", path: "pages/perplexity-desktop/pages.md", icon: "ph-newspaper" }
    ],
    "Workflows": [
        { title: "The AI Sandwich", path: "pages/workflows/ai-sandwich.md", icon: "ph-hamburger" },
        { title: "Real-World Samples", path: "pages/workflows/use-cases.md", icon: "ph-briefcase" }
    ]
};

// Global State
let currentPath = "";
const tagsMap = new Set();

// Initialize
function init() {
    renderSidebar();
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    setupSearch();
    setupMobileToggle();
}

// Mobile Toggle Logic
function setupMobileToggle() {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('ph-list');
            icon.classList.toggle('ph-x');
        });
    }
}

// Render Sidebar
function renderSidebar() {
    const navContent = document.getElementById('nav-content');
    navContent.innerHTML = '';

    for (const [group, items] of Object.entries(wikiManifest)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'nav-group';
        groupDiv.innerHTML = `<h5>${group}</h5>`;

        items.forEach(item => {
            const link = document.createElement('a');
            link.className = 'nav-item';
            link.href = `#${item.path}`;
            link.innerHTML = `<i class="ph ${item.icon}"></i> <span>${item.title}</span>`;
            groupDiv.appendChild(link);
        });

        navContent.appendChild(groupDiv);
    }
}

// Handle Routing
function handleRouting() {
    const hash = window.location.hash.slice(1);
    const defaultPage = "pages/intro.md";
    const path = hash || defaultPage;
    
    loadPage(path);
    updateActiveNavItem(path);
}

// Load Markdown Page
async function loadPage(path) {
    const viewer = document.getElementById('markdown-viewer');
    const breadcrumb = document.getElementById('breadcrumb');
    
    viewer.innerHTML = `<div class="loading"><i class="ph ph-circle-notch ph-spin"></i> <span>Synchronizing Knowledge...</span></div>`;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Page not found');
        let markdown = await response.text();

        // Extract Frontmatter Tags
        const tagsMatch = markdown.match(/tags: \[(.*?)\]/);
        if (tagsMatch) {
            const tags = tagsMatch[1].split(',').map(t => t.trim().replace('#', ''));
            renderTags(tags);
            markdown = markdown.replace(/---[\s\S]*?---/, ''); // Remove frontmatter
        }

        // Render Markdown
        viewer.innerHTML = marked.parse(markdown);
        
        // Update Breadcrumb
        const fileName = path.split('/').pop().replace('.md', '');
        breadcrumb.innerText = `Home / ${fileName.replace(/-/g, ' ')}`;

        // Re-initialize any dynamic elements (Mermaid, Copy buttons)
        initDynamicElements();

    } catch (err) {
        viewer.innerHTML = `<div class="error-view">
            <i class="ph ph-warning-circle"></i>
            <h2>Page Not Found</h2>
            <p>The guide you are looking for has been moved or archived.</p>
            <a href="#pages/intro.md" class="btn">Return Home</a>
        </div>`;
    }
}

// Render Tags in Right Panel
function renderTags(tags) {
    const tagCloud = document.getElementById('tag-cloud');
    tagCloud.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.innerText = `#${tag}`;
        tagEl.onclick = () => {
            document.getElementById('search-input').value = tag;
            setupSearch();
        };
        tagCloud.appendChild(tagEl);
    });
}

// Update Active Sidebar Item
function updateActiveNavItem(path) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${path}`) {
            item.classList.add('active');
        }
    });
}

// Search Logic
function setupSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(item => {
            const text = item.innerText.toLowerCase();
            const isVisible = text.includes(term);
            item.style.display = isVisible ? 'flex' : 'none';
        });

        // Hide empty groups
        document.querySelectorAll('.nav-group').forEach(group => {
            const hasVisibleItems = Array.from(group.querySelectorAll('.nav-item')).some(item => item.style.display !== 'none');
            group.style.display = hasVisibleItems ? 'block' : 'none';
        });
    });
}

// Dynamic Elements (Copy Buttons, Mermaid)
function initDynamicElements() {
    // Add copy buttons to pre/code blocks
    document.querySelectorAll('pre').forEach(block => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn-md';
        btn.innerHTML = '<i class="ph ph-copy"></i>';
        btn.onclick = () => {
            const text = block.innerText;
            navigator.clipboard.writeText(text);
            btn.innerHTML = '<i class="ph ph-check"></i>';
            setTimeout(() => btn.innerHTML = '<i class="ph ph-copy"></i>', 2000);
        };
        block.style.position = 'relative';
        block.appendChild(btn);
    });

    // Mermaid init if needed
    if (window.mermaid && document.querySelector('.mermaid')) {
        mermaid.init();
    }
}

// Start
init();
