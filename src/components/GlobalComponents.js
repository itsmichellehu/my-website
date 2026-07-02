import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import initLoadingAnimation from "./LoadingScreen/LoadingScreen";

document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  NavBar();
  Footer();
});
