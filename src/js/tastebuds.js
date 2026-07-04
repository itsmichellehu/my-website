import "@pages/tastebuds/_index.scss";
import "@components/ProjectComponents";
import "@components/CardVertical/CardVertical";
import "@components/DesignWalkthroughGrid/DesignWalkthroughGrid";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";
import "./tastebuds-feature-cards";

const onReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn)
    : fn();

onReady(() => {
  ProgressBar();
});
