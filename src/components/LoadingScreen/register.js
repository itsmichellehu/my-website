import initLoadingAnimation from "./LoadingScreen";

// Initialize on initial load and hide content until ready
function init() {
	initLoadingAnimation();
	const content = document.getElementById("content");
	if (content) content.style.display = "none";
}

document.addEventListener("DOMContentLoaded", init);

// Listen for route changes (browser back/forward)
window.addEventListener("popstate", init);

// Trigger on internal link clicks
document.addEventListener("click", (event) => {
	const target = event.target.closest("a");
	if (target && target.getAttribute("href")?.startsWith("/")) {
		init();
	}
});
