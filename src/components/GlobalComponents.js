import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import initLoadingAnimation from "./LoadingScreen/LoadingScreen";
import { initImageZoom } from "./ImageZoom/ImageZoom";

import { onReady } from "@js/utils/dom-events";

// The pages hide main/nav/footer with inline `opacity: 0` and rely on the
// loading screen to reveal them, so skipping it in dev must reveal them too.
function skipLoadingAnimation() {
  document.querySelector(".loading-screen")?.remove();
  ["nav", "main", "footer"].forEach((selector) => {
    document.querySelector(selector)?.style.setProperty("opacity", "1");
  });
  document.dispatchEvent(new CustomEvent("loading-complete"));
}

onReady(() => {
  if (process.env.NODE_ENV === "production") {
    initLoadingAnimation();
  } else {
    skipLoadingAnimation();
  }
  NavBar();
  Footer();
  initImageZoom();
});
