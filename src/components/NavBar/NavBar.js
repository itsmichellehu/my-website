function NavBar() {
    const navbarHTML = `
        <nav id="navbar" class="navbar default-nav-color">
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="navbar-logo-wrapper show-sm-flex"><a href="/"><img src="assets/svg/home/logo-mhu-black.svg" class="navbar-logo-image" alt="Logo" /></a>

                </div>
                <ul class="navbar-menu" id="menu">
                    <li class="nav-item"><a href="/">Work</a></li>
                    <li class="nav-item"><a href="/about">About</a></li>
                    <li class="nav-item"><a href="/MichelleHuResume.pdf" target="_blank">Resume</a>
</li>
                    <li class="nav-item hide-sm"><a href="www.linkedin.com/in/itsmichellehu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</li>
                    <li class="nav-item"><a href="mailto:mhu.contact@gmail.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Check if the navbar already exists before inserting it
    if (!document.getElementById('navbar')) {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    // Ensure the classes are applied after the DOM is fully loaded and the HTML is inserted
    window.addEventListener('DOMContentLoaded', () => {
        //         const menu = document.getElementById('menu');
        //         const menuIcon = document.querySelector('.menu-icon');
        //         const menuToggle = document.querySelector('.navbar-menu-toggle');
        //
        //         function toggleMenu() {
        //             menu.classList.toggle('show-menu');
        //         }
        //
        //         menuIcon.addEventListener('click', function (event) {
        //             event.stopPropagation(); // Prevent document click event from closing the menu
        //             toggleMenu();
        //         });
        //
        //         document.addEventListener('click', function (event) {
        //             if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        //                 menu.classList.remove('show-menu');
        //             }
        //         });
        //
        //         menuToggle.addEventListener('click', function (event) {
        //             event.stopPropagation(); // Prevent document click event from closing the menu
        //             toggleMenu();
        //         });
        //
        //         document.addEventListener('click', function (event) {
        //             if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        //                 menu.classList.remove('show-menu');
        //             }
        //         });

        // Set active class based on current URL
        const navItems = document.querySelectorAll('.nav-item a');
        navItems.forEach((navItem) => {
            if (navItem.href === window.location.href) {
                navItem.parentElement.classList.add('active');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.getElementById('navbar');
        document.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled-navbar');

            } else {
                navbar.classList.remove('scrolled-navbar');
            }
        });
    });
}

export default NavBar;
