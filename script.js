// script.js
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let timer;

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
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
  showSlides();

  const slideshowContainer = document.querySelector('.slideshow-container');
  if (window.innerWidth > 768) {
    slideshowContainer.addEventListener('mouseenter', pauseSlides);
    slideshowContainer.addEventListener('mouseleave', resumeSlides);
  }

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
  });
});

