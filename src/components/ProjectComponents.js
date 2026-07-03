import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import "./ProjectComponents.scss";
import initTabsContainers from "./TabsContainer/TabsContainer";

import { initializeAccordion } from "./ProjectAccordion/ProjectAccordion";
import initFeatureCards from "./FeatureCard/FeatureCard";

const onReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn)
    : fn();

onReady(() => {
  initializeProgressBar();
  BackToTopButton();
  initializeAccordion();
  initTabsContainers();
});

initFeatureCards();
