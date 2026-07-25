import "@pages/tastebuds/_index.scss";
import "@components/ProjectComponents";
import "@components/CardVertical/CardVertical";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";
import "./tastebuds-feature-cards";
import { onReady } from "@js/utils/dom-events";

onReady(() => {
  ProgressBar();
});
