import Swiper from "../vendor/swiper.js";
import vars from "../_vars.js";

document.addEventListener("DOMContentLoaded", function () {
  const { marqueSliders, bestSliders } = vars;

  marqueSliders && marqueSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");

    const mainSwiper = new Swiper(container, {
      spaceBetween: 75,
      slidesPerView: 'auto',
      loop: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false, 
      },
    
      breakpoints: {
        320: {
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 35,
        },
        1024: {
          spaceBetween: 40,
        },
        1240: {
          spaceBetween: 50,
        },
        1440: {
          spaceBetween: 75,
        },
      },
    });
  });

  bestSliders && bestSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-button.next");
    const prevBtn = slider.querySelector(".swiper-button.prev");

    const bestSwiper = new Swiper(container, {
      spaceBetween: 20,
      slidesPerView: 4,
      speed: 1800,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: true,

      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
   
      breakpoints: {
        320:{
          slidesPerView: 'auto',
        },
        600:{
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });

});
