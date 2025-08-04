(() => {
  const testimonialsData = [
   {
          name: "Abhay",
          role: "IOFT",
          image: "img/user.png",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam obcaecati laudantium odio exercitationem totam at deserunt asperiores, id neque harum architecto ipsam blanditiis? Unde, aut magnam sapiente quas cumque nesciunt odit consectetur aspernatur placeat sit animi harum distinctio ipsa quaerat repellat blanditiis sequi? Quae et suscipit distinctio deleniti iure quaerat maxime dolores officiis ullam repellat.",
        },
        {
          name: "RAZA",
          role: "Teacher",
          image: "img/user.png",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam obcaecati laudantium odio exercitationem totam at deserunt asperiores, id neque harum architecto ipsam blanditiis? Unde, aut magnam sapiente quas cumque nesciunt odit consectetur aspernatur placeat sit animi harum distinctio ipsa quaerat repellat blanditiis sequi? Quae et suscipit distinctio deleniti iure quaerat maxime dolores officiis ullam repellat.",
        },
        {
          name: "GAMA",
          role: "Engineer",
          image: "img/user.png",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam obcaecati laudantium odio exercitationem totam at deserunt asperiores, id neque harum architecto ipsam blanditiis? Unde, aut magnam sapiente quas cumque nesciunt odit consectetur aspernatur placeat sit animi harum distinctio ipsa quaerat repellat blanditiis sequi? Quae et suscipit distinctio deleniti iure quaerat maxime dolores officiis ullam repellat.",
        },
  ];

  const carousel = document.querySelector('.testimonial-carousel');
  const dotsContainer = document.querySelector('.dots');
  let current = 0;
  let startX = 0;
  let endX = 0;

  // Inject Cards Dynamically
  testimonialsData.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.classList.add('testimonial');
    if (index === 0) card.classList.add('active');
    card.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <h3>${testimonial.name}</h3>
      <p class="role">${testimonial.role}</p>
      <p>"${testimonial.text}"</p>
    `;
    carousel.appendChild(card);

    const dot = document.createElement('span');
    dot.dataset.index = index;
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dots span');

  function updateCarousel(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      current = parseInt(dot.dataset.index);
      updateCarousel(current);
    });
  });

  // Auto Slide
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    updateCarousel(current);
  }, 5000);

  // Swipe Gesture
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) current = (current + 1) % testimonials.length;
      else current = (current - 1 + testimonials.length) % testimonials.length;
      updateCarousel(current);
    }
  }
})();
