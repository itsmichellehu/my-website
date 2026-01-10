import { BackToTopButton } from "./BackToTopButton/BackToTopButton";
import initializeProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import "@scss/sections/all-sections.scss";
import "./ProjectComponents.scss";
import { initializeTabs } from './TabsContainer/TabsContainer';

// import { initializeAccordion } from './ProjectAccordion/ProjectAccordion';
import enableImageZoom from "./ImageZoom/ImageZoom";

document.addEventListener("DOMContentLoaded", function () {
	initializeProgressBar();
	BackToTopButton();
	// initializeAccordion();
	enableImageZoom();
	initializeTabs();
});