import "./_ProjectProgressBar.scss";
import { onAnimationFrame } from "@js/utils/dom-events.js";

function initializeProgressBar() {
	const progressBarContainer = document.querySelector(".progress-bar__container");
	const progressBar = document.querySelector(".progress-bar");

	if (!progressBarContainer || !progressBar) return;

	let isVisible = false;

	function render() {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight || window.innerHeight;
		progressBar.style.width = `${(scrollTop / (scrollHeight - clientHeight)) * 100}%`;
		const shouldBeVisible = scrollTop > 0;
		if (shouldBeVisible !== isVisible) {
			progressBarContainer.style.display = shouldBeVisible ? "block" : "none";
			isVisible = shouldBeVisible;
		}
	}

	// Run once at init so bar reflects position on page-restore / back-navigation.
	render();

	onAnimationFrame(document, "scroll", render);
}

export default initializeProgressBar;
