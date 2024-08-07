class NavBar {
  constructor() {
    this._menues = document.querySelectorAll(".menu_list");
    this._gradientTab = document.querySelectorAll(".box");
    this._hamburgerOpen = document.getElementById("hamburger-open");
    this._hamburgerClose = document.getElementById("hamburger-close");
    this._responsiveNav = document.getElementById("mobile-nav");
    this.addEventListener();
  }
  addEventListener() {
    this._menues.forEach((el, index) =>
      el.addEventListener("mouseover", () => this._onMouseOver(index))
    );
    this._menues.forEach((el, index) =>
      el.addEventListener("mouseout", () => this._onMouseOut(index))
    );
    this._hamburgerOpen.addEventListener(
      "click",
      this._openResponsiveNav.bind(this)
    );
    this._hamburgerClose.addEventListener(
      "click",
      this._closeResponsiveNav.bind(this)
    );
  }
  _onMouseOver(index) {
    this._gradientTab[index].classList.add("made_pink_gradient", "expand");
  }

  _onMouseOut(index) {
    this._gradientTab[index].classList.remove("made_pink_gradient", "expand");
  }
  _openResponsiveNav() {
    this._responsiveNav.classList.add("open-nav");
  }
  _closeResponsiveNav() {
    this._responsiveNav.classList.remove("open-nav");
  }
}

export default NavBar;
