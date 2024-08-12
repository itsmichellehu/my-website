import '../scss/postup.scss';
import '../components/AutoplayVideo/autoplay-video';
// import '../components/Carousel/carousel';
import '../components/ScrollButton/scroll-button';
import '../components/Scrollable/scrollable';
// import '../components/SwipeableCarouselPostUp/SwipeableCarouselPostUp';
import '../components/ImageZoom/ImageZoom';
import '../components/Tabs/Tabs';

// postup.js
function initializePostUpPage() {
    console.log("Post Up Page Initialized!");
}

initializePostUpPage();

// Import and initialize other components

import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import enableImageZoom from "../components/ImageZoom/ImageZoom";
import scrollToChallenge from "../components/ScrollToChallenge/ScrollToChallenge";

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
    scrollToChallenge();
    initializeHideVideoControls();
});