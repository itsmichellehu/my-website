function Footer() {
    const existingFooter = document.querySelector("footer");
    if (!existingFooter) {
        const footerHTML = `
    <footer>
        <div class="wrapper">
            <p class="headline">Let's make a difference together.</p>
            <div>
                <div class="social-links-wrapper">
                    <div class="social-link">
                        <a href="https://www.linkedin.com/in/itsmichellehu" target="_blank"
                            rel="noopener noreferrer">
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div class="social-link">
                        <a href="assets/files/MichelleHuResume.pdf" target="_blank"
                            rel="noopener noreferrer">
                            <p>Resume</p>
                        </a>
                    </div>
                    <div class="social-link mobile-only">
                        <a href="mailto:mhu.contact@gmail.com" target="_blank"
                            rel="noopener noreferrer">
                            <p>Email me</p>
                        </a>
                    </div>
                    <div class="social-link last-child">
                        <a href="about" target=""
                            rel="noopener noreferrer">
                            <p>About me</p>
                        </a>
                    </div>
                    </div>
                    <div>
                    <p  class="email-link"><span class="email-link-text">mhu.contact@gmail.com</span> <span class="text-decoration-none">✉️</span></p>
                    </div>
                <p class="tagline">Designed and coded with love by yours truly.</p>
                <p class="copyright-text">Michelle Hu © 2024</p>
            </div>
            <div class="cta-buttons hide">
                <button id="scrollToProjects-2" class="btn-primary scroll-button">See my
                    work</button>
                <button class="btn-secondary">View my resume</button>
            </div>
        </div>
    </footer>
`;

        document.body.insertAdjacentHTML("beforeend", footerHTML);

        const scrollToProjectsButton = document.getElementById("scrollToProjects-2");

        scrollToProjectsButton.addEventListener("click", () => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

export default Footer;
