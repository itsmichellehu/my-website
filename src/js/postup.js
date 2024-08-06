import '../scss/postup.scss';
import '../components/AutoplayVideo/autoplay-video';
// import '../components/Carousel/carousel';
import '../components/ScrollButton/scroll-button';
import '../components/Scrollable/scrollable';
// import '../components/SwipeableCarouselPostUp/SwipeableCarouselPostUp';
import '../components/Tabs/tabs';

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

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';

import StashedFeaturesSection from "../components/PostUpSections/StashedFeaturesSection";

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    ProgressBar();
    BackToTopButton();
    Footer();
    initializeAccordion();

    StashedFeaturesSection();
});