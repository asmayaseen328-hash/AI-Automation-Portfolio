document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".service-card, .project-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(18px)";
        card.style.transition = "opacity .6s ease, transform .6s ease";
        observer.observe(card);
    });

});