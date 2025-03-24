document.addEventListener("DOMContentLoaded", function () {
    // **1. Toggle Menu Functionality**
    function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("active");
    }

    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // **2. Carousel Functionality**
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.opacity = "0";
            slide.style.transition = "opacity 1s ease-in-out";
        });
        slides[index].style.opacity = "1";
    }

    function nextSlide() {
        if (totalSlides > 0) {
            slides[currentSlide].style.opacity = "0";
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].style.opacity = "1";
        }
    }

    if (totalSlides > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 3000);
    }

    // **3. GSAP Animations for "The Way We Work" Section**
    let container = document.querySelector(".animated-container");
    let image = document.querySelector(".animated-image-container");
    let content = document.querySelector(".animated-content");
    let bars = document.querySelectorAll(".animated-progress-bar");

    if (container && image && content && bars.length > 0) {
        container.addEventListener("mouseenter", function () {
            gsap.to(image, { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" });
            gsap.to(content, { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" });

            bars.forEach((bar) => {
                let width = bar.getAttribute("data-width");
                gsap.to(bar, { width: width, duration: 1, ease: "elastic.out(1, 0.6)" });
            });
        });

        container.addEventListener("mouseleave", function () {
            gsap.to(image, { scale: 0.9, opacity: 0.3, duration: 0.5, ease: "power2.in" });
            gsap.to(content, { x: 50, opacity: 0, duration: 0.5, ease: "power2.in" });

            bars.forEach((bar) => {
                gsap.to(bar, { width: "0%", duration: 0.5, ease: "power2.in" });
            });
        });
    }

    // **4. GSAP Animations for "Bottom Section"**
    let containerBotm = document.querySelector('.container-botm');
    let imageBotm = document.querySelector('.image-container-botm');
    let contentBotm = document.querySelector('.content-botm');
    let barsBotm = document.querySelectorAll('.progress-bar-botm');

    if (containerBotm && imageBotm && contentBotm && barsBotm.length > 0) {
        containerBotm.addEventListener("mouseenter", function () {
            gsap.to(imageBotm, { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" });
            gsap.to(contentBotm, { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" });

            barsBotm.forEach((bar) => {
                let width = bar.getAttribute('data-width');
                gsap.to(bar, { width: width, duration: 1, ease: "elastic.out(1, 0.6)" });
            });
        });

        containerBotm.addEventListener("mouseleave", function () {
            gsap.to(imageBotm, { scale: 0.9, opacity: 0.3, duration: 0.5, ease: "power2.in" });
            gsap.to(contentBotm, { x: 50, opacity: 0, duration: 0.5, ease: "power2.in" });

            barsBotm.forEach((bar) => {
                gsap.to(bar, { width: "0%", duration: 0.5, ease: "power2.in" });
            });
        });
    }

    // **5. Chart.js - Skill Proficiency Chart**
    const chartCanvas = document.getElementById('skillChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'],
                datasets: [{
                    label: 'Skill Proficiency (%)',
                    data: [95, 95, 100, 90],
                    backgroundColor: ['#4CAF50', '#388E3C', '#2E7D32', '#1B5E20'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutBounce'
                }
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const chartCanvas = document.getElementById('skillChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'],
                datasets: [{
                    label: 'Skill Proficiency (%)',
                    data: [95, 95, 100, 90],
                    backgroundColor: ['#4CAF50', '#388E3C', '#2E7D32', '#1B5E20'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutBounce'
                }
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".count");

    counters.forEach((counter) => {
        let targetValue = parseInt(counter.getAttribute("data-count"));
        gsap.fromTo(counter, 
            { innerHTML: 0 }, 
            { 
                innerHTML: targetValue, 
                duration: 2, 
                snap: { innerHTML: 1 }, 
                ease: "power2.out" 
            }
        );
    });

    // Floating effect for numbers
    gsap.to(".impact-item", {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "easeInOut"
    });
    
});
document.addEventListener("DOMContentLoaded", () => {
    const footerSections = document.querySelectorAll(".footer-section");
    
    footerSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
