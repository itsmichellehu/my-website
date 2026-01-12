import NavBar from "./NavBar/NavBar";
import NavBarBackground from "./NavBarBackground/NavBarBackground";
import Footer from "./Footer/Footer";

import initLoadingAnimation from "./LoadingScreen/LoadingScreen";

document.addEventListener("DOMContentLoaded", () => {
	initLoadingAnimation();
	NavBar();
	NavBarBackground();
	Footer();
});
