import './_LoadingScreen.scss';

export default function initLoadingAnimation() {
    // Remove any existing loading screen
    const existingLoadingScreen = document.getElementById('loading-screen');
    if (existingLoadingScreen) {
        existingLoadingScreen.remove();
    }

    // Create a new loading screen element
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `<p id="loading-text">0%</p>`;
    document.body.appendChild(loadingScreen);

    const loadingText = document.getElementById('loading-text');
    let percentage = 0;

    if (!loadingText) {
        console.error('Loading text element not found');
        return;
    }

    // Hide <nav>, <main>, and <footer> elements initially
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (nav) {
        nav.style.display = 'none';
    }
    if (main) {
        main.style.display = 'none';
    }
    if (footer) {
        footer.style.display = 'none';
    }

    // Start the loading percentage update
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            loadingText.textContent = `${percentage}%`;
        } else {
            clearInterval(interval);
            // Fade out the loading screen
            loadingScreen.classList.add('hidden');

            // Delay to allow the transition to complete
            setTimeout(() => {
                loadingScreen.remove();
                // Show <nav>, <main>, and <footer> elements
                if (nav) {
                    nav.style.display = 'flex'; // Assuming nav uses flex layout
                }
                if (main) {
                    main.style.display = 'block'; // Main content typically uses block layout
                }
                if (footer) {
                    footer.style.display = 'block'; // Footer typically uses block layout
                }
            }, 300); // Matches the CSS transition duration
        }
    }, 30);
}
