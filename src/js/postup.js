import '../scss/postup.scss';
import '../components/AutoplayVideo/autoplay-video';
// import '../components/Carousel/carousel';
import '../components/ScrollButton/scroll-button';
import '../components/Scrollable/scrollable';
// import '../components/SwipeableCarouselPostUp/SwipeableCarouselPostUp';
import '../components/Tabs/tabs';

// postup.js
function initializePostUpPage() {
    // Your code to initialize the post up page goes here
    console.log("Post Up Page Initialized!");
}

initializePostUpPage();

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import Footer from '../components/Footer/Footer';

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    ProgressBar();
    NavBar();
    NavBarBackground();
    Footer();
    initializeAccordion();

});