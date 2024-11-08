import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import Footer from '../components/Footer/Footer';

import ScrollToSection from '../components/ScrollToASection/ScrollToASection';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

import { AnimateInView } from "../components/AnimateInView/AnimateInView";
const classAnimationMap = {
    'fadeIn_inView': 'animate__fadeIn',
    'fadeInRight_inView': 'animate__fadeInRight',
    'fadeInLeft_inView': 'animate__fadeInLeft',
    'slideInUp_inView': 'animate__slideInUp',
    'bounceIn_inView': 'animate__bounceIn'
};

import initLoadingAnimation from '../components/LoadingScreen/LoadingScreen';

document.addEventListener("DOMContentLoaded", () => {
    initLoadingAnimation();
    document.getElementById("content").style.display = "none"; // Ensure content is hidden initially
});


document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    Footer();

    AnimateInView({ classAnimationMap });
    ScrollToSection();
    initializeHideVideoControls();
});