import "./_LoadingScreen.scss";

//  * Initializes a loading screen animation that displays a percentage counter
//  * and fades out once the page has fully loaded.
//  *
//  * The function waits for the DOM to be ready before starting the animation.
//  * It detects page load completion by monitoring when the loading animation
//  * reaches 100% (which happens on a fixed interval), then hides the loading
//  * screen with a dissolve effect after a 1-second delay.
//  *
//  * During the animation:
//  * - Hides nav, main, and footer elements
//  * - Locks body scroll
//  * - Displays a loading percentage counter that increments every 30ms
//  * - Gradually increases text opacity as percentage increases
//  *
//  * After completion:
// Monitor actual page load progress

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
		// document.querySelector("nav")?.style.setProperty("display", "none");
		// document.querySelector("main")?.style.setProperty("display", "none");
		// document.querySelector("footer")?.style.setProperty("display", "none");

		// Ensure loading screen is visible
		loadingScreen.style.display = "flex";

		let percentage = 0;
		let intervalId;

		const finishLoading = () => {
			if (intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}

			loadingText.textContent = "100%";
			loadingText.style.opacity = "1";

			const revealContent = () => {
				document.body.style.overflow = "";
				// document.querySelector("nav")?.style.removeProperty("display");
				// document.querySelector("main")?.style.removeProperty("display");
				// document.querySelector("footer")?.style.removeProperty("display");
				document.querySelector("nav")?.style.setProperty("opacity", "1");
				document.querySelector("main")?.style.setProperty("opacity", "1");
				document.querySelector("footer")?.style.setProperty("opacity", "1");
				// document.querySelector("nav")?.style.setProperty("display", "flex");
				// document.querySelector("main")?.style.setProperty("display", "block");
				// document.querySelector("footer")?.style.setProperty("display", "flex");
			};

			const fadeOutLoader = () => {
				loadingScreen.style.opacity = "0";
				setTimeout(() => {
					loadingScreen.remove();
				}, 1000);
			};

			// Keep content hidden until 300ms after hitting 100%
			setTimeout(() => {
				fadeOutLoader();
				revealContent();
			}, 300);
		};

		// Start the loading animation
		intervalId = setInterval(() => {
			if (percentage < 100) {
				percentage++;
				loadingText.textContent = `${percentage}%`;
				loadingText.style.opacity = 0.1 + (percentage / 100) * 0.9;
			} else {
				finishLoading();
			}
		}, 30);

		// If page loads before animation completes, finish within 1 second
		window.addEventListener("load", () => {
			setTimeout(() => {
				if (percentage < 100) {
					percentage = 100;
				}
			}, 1000);
		});
	}
}
