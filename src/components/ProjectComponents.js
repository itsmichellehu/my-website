import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";

import { initializeAccordion } from "./ProjectAccordion/ProjectAccordion";
import initFeatureCards from "./FeatureCard/FeatureCard";

import "./Blockquote/Blockquote";
import "./GridAsideRight/GridAsideRight";
import "./UsabilityTestFindingsCard/UsabilityTestFindingsCard";

const onReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn)
    : fn();

// Shared init registry for case-study pages (tastebuds, postup, boardspace).
const domReadyInits = [
  initializeProgressBar,
  BackToTopButton,
  initializeAccordion,
  initFeatureCards,
];

onReady(() => domReadyInits.forEach((init) => init()));
