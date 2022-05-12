// Sliders Configuration

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  freemode: true,
  loopAdditionalSlides: 5,
  spaceBetween: 5,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Getting Elements

const logo = document.querySelector(".logo");
const topNav = document.querySelector(".topNavigation");
const browseButton = document.querySelector(".browseMenu");

// Functionality

// Handling top menu bar
document.addEventListener("scroll", () => {
  let scrollPostition = window.pageYOffset;
  console.log("works");
  if (scrollPostition > 0) {
    topNav.classList.add("active");
  } else {
    topNav.classList.remove("active");
  }
});

// Handling logo/home button
logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// handling browse menu

browseButton.addEventListener("click", () => {
  browseButton.classList.toggle("displayed");
});
