const progressByPath = {
    "/following": [
        "Preparing your following demo…",
        "Building a sample creator audience…",
        "Reviewing simulated growth…",
        "Following demo complete",
    ],
    "/game-visits": [
        "Preparing your visits demo…",
        "Finding a sample audience…",
        "Reviewing simulated discovery…",
        "Game visits demo complete",
    ],
    "/game-copier": [
        "Preparing your game-copy demo…",
        "Checking sample permissions…",
        "Creating a simulated copy…",
        "Game copier demo complete",
    ],
    "/shirt-copier": [
        "Preparing your shirt demo…",
        "Checking sample artwork…",
        "Creating a simulated design…",
        "Shirt copier demo complete",
    ],
    "/voice-chat-unlocker": [
        "Preparing your voice-chat demo…",
        "Reviewing sample eligibility…",
        "Simulating account guidance…",
        "Voice chat demo complete",
    ],
    "/game-joiner": [
        "Preparing your join demo…",
        "Finding a sample server…",
        "Simulating a game connection…",
        "Game joiner demo complete",
    ],
};

function normalizedPath() {
    const path = window.location.pathname;

    if (path.length > 1 && path.endsWith("/")) {
        return path.slice(0, -1);
    }

    return path;
}

function closeMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const button = document.querySelector("[data-menu-button]");

    if (!menu || !button) {
        return;
    }

    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
}

function bindMobileMenu() {
    const menu = document.querySelector("[data-mobile-menu]");
    const button = document.querySelector("[data-menu-button]");

    if (!menu || !button) {
        return;
    }

    button.addEventListener("click", () => {
        const nextOpen = button.getAttribute("aria-expanded") !== "true";
        menu.hidden = !nextOpen;
        button.setAttribute("aria-expanded", String(nextOpen));
        button.setAttribute("aria-label", nextOpen ? "Close menu" : "Open menu");
    });

    document.querySelectorAll("[data-close-menu]").forEach((item) => {
        item.addEventListener("click", closeMobileMenu);
    });
}

function bindAboutDialog() {
    const overlay = document.querySelector("[data-about-overlay]");
    const dialog = overlay?.querySelector("[role='dialog']");
    const closeButton = overlay?.querySelector("[data-close-about]");
    const exploreButton = overlay?.querySelector("[data-explore-toolkit]");

    if (!overlay || !dialog || !closeButton || !exploreButton) {
        return;
    }

    let returnFocus = null;

    function openDialog(trigger) {
        returnFocus = trigger;
        closeMobileMenu();
        overlay.hidden = false;
        document.body.style.overflow = "hidden";
        dialog.focus();
    }

    function closeDialog() {
        overlay.hidden = true;
        document.body.style.overflow = "";
        returnFocus?.focus();
    }

    document.querySelectorAll("[data-open-about]").forEach((button) => {
        button.addEventListener("click", () => {
            openDialog(button);
        });
    });

    closeButton.addEventListener("click", closeDialog);

    exploreButton.addEventListener("click", () => {
        closeDialog();
        document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" });
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeDialog();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (overlay.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeDialog();
            return;
        }

        if (event.key !== "Tab") {
            return;
        }

        const controls = [exploreButton, closeButton];
        const currentIndex = controls.indexOf(document.activeElement);
        const direction = event.shiftKey ? -1 : 1;
        const nextIndex = (currentIndex + direction + controls.length) % controls.length;

        event.preventDefault();
        controls[nextIndex].focus();
    });
}

function progressMarkup(message, stageIndex) {
    const isComplete = stageIndex === 3;
    const icon = isComplete ? "✓" : stageIndex === 1 ? "◇" : "◌";
    const iconClass = isComplete ? "is-complete" : "is-spinning";
    const detail = isComplete
        ? "Demo complete — no account was found or changed, and no Roblox action was performed."
        : "This is a fixed demo animation, not a live Roblox action.";
    const resetButton = isComplete
        ? `<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2" type="button" data-reset-button>Run another demo</button>`
        : "";

    return `
        <div class="demo-progress" role="status" aria-live="polite">
            <span class="eyebrow">SIMULATED PROGRESS</span>
            <span class="demo-progress-icon ${iconClass}" aria-hidden="true">${icon}</span>
            <h2 class="max-w-lg text-2xl font-semibold">${message}</h2>
            <p class="text-xs text-muted-foreground">${detail}</p>
            ${resetButton}
        </div>
    `;
}

function bindDemoForm() {
    const path = normalizedPath();
    const progress = progressByPath[path];
    const section = document.querySelector("[data-demo-section]");
    const form = document.querySelector("[data-demo-form]");
    const input = document.querySelector("[data-demo-input]");
    const submitButton = document.querySelector("[data-submit-button]");

    if (!progress || !section || !form || !input || !submitButton) {
        return;
    }

    const originalMarkup = section.innerHTML;
    const timers = [];

    function updateSubmitState() {
        submitButton.disabled = input.value.trim().length === 0;
    }

    function resetDemo() {
        timers.forEach((timer) => {
            window.clearTimeout(timer);
        });
        section.innerHTML = originalMarkup;
        bindDemoForm();
    }

    function showStage(stageIndex) {
        section.innerHTML = progressMarkup(progress[stageIndex], stageIndex);

        if (stageIndex < progress.length - 1) {
            const timer = window.setTimeout(() => {
                showStage(stageIndex + 1);
            }, 1500);
            timers.push(timer);
            return;
        }

        section.querySelector("[data-reset-button]").addEventListener("click", resetDemo);
    }

    input.addEventListener("input", updateSubmitState);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const text = input.value.trim();

        if (text.length === 0) {
            return;
        }

        try {
            const response = await fetch("/api/demo-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: text,
                }),
            });

            if (!response.ok) {
                throw new Error(`Submission failed: ${response.status}`);
            }
        } catch (error) {
            console.error("Demo submission failed:", error);
            return;
        }

        input.value = "";
        showStage(0);
    });

    updateSubmitState();
}

bindMobileMenu();
bindAboutDialog();
bindDemoForm();
