// Typing Effect
const textArray = ["Frontend Developer", "UI Designer", "Problem Solver", "AI Integration", "WorkFlow Controller"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Fade Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Modal
function openModal(title, text, link) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;

    const btn = document.getElementById("modalBtn");
    btn.href = link;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// EmailJS Setup
(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID", this)
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
    }, () => {
        alert("Failed to send message.");
    });
});