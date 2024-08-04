// src/js/accordion.js
export function toggleAccordion(button) {
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

export function initializeAccordion() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion__header').forEach(header => {
      header.addEventListener('click', function () {
        toggleAccordion(this.parentElement);
      });
    });
  });
}
