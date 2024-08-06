import './StashedFeaturesSection.scss';  // Import any relevant styles

function StashedFeaturesSection() {
    let isStashedFeaturesSectionInitialized = false;

    function StashedFeaturesSection() {
        // Check if the function has already been called
        if (isStashedFeaturesSectionInitialized) {
            return;
        }

        // Function logic here
        console.log("StashedFeaturesSection is being initialized");

        // Set the flag to true after the function is called
        isStashedFeaturesSectionInitialized = true;
    }

    // Example usage
    StashedFeaturesSection(); // This will execute the function
    StashedFeaturesSection(); // This will not execute the function again

    console.log('StashedFeaturesSection function called');  // Debug statement

    const sectionHTML = `
        <div class="wrapper">
          <ul class="grid-container">
              <li class="card first-child">
                  <div class="card-wrapper">
                      <div class="icon-wrapper">
                          <img src="assets/svg/postup/stashed-feature-seating.svg" alt="" class="icon">
                      </div>
                      <div class="copy-wrapper">
                          <p class="heading">Seating availability</p>
                          <p class="body">
                              This was mentioned by one interviewee. It could expedite a remote worker's journey and monetized.
                          </p>
                      </div>
                  </div>
              </li>
              <li class="card">
                  <div class="card-wrapper">
                      <div class="icon-wrapper">
                          <img src="assets/svg/postup/stashed-feature-reservation.svg" alt="" class="icon">
                      </div>
                      <div class="copy-wrapper">
                          <p class="heading">Reservation system</p>
                          <p class="body">
                              This has great potential but its rarity in coffee shops is a challenge. It also could be monetized.
                          </p>
                      </div>
                  </div>
              </li>
              <li class="card">
                  <div class="card-wrapper">
                      <div class="icon-wrapper">
                          <img src="assets/svg/postup/stashed-feature-search-bar.svg" alt="" class="icon">
                      </div>
                      <div class="copy-wrapper">
                          <p class="heading">Home search bar</p>
                          <p class="body">
                              As a common user route, I anticipated some users opting for this route instead of the search page.
                          </p>
                      </div>
                  </div>
              </li>
              <li class="card last-child">
                  <div class="card-wrapper">
                      <div class="icon-wrapper">
                          <img src="assets/svg/postup/stashed-feature-graph.svg" alt="" class="icon">
                      </div>
                      <div class="copy-wrapper">
                          <p class="heading">Popular times</p>
                          <p class="body">
                              Given its popularity in other apps, it could enhance the UX and boost competitive advantage.
                          </p>
                      </div>
                  </div>
              </li>
          </ul>
        </div>
    `;

    // Specify where to insert the section
    const targetElement = document.getElementById('stashed-features-section');  // Adjust the selector as needed

    if (targetElement) {
        targetElement.insertAdjacentHTML('beforeend', sectionHTML);  // Insert inside the target container
    } else {
        console.error('Target element not found');
    }
}
StashedFeaturesSection(); // This will execute the function
StashedFeaturesSection(); // This will not execute the function again
export default StashedFeaturesSection;
