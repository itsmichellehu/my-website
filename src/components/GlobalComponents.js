import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import initLoadingAnimation from "./LoadingScreen/LoadingScreen";
import { initImageZoom } from "./ImageZoom/ImageZoom";

import { onReady } from "@js/utils/dom-events";

onReady(() => {
  initLoadingAnimation();
  NavBar();
  Footer();
  initImageZoom();
});
