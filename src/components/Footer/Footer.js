import { AnimateInView } from "@components/AnimateInView/AnimateInView";
import "./_Footer.scss";

const classAnimationMap = {
	"fade-in": "animate__fadeIn",
	"fade-in-right": "animate__fadeInRight",
	"fade-in-left": "animate__fadeInLeft",
	"slide-up": "animate__slideInUp",
	"bounce-in": "animate__bounceIn",
};

function Footer() {
	const existingFooter = document.querySelector("footer");
	if (existingFooter) return;

	const footerHTML = `
	<footer id="footer">
	<div class="wrapper">
		<p class="headline fadeInLeft_inView">Let's make a difference together.</p>
		<div class="fadeInRight_inView">
			<div class="social-links-wrapper">
				<a href="about" class="anchor-link">About me</a>
				<a href="https://www.linkedin.com/in/itsmichellehu" target="_blank" rel="noopener noreferrer" class="anchor-link mobile-only">LinkedIn</a>
				<a href="assets/files/MichelleHuResume.pdf" target="_blank" rel="noopener noreferrer" class="anchor-link">Resume</a>
				<a href="mailto:mhu.contact@gmail.com" target="_blank" rel="noopener noreferrer" class="anchor-link mobile-only">Email me</a>
				<div class="email-link-wrapper">
					<a href="mailto:hello@michellehu.com" class="email-link">hello@michellehu.com</a>
					<span class="text-decoration-none">✉️</span>
				</div>
			</div>
			<p class="tagline">Designed and coded with love by yours truly.</p>
			<p class="copyright-text">Michelle Hu © 2026</p>
			<div class="cta-buttons hide" aria-hidden="true">
				<button id="scrollToProjects" class="btn-primary scroll-button">
					See my work
				</button>
				<button class="btn-secondary">View my resume</button>
			</div>
		</div>
	</div>
</footer>
  `;

	// Insert footer before main
	const main = document.querySelector("main");

	if (main) {
		main.insertAdjacentHTML("afterend", footerHTML);
	} else {
		document.body.insertAdjacentHTML("beforeend", footerHTML);
	}

	// Scroll handler
	const scrollToProjectsButton = document.getElementById("scrollToProjects");
	if (scrollToProjectsButton) {
		scrollToProjectsButton.addEventListener("click", () => {
			const projectsSection = document.getElementById("projects");
			if (projectsSection) {
				projectsSection.scrollIntoView({ behavior: "smooth" });
			}
		});
	}

	// Run animations immediately
	AnimateInView({ classAnimationMap });
}

export default Footer;
