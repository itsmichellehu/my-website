// Import SCSS file for this page
import '../scss/tastebuds.scss';

// Import and initialize components specific to this page
// import '../components/Carousel/carousel';
import '../components/AutoplayVideo/autoplay-video';
import '../components/AutoplayVideoCarousel/AutoplayVideoCarousel'
import '../components/ImageZoom/ImageZoom';
import '../components/ScrollButton/scroll-button';
import '../components/SequentialVideoPlayer/sequential-video-player';

import MediaCarousel from '../components/MediaCarousel/MediaCarousel';
document.addEventListener('DOMContentLoaded', () => {
    // Assuming you have two carousels with IDs `carousel-01` and `carousel-02`
    const carousel1 = new MediaCarousel('#carousel-01');
    const carousel2 = new MediaCarousel('#carousel-02');
    const carousel3 = new MediaCarousel('#carousel-03');

    // If you have more carousels, continue creating instances similarly
    // const carousel3 = new MediaCarousel('#carousel-03');
});

import '../components/Scrollable/scrollable';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main TasteBuds page loaded');
    // Additional initialization code for this page
});

import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    ProgressBar();
    BackToTopButton();
    Footer();

    initializeAccordion();
    initializeHideVideoControls();
});