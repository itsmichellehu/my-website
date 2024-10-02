function ScrollToSection() {
    // Find all elements with the scroll trigger attribute
    const scrollButtons = document.querySelectorAll('[data-scroll-target]');

    // Add click event listener to each scroll trigger
    scrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the target section from the button's data attribute
            const targetId = button.getAttribute('data-scroll-target');
            const target = document.getElementById(targetId);

            if (!target) {
                console.warn(`Target section with ID "${targetId}" not found.`);
                return;
            }

            // Get the offset from data attribute or default to 0
            const offsetAttr = button.getAttribute('data-offset');
            const offset = offsetAttr ? parseInt(offsetAttr, 10) : 0;
            if (isNaN(offset)) {
                console.warn(`Invalid offset value for button with target "${targetId}". Defaulting to 0.`);
                offset = 0;
            }
            const bodyRect = document.body.getBoundingClientRect().top;
            const targetRect = target.getBoundingClientRect().top;
            const targetPosition = targetRect - bodyRect - offset;

            // Smooth scroll to the target section
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        });
    });
}

export default ScrollToSection;