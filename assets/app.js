const tools = [
    {
        path: "/following",
        category: "GROWTH",
        name: "Grow your following",
        pageTitle: "Following Tool",
        description: "Turn your passion into a community. Get your creations in front of the right people.",
        intro: "Explore a following-growth demo for your next Roblox chapter.",
        action: "Start growing",
        icon: "♙",
        progress: [
            "Preparing your following demo…",
            "Building a sample creator audience…",
            "Reviewing simulated growth…",
            "Following demo complete",
        ],
    },
    {
        path: "/game-visits",
        category: "DISCOVERY",
        name: "Game visits",
        pageTitle: "Game Visits Tool",
        description: "You built something great. Give your game the attention and players it deserves.",
        intro: "Preview the game-discovery process for your Roblox experience.",
        action: "Get discovered",
        icon: "▣",
        progress: [
            "Preparing your visits demo…",
            "Finding a sample audience…",
            "Reviewing simulated discovery…",
            "Game visits demo complete",
        ],
    },
    {
        path: "/game-copier",
        category: "CREATION",
        name: "Game copier",
        pageTitle: "Game Copier Tool",
        description: "Skip the blank canvas. Start with your own projects and build something new.",
        intro: "Preview a duplication workflow for games you own or have permission to copy.",
        action: "Start creating",
        icon: "▤",
        progress: [
            "Preparing your game-copy demo…",
            "Checking sample permissions…",
            "Creating a simulated copy…",
            "Game copier demo complete",
        ],
    },
    {
        path: "/shirt-copier",
        category: "DESIGN",
        name: "Shirt copier",
        pageTitle: "Shirt Copier Tool",
        description: "Bring your next outfit to life. Reuse your own templates and make them your own.",
        intro: "Explore a design workflow for your own or licensed Roblox shirt artwork.",
        action: "Create an outfit",
        icon: "♢",
        progress: [
            "Preparing your shirt demo…",
            "Checking sample artwork…",
            "Creating a simulated design…",
            "Shirt copier demo complete",
        ],
    },
    {
        path: "/voice-chat-unlocker",
        category: "CONNECT",
        name: "Voice chat unlocker",
        pageTitle: "Voice Chat Unlocker",
        description: "Find your voice. Connect and play with friends through Roblox voice chat.",
        intro: "Preview Roblox voice-chat eligibility guidance without changing an account.",
        action: "Explore voice chat",
        icon: "◉",
        progress: [
            "Preparing your voice-chat demo…",
            "Reviewing sample eligibility…",
            "Simulating account guidance…",
            "Voice chat demo complete",
        ],
    },
    {
        path: "/game-joiner",
        category: "PLAY",
        name: "Game joiner",
        pageTitle: "Game Joiner",
        description: "Less searching, more playing. Jump straight into your next Roblox adventure.",
        intro: "Preview joining a Roblox player. Real access respects game and player privacy settings.",
        action: "Join a game",
        icon: "▶",
        progress: [
            "Preparing your join demo…",
            "Finding a sample server…",
            "Simulating a game connection…",
            "Game joiner demo complete",
        ],
    },
];

const app = document.querySelector("#app");

function logoMarkup() {
    return `
        <span class="logo-mark" aria-hidden="true"></span>
        <span class="logo-text">bloxlab.</span>
    `;
}

function arrowMarkup() {
    return `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m13 6 6 6-6 6"></path>
        </svg>
    `;
}

function homeHeaderMarkup() {
    return `
        <header class="site-header">
            <div class="header-inner">
                <a class="logo" href="/" aria-label="BloxLab home">
                    ${logoMarkup()}
                </a>
                <nav class="desktop-nav" aria-label="Main navigation">
                    <a href="#tools">Our tools</a>
                    <button class="text-button" type="button" data-open-about>Why BloxLab?</button>
                </nav>
                <a class="button button-small desktop-explore" href="#tools">
                    <span>Explore tools</span>
                    ${arrowMarkup()}
                </a>
                <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-button>
                    <span class="sr-only">Open menu</span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden>
                <a href="#tools">Our tools</a>
                <button class="text-button" type="button" data-open-about>Why BloxLab?</button>
            </nav>
        </header>
    `;
}

function toolCardMarkup(tool) {
    return `
        <a class="tool-card" href="${tool.path}" aria-label="${tool.name}">
            <article>
                <div class="tool-card-topline">
                    <span class="tool-icon" aria-hidden="true">${tool.icon}</span>
                    <span class="category-tag">${tool.category}</span>
                </div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <span class="card-action">
                    <span>${tool.action}</span>
                    ${arrowMarkup()}
                </span>
            </article>
        </a>
    `;
}

