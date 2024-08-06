import '../scss/index.scss';

// import '../components/NavBar/NavBar';
import '../components/Scrollable/scrollable';
import '../components/HoverPlayGif/HoverPlayGif';
import '../components/ScrollButton/scroll-button';

import NavBar from '../components/NavBar/NavBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    BackToTopButton();
});