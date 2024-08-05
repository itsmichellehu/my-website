import './BackToTopButton.scss';

function BackToTopButton() {
    const button = document.createElement('button');
    button.id = 'btn-back-to-top';
    button.innerHTML = `
<svg class="btn-back-to-top-svg" xmlns="http://www.w3.org/2000/svg" width="56" height="57"
        viewBox="0 0 56 57" fill="none">
        <path d="M39 34L28 23L17 34" stroke-width="3" />
      </svg>
      <p class="btn-back-to-top-label">Back to top</p>
    `;
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

export default BackToTopButton;
