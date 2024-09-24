import '../scss/index.scss';

// import '../components/NavBar/NavBar';
import '../components/Scrollable/scrollable';
import '../components/HoverPlayGif/HoverPlayGif';
import '../components/ScrollButton/scroll-button';

import NavBar from '../components/NavBar/NavBar';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';

// import { initializeHideVideoControls } from '../components/HideVideoControls/HideVideoControls';

document.addEventListener('DOMContentLoaded', () => {
    NavBar();
    BackToTopButton();
    Footer();
    initializeHideVideoControls();
});

function initializeAboutPage() {
    // Your code to initialize the post up page goes here
    console.log("Post Up Page Initialized!");
}

initializeAboutPage();


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

const scrollableContent = document.querySelector('.scrollable-content');
const scrollbarThumb = document.querySelector('.c-scrollbar_thumb');
const scrollbar = document.querySelector('.c-scrollbar');
let scrollTimeout;

function updateScrollbar() {
    const contentHeight = scrollableContent.scrollHeight;
    const containerHeight = scrollableContent.clientHeight;

    // Calculate the height of the scrollbar thumb
    const thumbHeight = (containerHeight / contentHeight) * scrollbar.clientHeight;
    scrollbarThumb.style.height = `${thumbHeight}px`;

    // Update the position of the scrollbar thumb as the user scrolls
    scrollableContent.addEventListener('scroll', () => {
        const scrollTop = scrollableContent.scrollTop;
        const maxThumbPosition = scrollbar.clientHeight - scrollbarThumb.offsetHeight;
        const thumbPosition = (scrollTop / (contentHeight - containerHeight)) * maxThumbPosition;
        scrollbarThumb.style.transform = `translateY(${thumbPosition}px)`;

        // Show the scrollbar when scrolling starts
        scrollbar.classList.add('show');

        // Clear the previous timeout (if user is still scrolling)
        if (scrollTimeout) clearTimeout(scrollTimeout);

        // Hide the scrollbar after scrolling stops (e.g., 1 second delay)
        scrollTimeout = setTimeout(() => {
            scrollbar.classList.remove('show');
        }, 1000); // Adjust delay as needed
    });
}

// Initialize scrollbar
updateScrollbar();

// Recalculate scrollbar on resize
window.addEventListener('resize', updateScrollbar);