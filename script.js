// script.js
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let timer;
const scrollBtn = document.getElementById("scrollToTop");

function showSlides() {
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showSlides, 3000);
}

function pauseSlides() {
  clearTimeout(timer);
}

function resumeSlides() {
  timer = setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("open");
  });
  // Show scroll to top button after scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  showSlides();

  const slideshowContainer = document.querySelector(".slideshow-container");
  if (window.innerWidth > 768) {
    slideshowContainer.addEventListener("mouseenter", pauseSlides);
    slideshowContainer.addEventListener("mouseleave", resumeSlides);
  }
});
