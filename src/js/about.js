import '../scss/about.scss';

import '../components/GlobalComponents';
import { initializeFaqAccordion } from "../components/FaqAccordion/FaqAccordion";
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import '../components/Scrollable/scrollable';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    Footer();
    NavBar();
    ProgressBar();

    initializeFaqAccordion();
});
