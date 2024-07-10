document.addEventListener('DOMContentLoaded', function () {
  const tabContainers = document.querySelectorAll('.tabs-container');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-button');
    const tabContents = container.querySelectorAll('.tab-content');
    const tabsMenu = container.querySelector('.tabs-menu');
    const slider = document.createElement('div');
    slider.classList.add('slider');
    tabsMenu.appendChild(slider);

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const targetTab = this.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
          if (content.id === targetTab) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        });
        this.classList.add('active');

        // Move the slider to the active tab
        slider.style.left = `${this.offsetLeft}px`;
        slider.style.width = `${this.offsetWidth}px`; // Adjust slider width to match the button

        // Calculate the offsetLeft of the clicked tab button and adjust the tabsMenu scrollLeft
        const offsetLeft = this.offsetLeft;
        tabsMenu.scrollLeft = offsetLeft - tabsMenu.offsetWidth / 4;
      });

      // Initialize slider position if the first tab is active
      if (button.classList.contains('active')) {
        slider.style.left = `${button.offsetLeft}px`;
        slider.style.width = `${button.offsetWidth}px`; // Adjust slider width to match the button
      }
    });
  });
});
