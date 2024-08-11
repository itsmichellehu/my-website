import '../scss/index.scss';

// import '../components/NavBar/NavBar';
import '../components/Scrollable/scrollable';
import '../components/HoverPlayGif/HoverPlayGif';
import '../components/ScrollButton/scroll-button';

import NavBar from '../components/NavBar/NavBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';

import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    BackToTopButton();
    Footer();
    initializeHideVideoControls();
});

function initializeAboutPage() {
    // Your code to initialize the post up page goes here
    console.log("Post Up Page Initialized!");
}

initializeAboutPage();