import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".hero__swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// Language list open/close
let langButton = document.querySelector(".language");
let langSelect = document.querySelector(".language__container");

langButton.onclick = function () {
  langSelect.classList.toggle("language__container--close");
};

document.addEventListener("click", function (event) {
  if (!event.target.closest(".language")) {
    langSelect.classList.add("language__container--close");
  }
  if (event.target === langButton) {
    langSelect.classList.toggle("language__container--close");
  }
});

//Choose language
let selectedLanguage = document.getElementById("selectedLanguage");
let languageInputs = document.querySelectorAll(".language__input");

languageInputs.forEach((input) => {
  input.addEventListener("change", function () {
    selectedLanguage.innerText = this.value;
  });
});

// Navigation-menu open/close
let burgerButton = document.querySelector(".menu-button");
let burgerElements = document.querySelector(".menu-button__element");
let menu = document.querySelector(".menu");

burgerButton.onclick = function () {
  burgerElements.classList.toggle("menu-button__element--close");
  menu.classList.toggle("menu--closed");
};

// -- Меню навигации на мобилке.
// const menu = document.querySelector('.main-nav__list');
// const buttonMenu = document.querySelector('.main-nav__button-menu');
// const logo = document.querySelector('.main-nav__logo-link');
// const map = document.querySelector('.location__map');

// buttonMenu.onclick = function () {
//   menu.classList.toggle('main-nav__list--close');
//   buttonMenu.classList.toggle('main-nav__button-menu--cross');
//   logo.classList.toggle('main-nav__logo-link--close');
// };

// -- nojs реализация.
// menu.classList.remove('main-nav__list--noscript');
// map?.classList.remove('location__map--nojs');
// buttonMenu.classList.remove('main-nav__button-menu--noscript');
// logo.classList.add("main-nav__logo--closed-menu");
