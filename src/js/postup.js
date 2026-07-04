import "@pages/postup/_index.scss";
import "@components/ProjectComponents";
import "@components/SmallCard/SmallCard";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";
import "./postup-feature-cards";

const onReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn)
    : fn();

onReady(() => {
  ProgressBar();
});
