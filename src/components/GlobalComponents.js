import NavBar from "./NavBar/NavBar";
import NavBarBackground from "./NavBarBackground/NavBarBackground";
import Footer from "./Footer/Footer";

import initLoadingAnimation from "./LoadingScreen/LoadingScreen";

// Only show loader if page is slow
let loaderTimeout = setTimeout(() => {
	initLoadingAnimation();
}, 200);

window.addEventListener("load", () => {
	clearTimeout(loaderTimeout);
});

import BackToTopButton from "./BackToTopButton/BackToTopButton";

import ScrollToSection from "./ScrollToSection/ScrollToSection";

document.addEventListener("DOMContentLoaded", () => {
	NavBar();
	NavBarBackground();
	Footer();
	ScrollToSection();
	BackToTopButton();
});
