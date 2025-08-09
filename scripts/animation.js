
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animate);
        observer.unobserve(entry.target); // only trigger once
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% is visible

  animatedElements.forEach(el => observer.observe(el));
});

