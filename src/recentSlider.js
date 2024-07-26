new Swiper(".recentSwiper", {
  slidesPerView: 2,
  loop: false,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-recent",
    clickable: true,
  },
  breakpoints: {
    773: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    817: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
