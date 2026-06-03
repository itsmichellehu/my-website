import "@scss/pages/home/_index.scss";

// const scrollableContent = document.querySelector('.scrollable-content');
// const scrollbarThumb = document.querySelector('.c-scrollbar_thumb');
// const scrollbar = document.querySelector('.c-scrollbar');
//
// function updateScrollbar() {
//     const contentHeight = scrollableContent.scrollHeight;
//     const containerHeight = scrollableContent.clientHeight;
//
//     // Calculate the height of the scrollbar thumb
//     const thumbHeight = (containerHeight / contentHeight) * scrollbar.clientHeight;
//     scrollbarThumb.style.height = `${thumbHeight}px`;
//
//     // Update the position of the scrollbar thumb as the user scrolls
//     scrollableContent.addEventListener('scroll', () => {
//         const scrollTop = scrollableContent.scrollTop;
//         const maxThumbPosition = scrollbar.clientHeight - scrollbarThumb.offsetHeight;
//         const thumbPosition = (scrollTop / (contentHeight - containerHeight)) * maxThumbPosition;
//         scrollbarThumb.style.transform = `translateY(${thumbPosition}px)`;
//     });
// }
//
// // Initialize scrollbar
// updateScrollbar();
//
// // Recalculate scrollbar on resize
// window.addEventListener('resize', updateScrollbar);

const scrollableContent = document.querySelector(".scrollable-content");
const scrollbarThumb = document.querySelector(".c-scrollbar_thumb");
const scrollbar = document.querySelector(".c-scrollbar");
let scrollTimeout;

function updateScrollbar() {
	if (!scrollableContent || !scrollbarThumb || !scrollbar) return;
	const contentHeight = scrollableContent.scrollHeight;
	const containerHeight = scrollableContent.clientHeight;
	const thumbHeight = (containerHeight / contentHeight) * scrollbar.clientHeight;
	scrollbarThumb.style.height = `${thumbHeight}px`;
}

// Scroll handler registered once — updateScrollbar() re-reads dimensions on
// resize so the thumb position calculation here always uses live values.
if (scrollableContent && scrollbarThumb && scrollbar) {
	scrollableContent.addEventListener("scroll", () => {
		const contentHeight = scrollableContent.scrollHeight;
		const containerHeight = scrollableContent.clientHeight;
		const scrollTop = scrollableContent.scrollTop;
		const maxThumbPosition = scrollbar.clientHeight - scrollbarThumb.offsetHeight;
		const thumbPosition = (scrollTop / (contentHeight - containerHeight)) * maxThumbPosition;
		scrollbarThumb.style.transform = `translateY(${thumbPosition}px)`;
		scrollbar.classList.add("show");
		if (scrollTimeout) clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(() => {
			scrollbar.classList.remove("show");
		}, 1000);
	});
}

// Initialize scrollbar
updateScrollbar();

// Recalculate thumb size on resize (scroll listener above re-reads dimensions live)
window.addEventListener("resize", updateScrollbar);
document.addEventListener("DOMContentLoaded", () => {
	initLoadingAnimation();
});

// Loading animation is now initialized globally via
// @components/LoadingScreen/register imported in main.js.
