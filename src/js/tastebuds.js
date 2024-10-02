import '../scss/tastebuds.scss';

// Import components
import '../components/AutoplayVideo/autoplay-video';
import '../components/AutoplayVideoCarousel/AutoplayVideoCarousel';
import '../components/ImageZoom/ImageZoom';
import '../components/ScrollButton/scroll-button';
import '../components/SequentialVideoPlayer/sequential-video-player';
import '../components/Scrollable/scrollable';

import MediaCarousel from '../components/MediaCarousel/MediaCarousel';
import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import ScrollToSection from '../components/ScrollToASection/ScrollToASection';
import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

// Initialize page elements once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Main TasteBuds page loaded');

    // Initialize Carousels
    const carousel1 = new MediaCarousel('#carousel-01');
    const carousel2 = new MediaCarousel('#carousel-02');
    const carousel3 = new MediaCarousel('#carousel-03');

    // Initialize Navbar and other components
    NavBar();
    NavBarBackground();
    ProgressBar();
    BackToTopButton();
    Footer();

    // Initialize other page-specific components
    initializeAccordion();
    ScrollToSection();
    initializeHideVideoControls();

    console.log("TasteBuds Page Initialized!");
});