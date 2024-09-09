import Slider from "./src/slider";
import NavBar from "./src/navbar";
import MadeChannelApp from "./src/madeChannelSection";

//CHECK PATH
// const currentPath = window.location.pathname;
initialApp();
function initialApp() {
  adjustVH();
  new Slider();
  new NavBar();
}

function adjustVH() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.95}px`
  );
}
window.addEventListener("resize", adjustVH);

// const menu = document.querySelectorAll(".made-ch-tag");
// console.log(menu);

// menu.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     console.log(index);
//   });
// });
