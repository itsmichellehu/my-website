function NavBarBackground() {
    document.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        const viewportWidth = window.innerWidth;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navbar.style.backgroundColor = 'white';

        if (currentSection === 'hero') {
            navbar.style.backgroundColor = 'transparent';
        }
    });
}

export default NavBarBackground;
