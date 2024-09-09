class Slider {
  constructor() {
    this.navigate_slider_prev = document.getElementById("navigate-slider-prev");
    this.navigate_slider_next = document.getElementById("navigate-slider-next");
    this._homePagePinPostHighlightSlider();
    this._recentPostDesktopSocialsNewSwiper();
    this._recentPostMobileSocialsNewSwiper();
    this.addEvent();
  }

  addEvent() {
    this.navigate_slider_prev.addEventListener("click", () =>
      this.animate(this.navigate_slider_prev)
    );
    this.navigate_slider_next.addEventListener("click", () =>
      this.animate(this.navigate_slider_next)
    );
  }

  animate(btn) {
    gsap.to(btn, {
      scale: 0.9,
      ease: "power2.in",
      repeat: 1,
      duration: 0.1,
      yoyo: true,
    });
  }

  _homePagePinPostHighlightSlider() {
    new Swiper(".homeSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      spaceBetween: 8,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  }
  _recentPostMobileSocialsNewSwiper() {
    new Swiper(".recentSwiper", {
      slidesPerView: 2,
      spaceBetween: 24,
    });
  }
  _recentPostDesktopSocialsNewSwiper() {
    new Swiper(".recentSwiperDesktop", {
      slidesPerView: 3,
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination-recent",
        clickable: true,
      },
    });
  }
}

export default Slider;
