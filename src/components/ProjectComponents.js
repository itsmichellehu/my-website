import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import initTabsContainers from "./TabsContainer/TabsContainer";

import { initializeAccordion } from "./ProjectAccordion/ProjectAccordion";
import initFeatureCards from "./FeatureCard/FeatureCard";

import "./Blockquote/Blockquote";
import "./CardVertical/CardVertical";
import "./DesignWalkthroughGrid/DesignWalkthroughGrid";
import "./GridAsideRight/GridAsideRight";
import "./SmallCard/SmallCard";
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
  initTabsContainers,
  initFeatureCards,
];

onReady(() => domReadyInits.forEach((init) => init()));
