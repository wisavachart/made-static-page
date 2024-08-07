class Slider {
  constructor() {
    this._homePagePinPostHighlightSlider();
    this._recentPostSlider();
  }

  _homePagePinPostHighlightSlider() {
    new Swiper(".homeSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  _recentPostSlider() {
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
  }
}

export default Slider;
