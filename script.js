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
  breakpoints: {
    500: {
      slidesPerView: 3,
      loopAdditionalSlides: 3,
    },

    1024: {
      slidesPerView: 4,
      loopAdditionalSlides: 4,
    },
    1200: {
      slidesPerView: 5,
      loopAdditionalSlides: 5,
    },
  },
});

// Getting Elements

const logo = document.querySelector(".logo");
const topNav = document.querySelector(".topNavigation");
const browseButton = document.querySelector(".browseMenu");
const browseLayout = document.querySelector(".browseActive");
const browseHome = document.querySelector(
  ".browseActive .browseItem:first-child a"
);

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
  browseLayout.classList.toggle("displayed");
});

browseLayout.addEventListener("click", () => {
  browseLayout.classList.remove("displayed");
});

browseHome.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
