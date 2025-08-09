document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  let interval;

  function visibleCards() {
    if (window.innerWidth >= 900) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }

  function cardWidth() {
    return cards[0].getBoundingClientRect().width + 20; // includes gap
  }

  function updateCarousel() {
    track.style.transform = `translateX(${-index * cardWidth()}px)`;
  }

  function nextSlide() {
    if (index < cards.length - visibleCards()) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = cards.length - visibleCards();
    }
    updateCarousel();
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  window.addEventListener("resize", () => {
    updateCarousel();
  });

  startAutoSlide();
});