function scrollToChallenge() {
    if (window.innerWidth < 768) {  // Check if the screen width is less than 768px
        document.getElementById('scrollToChallenge').addEventListener('click', function () {
            const target = document.getElementById('the-challenge');

            const offset = defaultOffset;
            const bodyRect = document.body.getBoundingClientRect().top;
            const targetRect = target.getBoundingClientRect().top;
            const targetPosition = targetRect - bodyRect - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        });
    }
}

export default scrollToChallenge;