function aboutDialogMarkup() {
    return `
        <dialog class="about-dialog" data-about-dialog>
            <button class="dialog-close" type="button" aria-label="Close" data-close-about>×</button>
            <span class="eyebrow">WHY BLOXLAB?</span>
            <h2>Big ideas deserve a little help.</h2>
            <p>BloxLab is an independent toolkit built to help creators explore possibilities through safe, transparent demos.</p>
            <p>No passwords, cookies, tokens, or real account commands are needed.</p>
        </dialog>
    `;
}

function renderHome() {
    document.title = "BloxLab — Tools for your next Roblox chapter";
    app.innerHTML = `
        ${homeHeaderMarkup()}
        <main>
            <section class="hero">
                <div class="hero-art" aria-hidden="true"></div>
                <div class="hero-content page-width">
                    <span class="eyebrow hero-eyebrow">✣ BIG IDEAS. A LITTLE HELP.</span>
                    <h1>
                        <span>Roblox creators.</span>
                        <span>Your next chapter</span>
                        <span class="highlight">starts here.</span>
                    </h1>
                    <p class="hero-copy">Getting noticed is hard. Finding your next idea? Even harder. We built BloxLab to help developers and players turn “what if” into what’s next.</p>
                    <div class="hero-actions">
                        <a class="button" href="#tools">
                            <span>Find your next move</span>
                            ${arrowMarkup()}
                        </a>
                        <span class="safe-note">✓ No password needed</span>
                    </div>
                    <div class="creator-note">
                        <span class="emoji-row" aria-hidden="true">👾 🎮 🚀 ✨</span>
                        <span>For the builders. The dreamers. The players.</span>
                    </div>
                </div>
            </section>
            <section class="toolkit page-width" id="tools">
                <div class="section-heading">
                    <div>
                        <span class="eyebrow">YOUR CREATOR TOOLKIT</span>
                        <h2>A little boost. A lot of possibility.</h2>
                        <p>Six ways to get unstuck and get back to what you love.</p>
                    </div>
                    <span class="section-status">● Made for your next move</span>
                </div>
                <div class="tool-grid">
                    ${tools.map(toolCardMarkup).join("")}
                </div>
                <div class="trust-row">
                    <span>⌾ Your account stays yours</span>
                    <span>◇ Less friction. More creating.</span>
                    <span>✦ Built with creators in mind</span>
                </div>
            </section>
            <section class="closing-section">
                <div class="closing-content page-width">
                    <span class="eyebrow">YOU’RE NOT BUILDING ALONE</span>
                    <h2>Every great game starts with someone like you.</h2>
                    <p>The blank canvas. The game nobody’s found yet. The idea that won’t quite click. We know the feeling. Your creativity deserves a chance to go further.</p>
                    <a class="button" href="/following">
                        <span>Let’s make your next move</span>
                        ${arrowMarkup()}
                    </a>
                </div>
            </section>
        </main>
        <footer class="site-footer">
            <div class="footer-inner page-width">
                <a class="logo" href="/" aria-label="BloxLab home">
                    ${logoMarkup()}
                </a>
                <p>Independent creator toolkit. Not affiliated with Roblox Corporation.</p>
                <span>© 2026 BloxLab</span>
            </div>
        </footer>
        ${aboutDialogMarkup()}
    `;
    bindHomeEvents();
}

function toolHeaderMarkup() {
    return `
        <header class="site-header tool-header">
            <div class="header-inner">
                <a class="logo" href="/" aria-label="BloxLab home">
                    ${logoMarkup()}
                </a>
                <a class="all-tools-link" href="/">
                    <span aria-hidden="true">←</span>
                    <span>All tools</span>
                </a>
            </div>
        </header>
    `;
}

function instructionMarkup(instruction, index) {
    return `
        <li>
            <span class="step-number">${index + 1}</span>
            <span>Step ${index + 1}. ${instruction}</span>
        </li>
    `;
}

