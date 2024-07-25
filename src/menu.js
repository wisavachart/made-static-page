// NAV MENU //
export function selectMenu() {
  const menulist = document.querySelectorAll(".menu_list");
  const gradientTabs = document.querySelectorAll(".box");

  menulist.forEach(function (element, index) {
    element.addEventListener("mouseover", function () {
      if (gradientTabs[index]) {
        gradientTabs[index].classList.add("made_pink_gradient", "expand");
      }
    });

    element.addEventListener("mouseout", function () {
      if (gradientTabs[index]) {
        gradientTabs[index].classList.remove("made_pink_gradient", "expand");
      }
    });
  });
}
