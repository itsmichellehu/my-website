import '../scss/boardspace.scss';

import '../components/lists';
import '../components/wrappedList';
import '../components/showFullImage';
import '../components/table';
import '../components/accordion';
import '../components/BoardspaceCard/BoardspaceCard';
import '../components/BoardSpaceHeadingContainer/BoardSpaceHeadingContainer';

import NavBar from '../components/NavBar/NavBar';
// import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    // NavBarBackground();
    ProgressBar();
    BackToTopButton();
    Footer();

    initializeAccordion();
    initializeHideVideoControls();
});


function initializeBoardspacePage() {
    // Your code to initialize the post up page goes here
    console.log("Boardspace Page Initialized!");
}

initializeBoardspacePage();