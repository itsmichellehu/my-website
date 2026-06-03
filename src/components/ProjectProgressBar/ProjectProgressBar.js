import "./_ProjectProgressBar.scss";
import { onAnimationFrame } from "@js/utils/dom-events.js";

function initializeProgressBar() {
	const progressBarContainer = document.querySelector(".progress-bar__container");
	const progressBar = document.querySelector(".progress-bar");

	if (!progressBarContainer || !progressBar) return;

	// Initially hide the progress-bar-container
	progressBarContainer.style.display = "none";

	// Track current visibility so we only touch the DOM when it actually changes.
	let isVisible = false;

	onAnimationFrame(document, "scroll", () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight || window.innerHeight;
		const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

		progressBar.style.width = scrollPercent + "%";

		// Hide the container at the very top, show it once scrolling begins —
		// but only write to style.display when the state changes.
		const shouldBeVisible = scrollTop > 0;
		if (shouldBeVisible !== isVisible) {
			progressBarContainer.style.display = shouldBeVisible ? "block" : "none";
			isVisible = shouldBeVisible;
		}
	});
}

export default initializeProgressBar;
