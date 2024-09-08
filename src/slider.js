class Slider {
  constructor() {
    this.navigate_slider_prev = document.getElementById("navigate-slider-prev");
    this.navigate_slider_next = document.getElementById("navigate-slider-next");
    this._homePagePinPostHighlightSlider();
    this._recentPostSocialsNewSwiper();
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
      spaceBetween: 14,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
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
  _recentPostSocialsNewSwiper() {
    new Swiper(".recentSwiper", {
      slidesPerView: 2,
      spaceBetween: 24,
    });
  }
  // _recentPostSlider() {
  //   new Swiper(".recentSwiper", {
  //     slidesPerView: 2,
  //     loop: false,
  //     spaceBetween: 10,
  //     pagination: {
  //       el: ".swiper-pagination-recent",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       773: {
  //         slidesPerView: 2,
  //         spaceBetween: 30,
  //       },
  //       817: {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //       },
  //     },
  //   });
  // }
}

export default Slider;
