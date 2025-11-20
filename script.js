let themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    let body = document.body;

    // Toggle class
    body.classList.toggle("light-theme");

    // Update button text
    themeBtn.textContent = body.classList.contains("light-theme") ? "Dark" : "Light";
});


const text = "I am a Frontend Developer";
const speed = 100;
let i = 0;
let isDeleting = false;

function typeEffect() {
    let element = document.getElementById("typing");

    if (!isDeleting) {
        element.innerText = text.substring(0, i++);
        if (i > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 800);
            return;
        }
    } else {
        element.innerText = text.substring(0, i--);
        if (i < 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
