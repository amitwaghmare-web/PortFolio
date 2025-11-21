let themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    let body = document.body;

    // Toggle class
    body.classList.toggle("light-theme");

    // Update button text
    themeBtn.textContent = body.classList.contains("light-theme") ? "Dark" : "Light";
});

const texts = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Developer",
  "UI Developer",
  "React Developer"
];


let textIndex = 0;
let charIndex = 0;

let typingSpeed = 120;
let erasingSpeed = 70;
let delayAfterFullText = 1000;

const typingSpan = document.getElementById("typing");

function type() {
  if (charIndex < texts[textIndex].length) {
    typingSpan.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayAfterFullText);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // next text
    setTimeout(type, 300);
  }
}

type();  // start animation

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

