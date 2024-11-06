// src/LoadingComponent.js

import './_LoadingScreen.scss';

export default function initLoadingAnimation() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `<p id="loading-text">0%</p>`;
    document.body.appendChild(loadingScreen);

    const loadingText = document.getElementById("loading-text");
    let percentage = 0;

    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            loadingText.textContent = `${percentage}%`;
        } else {
            clearInterval(interval);
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").style.display = "block";
        }
    }, 30); // Adjust this value for speed
}