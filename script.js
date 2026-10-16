// ================================
// AI AUTOMATION PORTFOLIO - JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // Smooth scrolling
  // -------------------------------
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // -------------------------------
  // Navbar scroll effect
  // -------------------------------
  const navbar = document.querySelector(".navbar");

  const handleNavbarScroll = () => {
    if (!navbar) return;

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();


  // -------------------------------
  // Reveal sections on scroll
  // -------------------------------
  const revealElements = document.querySelectorAll(
    ".service-card, .process-card, .project-card, .about-content, .about-visual, .stat-card, .contact-box"
  );

  revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  // -------------------------------
  // Active navigation link
  // -------------------------------
  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");

          navigationLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.45
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });


  // -------------------------------
  // Current year automatically
  // -------------------------------
  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});