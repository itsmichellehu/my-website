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
  // NavBar and Footer inject <nav>/<footer>, so they must mount before either
  // path touches those elements: the skip path sets `opacity: 1` on them, and
  // querying earlier silently no-ops via `?.`, leaving them stuck at 0.
  NavBar();
  Footer();
  initImageZoom();

  if (process.env.NODE_ENV === "production") {
    initLoadingAnimation();
  } else {
    skipLoadingAnimation();
  }
});
