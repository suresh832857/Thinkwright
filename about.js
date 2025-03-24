// document.addEventListener("DOMContentLoaded", function() {
//     const navbar = document.querySelector(".navbar");
//     window.addEventListener("scroll", function() {
//         if (window.scrollY > 50) {
//             navbar.style.background = "rgba(34, 34, 34, 0.9)";
//         } else {
//             navbar.style.background = "linear-gradient(135deg, #333, #222)";
//         }
//     });
// });

// function toggleMenu() {
//     const navLinks = document.querySelector(".nav-links");
//     navLinks.classList.toggle("active");
// }
document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 }
    );

    fadeElements.forEach((el) => {
        observer.observe(el);
    });
});
// Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleBtn.innerHTML = body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

