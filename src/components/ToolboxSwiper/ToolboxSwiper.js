// src/js/components/ToolboxSwiper.js
import "./_ToolboxSwiper.scss";

export default function ToolboxSwiper() {
	const mySwiperEl = document.querySelector(".mySwiper");
	const hmuSwiperEl = document.querySelector(".hmuSwiper");

	if (!mySwiperEl && !hmuSwiperEl) return;

	let mySwiper;
	let hmuSwiper;

	if (mySwiperEl) {
		mySwiper = new Swiper(".mySwiper", {
			pagination: {
				el: ".swiper-pagination",
			},
		});
	}

	if (hmuSwiperEl) {
		hmuSwiper = new Swiper(".hmuSwiper", {
			effect: "cards",
			grabCursor: true,
			loop: false,
		});
	}

	const resetBtn = document.getElementById("resetSwiper");

	if (resetBtn && hmuSwiper) {
		resetBtn.addEventListener("click", () => {
			hmuSwiper.slideTo(0, hmuSwiper.params.speed, true);
		});
	}
}
