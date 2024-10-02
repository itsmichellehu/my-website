import '../scss/postup.scss';

import '../components/AutoplayVideo/autoplay-video';
import '../components/ScrollButton/scroll-button';
import '../components/Scrollable/scrollable';
import '../components/ImageZoom/ImageZoom';

// postup.js
function initializePostUpPage() {
    console.log("Post Up Page Initialized!");
}

initializePostUpPage();

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main PostUp page loaded');
    // Additional initialization code for this page
});

import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import enableImageZoom from "../components/ImageZoom/ImageZoom";

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    ProgressBar();
    BackToTopButton();
    Footer();
    initializeAccordion();
    enableImageZoom();
    initializeHideVideoControls();
});