function renderTool(tool) {
    document.title = `${tool.pageTitle} — BloxLab`;
    app.innerHTML = `
        ${toolHeaderMarkup()}
        <main class="tool-main page-width">
            <span class="eyebrow">⌘ CREATOR TOOLKIT · DEMO</span>
            <h1>${tool.pageTitle}</h1>
            <p class="tool-intro">${tool.intro}</p>
            <p class="warning-note">
                <span aria-hidden="true">♢</span>
                <span>Simulation only. No account lookup or Roblox changes occur. Never paste passwords, cookies, tokens, or real account commands.</span>
            </p>
            <section class="instructions" aria-labelledby="instructions-heading">
                <h2 id="instructions-heading">Instructions</h2>
                <ol>
                    ${[
                        "Watch the video",
                        "Get your PowerShell demo code",
                        "Submit the PowerShell demo",
                        "Watch the magic happen (simulation)",
                    ].map(instructionMarkup).join("")}
                </ol>
            </section>
            <section class="demo-section" data-demo-section>
                <form data-demo-form>
                    <label for="powershell-demo">PowerShell demo code</label>
                    <input
                        id="powershell-demo"
                        class="tool-input"
                        type="text"
                        placeholder="Paste one non-sensitive sample command here…"
                        maxlength="5000"
                        autocomplete="off"
                        spellcheck="false"
                        aria-describedby="code-privacy"
                        required
                        data-demo-input
                    >
                    <p id="code-privacy" class="privacy-copy">Text stays in this page, is discarded on submission, and is never executed or sent anywhere.</p>
                    <button class="button submit-button" type="submit" disabled data-submit-button>
                        <span>Submit demo</span>
                        ${arrowMarkup()}
                    </button>
                </form>
            </section>
            <section class="video-section">
                <h2>Video walkthrough</h2>
                <div class="video-placeholder">
                    <span aria-hidden="true">▷</span>
                    <p>Video coming soon</p>
                </div>
            </section>
        </main>
    `;
    bindDemoEvents(tool);
}

function bindHomeEvents() {
    const dialog = document.querySelector("[data-about-dialog]");
    const menu = document.querySelector("#mobile-menu");
    const menuButton = document.querySelector("[data-menu-button]");
    const openButtons = document.querySelectorAll("[data-open-about]");
    const closeButton = document.querySelector("[data-close-about]");

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            dialog.showModal();
        });
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menu.hidden = isOpen;
    });
}

function progressMarkup(message, stageIndex) {
    const isComplete = stageIndex === 3;
    const icon = isComplete ? "✓" : stageIndex === 1 ? "◇" : "◌";
    const detail = isComplete
        ? "Demo complete — no account was found or changed, and no Roblox action was performed."
        : "This is a fixed demo animation, not a live Roblox action.";
    const resetButton = isComplete
        ? `<button class="button button-secondary" type="button" data-reset-button>Run another demo</button>`
        : "";

    return `
        <div class="progress-state" role="status" aria-live="polite">
            <span class="eyebrow">SIMULATED PROGRESS</span>
            <span class="progress-icon ${isComplete ? "complete" : ""}" aria-hidden="true">${icon}</span>
            <h2>${message}</h2>
            <p>${detail}</p>
            ${resetButton}
        </div>
    `;
}

function bindDemoEvents(tool) {
    const section = document.querySelector("[data-demo-section]");
    const form = document.querySelector("[data-demo-form]");
    const input = document.querySelector("[data-demo-input]");
    const submitButton = document.querySelector("[data-submit-button]");
    const timers = [];

    input.addEventListener("input", () => {
        submitButton.disabled = input.value.trim().length === 0;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (input.value.trim().length === 0) {
            return;
        }

        input.value = "";
        showStage(0);
    });

    function showStage(stageIndex) {
        section.innerHTML = progressMarkup(tool.progress[stageIndex], stageIndex);

        if (stageIndex < tool.progress.length - 1) {
            const timer = window.setTimeout(() => {
                showStage(stageIndex + 1);
            }, 1500);
            timers.push(timer);
            return;
        }

        const resetButton = document.querySelector("[data-reset-button]");
        resetButton.addEventListener("click", resetDemo);
    }

    function resetDemo() {
        timers.forEach((timer) => {
            window.clearTimeout(timer);
        });
        renderTool(tool);
    }
}

function normalizePath(pathname) {
    if (pathname.length > 1 && pathname.endsWith("/")) {
        return pathname.slice(0, -1);
    }
    return pathname;
}

function renderPage() {
    const path = normalizePath(window.location.pathname);
    const tool = tools.find((item) => item.path === path);

    if (tool) {
        renderTool(tool);
        return;
    }

    renderHome();
}

renderPage();
