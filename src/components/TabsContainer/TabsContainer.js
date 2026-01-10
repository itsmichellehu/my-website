import './_TabsContainer.scss';

export function initializeTabs() {
	document.addEventListener("DOMContentLoaded", () => {
		const tabContainers = document.querySelectorAll(".tabs-container");

		tabContainers.forEach((container) => {
			const tabButtons = container.querySelectorAll(".tab-button");
			const tabContents = container.querySelectorAll(".tab-content");
			const tabsMenu = container.querySelector(".tabs-menu");
			const slider = document.createElement("div");
			slider.classList.add("tabs-menu-slider");
			tabsMenu.appendChild(slider);

			tabButtons.forEach((button) => {
				button.addEventListener("click", function () {
					const targetTab = this.getAttribute("data-tab");
					tabButtons.forEach((btn) => btn.classList.remove("active"));
					tabContents.forEach((content) => {
						content.classList.toggle("active", content.id === targetTab);
					});
					this.classList.add("active");

					// Move the slider
					slider.style.left = `${this.offsetLeft}px`;
					slider.style.width = `${this.offsetWidth}px`;

					// Scroll tab menu
					const offsetLeft = this.offsetLeft;
					tabsMenu.scrollLeft = offsetLeft - tabsMenu.offsetWidth / 4;
				});

				// Initialize slider position
				if (button.classList.contains("active")) {
					slider.style.left = `${button.offsetLeft}px`;
					slider.style.width = `${button.offsetWidth}px`;
				}
			});
		});
	});
}
