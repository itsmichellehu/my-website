import "@scss/main.scss";
import "@components/GlobalComponents";

document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector("video.lazy")) {
		import("./lazy-video.js").then(({ default: initLazyVideos }) => {
			initLazyVideos();
		});
	}

	if (document.querySelector(".tabs-container")) {
		import("@components/TabsContainer/TabsContainer.js").then(({ default: initTabsContainers }) => {
			initTabsContainers();
		});
	}
});

const page = document.body.dataset.page;

if (page === "home") import("./index");
if (page === "about") import("./about");
if (page === "tastebuds") import("./tastebuds");
if (page === "postup") import("./postup");
// if (page === "boardspace") import("./boardspace", "@components/ProjectComponents");
