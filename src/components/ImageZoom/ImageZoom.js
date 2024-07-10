document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-zoomable').forEach(image => {
        image.addEventListener('click', () => {
            // Toggle the 'img-zoomed' class on click
            image.classList.toggle('img-zoomed');
        });
    });
});