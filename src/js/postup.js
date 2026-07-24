import "@pages/postup/_index.scss";
import "@components/ProjectComponents";
import "@components/SmallCard/SmallCard";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";
import "./postup-feature-cards";
import { onReady } from "@js/utils/dom-events";

onReady(() => {
  ProgressBar();
});
