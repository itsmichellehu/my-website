function NavBar() {
    const navbarHTML = `
        <nav id="navbar" class="navbar default-nav-color">
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="navbar-logo-wrapper show-sm-flex">
                    <a href="/"><img src="assets/svg/home/logo-mhu-black.svg" class="navbar-logo-image" alt="Logo" /></a>
                </div>
                <ul class="navbar-menu" id="menu">
                    <li class="nav-item"><a href="/">Work</a></li>
                    <li class="nav-item"><a href="/about">About</a></li>
                    <li class="nav-item"><a href="assets/files/MichelleHuResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li class="nav-item hide-sm"><a href="www.linkedin.com/in/itsmichellehu" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li class="nav-item"><a href="mailto:mhu.contact@gmail.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    if (!document.getElementById("navbar")) {
        document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    }

    window.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;

        navbar.style.transition = "top 0.3s ease, opacity 0.3s ease";

        const getNavbarHeight = () => (window.innerWidth >= 768 ? 64 : 48);

        const throttle = (func, limit) => {
            let lastFunc;
            let lastRan;
            return function () {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                    func.apply(context, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= limit) {
                            func.apply(context, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        };

        const handleScroll = throttle(() => {
            const navbarHeight = getNavbarHeight();

            if (window.scrollY <= 5) {
                navbar.classList.remove("navbar-hidden");
            } else if (window.scrollY > lastScrollY) {
                navbar.classList.add("navbar-hidden");
            } else if (window.scrollY < lastScrollY) {
                navbar.classList.remove("navbar-hidden");
            }

            lastScrollY = window.scrollY;
        }, 100);

        window.addEventListener("scroll", handleScroll);

        const setActiveNavItem = () => {
            const navItems = document.querySelectorAll(".nav-item a");
            navItems.forEach((navItem) => {
                if (navItem.href === window.location.href) {
                    navItem.parentElement.classList.add("active");
                }
            });
        };

        setActiveNavItem();
    });
}

export default NavBar;
