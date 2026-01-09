import BackToTopButton from "./BackToTopButton/BackToTopButton";
import ProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import "@scss/sections/all-sections.scss";
import "./ProjectComponents.scss";

// import { initializeAccordion } from './ProjectAccordion/ProjectAccordion';
import initializeTabs from "./TabsContainer/TabsContainer";
import enableImageZoom from "./ImageZoom/ImageZoom";

document.addEventListener("DOMContentLoaded", function () {
	ProgressBar();
	BackToTopButton();
	// initializeAccordion();
	enableImageZoom();
	initializeTabs();
});