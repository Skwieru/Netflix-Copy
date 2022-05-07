const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  freemode: true,
  loopAdditionalSlides: 5,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
