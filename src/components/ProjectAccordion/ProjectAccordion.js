function toggleAscripton(button) {
  const content = button.querySelector('.accordion__content');
  const icon = button.querySelector('.accordion__icon');

  content.classList.toggle('active');
  icon.classList.toggle('rotate');

  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
}

// Attach click event listeners to all accordion headers
function attachAccordionListeners() {
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
      toggleAccordion(this);
    });
  });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  attachAccordionListeners();
});