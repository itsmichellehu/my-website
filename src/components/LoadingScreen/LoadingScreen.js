import "./_LoadingScreen.scss";

export default function initLoadingAnimation() {
	// Wait for DOM to be ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", startAnimation);
	} else {
		startAnimation();
	}

	function startAnimation() {
		const loadingScreen = document.querySelector(".loading-screen");
		const loadingText = loadingScreen?.querySelector(".loading-text");

		if (!loadingScreen || !loadingText) return;

		// Hide content and lock scroll
		document.body.style.overflow = "hidden";
		document.querySelector("nav")?.style.setProperty("display", "none");
		document.querySelector("main")?.style.setProperty("display", "none");
		document.querySelector("footer")?.style.setProperty("display", "none");

		// Ensure loading screen is visible
		loadingScreen.style.display = "flex";

		let percentage = 0;
		const interval = setInterval(() => {
			if (percentage < 100) {
				percentage++;
				loadingText.textContent = `${percentage}%`;
				loadingText.style.opacity = 0.1 + (percentage / 100) * 0.9;
			} else {
				clearInterval(interval);
				loadingText.textContent = "100%";
				loadingText.style.opacity = "1";

				setTimeout(() => {
					loadingScreen.classList.add("dissolve");

					setTimeout(() => {
						loadingScreen.remove();
						document.body.style.overflow = "";

						document.querySelector("nav")?.style.removeProperty("display");
						document.querySelector("main")?.style.removeProperty("display");
						document.querySelector("footer")?.style.removeProperty("display");
					}, 1000);
				}, 1000);
			}
		}, 30);
	}
}
