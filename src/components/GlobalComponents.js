import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
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

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    NavBarBackground();
    BackToTopButton();
    Footer();

    AnimateInView({ classAnimationMap });
    ScrollToSection();
    initializeHideVideoControls();
});