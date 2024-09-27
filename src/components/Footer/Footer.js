function Footer() {
    const existingFooter = document.querySelector('footer');
    if (!existingFooter) {
        const footerHTML = `
        <footer>
            <div class="wrapper">
            <div class="text-wrapper">
                    <p class="headline">Let's make a difference together.</p>
                    <div class="hero-buttons-compact-wrapper">
                                    <div class="social-link">
                                        <a href="wwww.linkedin.com/in/itsmichellehu" target="_blank"
                                            rel="noopener noreferrer">
                                            <p>Connect on LinkedIn</p>
                                        </a>
                                    </div>
                                    <div class="social-link">
                                        <a href="assets/files/MichelleHuResume.pdf" target="_blank"
                                            rel="noopener noreferrer">
                                            <p>View my Resume</p>
                                        </a>
                                    </div>
                                </div>
                    <p class="tagline">Designed and coded with love by yours truly. 👩🏻‍💻 <br>
                    </p>
                    <p class="copyright-text">Michelle Hu © ${new Date().getFullYear()}</p>
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
