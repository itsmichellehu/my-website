import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';

import ScrollToSection from '../components/ScrollToASection/ScrollToASection';
import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

import { AnimateInView } from "../components/AnimateInView/AnimateInView";
const classAnimationMap = {
    'fade-in': 'animate__fadeIn',
    'fade-in-right': 'animate__fadeInRight',
    'fade-in-left': 'animate__fadeInLeft',
    'slide-up': 'animate__slideInUp',
    'bounce-in': 'animate__bounceIn'
};

AnimateInView({ classAnimationMap });

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    BackToTopButton();
    Footer();

    AnimateInView();
    ScrollToSection();
    initializeHideVideoControls();
});
