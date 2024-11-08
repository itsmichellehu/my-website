// src/LoadingComponent.js

import './_LoadingScreen.scss';

export default function initLoadingAnimation() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `<p id="loading-text">0%</p>`;
    document.body.appendChild(loadingScreen);

    const loadingText = document.getElementById("loading-text");
    let percentage = 0;

    if (!loadingText) {
        console.error("Loading text element not found");
        return;
    }

    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            loadingText.textContent = `${percentage}%`;
        } else {
            clearInterval(interval);
            loadingScreen.style.display = "none";

            const content = document.getElementById("content");
            if (content) {
                content.style.display = "block";
            } else {
                console.error("Content element not found");
            }
        }
    }, 30); // Adjust this value for speed
}
