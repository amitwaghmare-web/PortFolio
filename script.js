let themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    let body = document.body;

    // Toggle class
    body.classList.toggle("light-theme");

    // Update button text
    themeBtn.textContent = body.classList.contains("light-theme") ? "Dark" : "Light";
});

const text = "Frontend Developer";
let idx = 0;
let typingSpeed = 120;   // typing speed
let erasingSpeed = 70;   // erase speed
let delayAfterComplete = 1000; // pause after full text
let isErasing = false;

function smoothTyping() {
    const typingSpan = document.getElementById("typing");

    if (!isErasing) {
        typingSpan.textContent = text.slice(0, idx);
        idx++;

        if (idx > text.length) {
            isErasing = true;
            setTimeout(smoothTyping, delayAfterComplete); // pause before erasing
            return;
        }
    } else {
        typingSpan.textContent = text.slice(0, idx);
        idx--;

        if (idx < 0) {
            isErasing = false;
            idx = 0;
        }
    }

    setTimeout(
        smoothTyping,
        isErasing ? erasingSpeed : typingSpeed
    );
}

smoothTyping();

      // Fetch GitHub repos (replace USERNAME)
        const GITHUB_USERNAME = 'amitwaghmare-web'; // <-- replace with your github username if different
        const projectsGrid = document.getElementById('projectsGrid');

        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
            .then(r => r.json()).then(repos => {
                const list = Array.isArray(repos) ? repos.slice(0, 6) : [];
                if (list.length === 0) { projectsGrid.innerHTML = `\n          <div class="card"><h3>No public repos</h3><p>Add some projects to GitHub or hardcode project cards in HTML.</p></div>`; return; }
                list.forEach(repo => {
                    const card = document.createElement('div'); card.className = 'card';
                    card.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || 'No description'}</p><div class="card-ctas"><a class='small-btn' href='${repo.html_url}' target='_blank'>GitHub</a>${repo.homepage ? `<a class='small-btn' href='${repo.homepage}' target='_blank'>Live</a>` : ''}</div>`;
                    projectsGrid.appendChild(card);
                });
            }).catch(e => { projectsGrid.innerHTML = `<div class='card'><h3>Error loading projects</h3><p>${e.message}</p></div>` });

        // SKILL BAR ANIMATION ON SCROLL
const skillsSection = document.querySelector("#skills");
const skillFills = document.querySelectorAll(".skill-fill");

let animated = false;

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPos < windowHeight - 120 && !animated) {
        animated = true;

        skillFills.forEach(bar => {
            let percent = bar.dataset.percent;
            bar.style.width = percent + "%";
        });
    }
});
