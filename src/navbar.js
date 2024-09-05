class NavBar {
  constructor() {
    this.isOpen = false;
    this.isSubMenuOpen = false;
    this._menues = document.querySelectorAll(".menu_list");
    this._gradientTab = document.querySelectorAll(".box");
    this._hamburger = document.getElementById("hamburger_menu");
    this._SideNavbar = document.getElementById("sideNavbar");
    this._sidebarMenuItem = document.querySelectorAll(".sidebarMenuItem");
    this._subMenu = document.getElementById("subMenu");
    this._openSubMenuBtn = document.getElementById("open-sub");
    this.isSubDeskTopOpen = false;
    this._arrow = document.getElementById("arrow");
    this.submeMudesktop = document.getElementById("submenu-desktop");
    this.isOverlay = false;
    this.overlay = document.getElementById("overlay-wrapper");
    this.addEventListener();
  }

  // ALL EVENTS
  addEventListener() {
    this._menues.forEach((el, index) =>
      el.addEventListener("mouseover", () => this._onMouseOver(index))
    );
    this._menues.forEach((el, index) =>
      el.addEventListener("mouseout", () => this._onMouseOut(index))
    );
    this._hamburger.addEventListener(
      "click",
      this._hamburgerMenuClick.bind(this)
    );
    this._sidebarMenuItem.forEach((menuItem) =>
      menuItem.addEventListener("click", (e) => {
        e.preventDefault();
        this.animateMenuList(menuItem);
        setTimeout(() => {
          this._clearAfterClick();
        }, 400);
      })
    );
    this._openSubMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this._subMenuBtnCilck();
    });

    this._arrow.addEventListener("click", this._onArrowClick.bind(this));
  }

  //DESKTOP NAV METHOD
  _onMouseOver(index) {
    this._gradientTab[index].classList.add("made_pink_gradient", "expand");
  }

  _onMouseOut(index) {
    this._gradientTab[index].classList.remove("made_pink_gradient", "expand");
  }

  _onArrowClick() {
    this.isSubDeskTopOpen = !this.isSubDeskTopOpen;
    this.animateButton(this._arrow);
    this.animateArrowDesktop();
    this._renderSubMenuDeskTop();
  }
  _renderSubMenuDeskTop() {
    !this.isSubDeskTopOpen
      ? this.animateSubdesktopOut()
      : this.animateSubdesktopIn();
  }

  //MOBILE NAV METHOD
  _hamburgerMenuClick() {
    this.isOpen = !this.isOpen;
    this.isOverlay = !this.isOverlay;
    document.body.classList.toggle("no-scroll");
    this._renderSideNavbar();
    this._renderOverlay();
    this.animateButton(this._hamburger);
  }

  _clearAfterClick() {
    this.isOpen = false;
    this._renderSideNavbar();
  }
  _subMenuBtnCilck() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
    this.animateOpenSubBtn();
    this._renderSubMenu();
  }
  _renderOverlay() {
    !this.isOverlay ? this.animateOverlayOut() : this.animateOverlayIn();
  }
  _renderSideNavbar() {
    !this.isOpen ? this.animateOut() : this.animateIn();
  }
  _renderSubMenu() {
    !this.isSubMenuOpen ? this.animateExpandOut() : this.animateExpandIn();
  }

  //ANIMATION METHOD
  animateOverlayIn() {
    this.overlay.style.display = "block";
    gsap.to(this.overlay, {
      opacity: 0.8,
      ease: "power2.in",
      duration: 0.2,
    });
  }
  animateOverlayOut() {
    gsap.to(this.overlay, {
      opacity: 0,
      ease: "power2.in",
      duration: 0.2,
      onComplete: () => {
        this.overlay.style.display = "none";
      },
    });
  }
  animateIn() {
    gsap.to(this._SideNavbar, {
      x: 0,
      ease: "power2.out",
      duration: 0.4,
    });
  }
  animateOut() {
    gsap.to(this._SideNavbar, {
      x: -400,
      ease: "power2.in",
      duration: 0.6,
    });
  }
  animateButton(btn) {
    gsap.to(btn, {
      scale: 0.5,
      ease: "power2.in",
      repeat: 1,
      duration: 0.2,
      yoyo: true,
    });
  }
  animateMenuList(menu) {
    gsap.to(menu, {
      scale: 0.9,
      ease: "power2.in",
      repeat: 1,
      duration: 0.2,
      yoyo: true,
    });
  }
  animateExpandOut() {
    gsap.to(this._subMenu, {
      height: 0,
      ease: "power4.in",
      duration: 0.2,
      onComplete: () => {
        this._subMenu.style.display = "none";
      },
    });
  }
  animateExpandIn() {
    this._subMenu.style.display = "flex";
    gsap.fromTo(
      this._subMenu,
      { height: 0, ease: "power4.in", duration: 0.4 },
      {
        height: 200,
        ease: "power2.in",
        duration: 0.4,
      }
    );
  }
  animateOpenSubBtn() {
    gsap.to(this._openSubMenuBtn, {
      rotate: !this.isSubMenuOpen ? -90 : 0,
      ease: "power2.inOut",
      duration: 0.2,
    });
  }

  animateSubdesktopIn() {
    gsap.to(this.submeMudesktop, {
      opacity: 1,
      ease: "power4.in",
      duration: 0.2,
    });
  }
  animateSubdesktopOut() {
    gsap.to(this.submeMudesktop, {
      opacity: 0,
      ease: "power4.in",
      duration: 0.2,
    });
  }
  animateArrowDesktop() {
    gsap.to(this._arrow, {
      rotate: !this.isSubDeskTopOpen ? 0 : -180,
      ease: "power2.inOut",
      duration: 0.2,
    });
  }
}

export default NavBar;
