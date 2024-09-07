import Slider from "./src/slider";
import NavBar from "./src/navbar";
import MadeChannelApp from "./src/madeChannelSection";

//CHECK PATH
// const currentPath = window.location.pathname;
initialApp();

function initialApp() {
  new Slider();
  new NavBar();
}
