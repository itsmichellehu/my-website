import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import "@scss/sections/_all-sections.scss";
import "./ProjectComponents.scss";
import initTabsContainers from "./TabsContainer/TabsContainer";

// import { initializeAccordion } from './ProjectAccordion/ProjectAccordion';
import enableImageZoom from "./ImageZoom/ImageZoom";
import initFeatureCards from "./FeatureCard/FeatureCard";

document.addEventListener("DOMContentLoaded", function () {
  initializeProgressBar();
  BackToTopButton();
  // initializeAccordion();
  enableImageZoom();
  initTabsContainers();
});

initFeatureCards();
