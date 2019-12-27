var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  autoplay: {
    delay: 3000
  },
  fadeEffect: {
    crossFade: true
  }
});
