import '../scss/boardspace.scss';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    ProgressBar();
    NavBar();
    NavBarBackground();
});