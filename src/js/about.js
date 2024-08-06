import '../scss/about.scss';

// import '../components/NavBar/NavBar';
import '../components/FaqAccordion/FaqAccordion';
import '../components/ToolboxSwiper/ToolboxSwiper';
import '../components/Scrollable/scrollable';
import '../components/ScrollButton/scroll-button';

import NavBar from '../components/NavBar/NavBar';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    ProgressBar();
    BackToTopButton();
});

// postup.js
function initializeAboutPage() {
    // Your code to initialize the post up page goes here
    console.log("About Page Initialized!");
}

initializeAboutPage();