import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import "./ProjectComponents.scss";
import initTabsContainers from "./TabsContainer/TabsContainer";

import { initializeAccordion } from "./ProjectAccordion/ProjectAccordion";
import initFeatureCards from "./FeatureCard/FeatureCard";

document.addEventListener("DOMContentLoaded", function () {
  initializeProgressBar();
  BackToTopButton();
  initializeAccordion();
  initTabsContainers();
});

initFeatureCards();
