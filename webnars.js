// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-content p", { opacity: 0, y: 30, duration: 1, delay: 0.3 });
    gsap.from(".register-btn", { opacity: 0, scale: 0.8, duration: 0.5, delay: 0.5 });

    gsap.from(".webinar-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });

    gsap.from(".cta h2", { opacity: 0, scale: 0.8, duration: 1 });
    gsap.from(".cta p", { opacity: 0, y: 20, duration: 1, delay: 0.3 });
});
