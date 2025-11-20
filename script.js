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

