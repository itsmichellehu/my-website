import '../scss/boardspace.scss';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';
import NavBar from '../components/NavBar/NavBar';
import NavBarBackground from '../components/NavBarBackground/NavBarBackground';

document.addEventListener('DOMContentLoaded', () => {
    BackToTopButton();
    Footer();
    ProgressBar();
    NavBar();
    NavBarBackground();
});