function Footer() {
    const existingFooter = document.querySelector('footer');
    if (!existingFooter) {
        const footerHTML = `
        <footer>
            <div class="wrapper">
                <div class="text-wrapper">
                    <p class="tagline">Designed and coded with love by yours truly. 👩🏻‍💻 © ${new Date().getFullYear()}</p>
                </div>
                <div class="cta-buttons hide">
                    <button id="scrollToProjects-2" class="btn-primary scroll-button">See my work</button>
                    <button class="btn-secondary">View my resume</button>
                </div>
            </div>
        </footer>
        `;

        document.body.insertAdjacentHTML('beforeend', footerHTML);

        const scrollToProjectsButton = document.getElementById('scrollToProjects-2');

        scrollToProjectsButton.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

export default Footer;
