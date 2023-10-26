const navitems = document.querySelector("#nav__items");
const openNavButton = document.querySelector("#open__nav-btn");
const closeNavButton = document.querySelector("#close__nav-btn");
openNavButton.addEventListener("click", () => {
  navitems.style.display = "flex";
  openNavButton.style.display = "none";
  closeNavButton.style.display = "inline-block";
});
const closeNav = () => {
  navitems.style.display = "none";
  closeNavButton.style.display = "none";
  openNavButton.style.display = "inline-block";
};
closeNavButton.addEventListener("click", closeNav);

if (Window.innerwidth < 1024) {
  document.querySelectorAll("#nav__item li a ").forEach((navitems) => {
    navitems.addEventListener("click", () => {
      closeNav();
    });
  });
}

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//testimonial section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
  },
});
