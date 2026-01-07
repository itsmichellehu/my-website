import NavBar from "./NavBar/NavBar";
import NavBarBackground from "./NavBarBackground/NavBarBackground";
import Footer from "./Footer/Footer";

import ScrollToSection from "./ScrollToSection/ScrollToSection";
import { initializeHideVideoControls } from "./HideVideoControls/HideVideoControls";

document.addEventListener("DOMContentLoaded", () => {
	NavBar();
	NavBarBackground();
	Footer();
	ScrollToSection();
	initializeHideVideoControls();
});
