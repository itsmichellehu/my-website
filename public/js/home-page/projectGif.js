document.addEventListener('DOMContentLoaded', function() {
  const gifs = document.querySelectorAll('.project-gif'); // Select all GIFs
  const staticImgs = document.querySelectorAll('.project-static-img'); // Select all static images

  // Function to play the GIF
  window.playGif = function(element) {
    const gif = element.querySelector('.project-gif');
    const staticImg = element.querySelector('.project-static-img');
    const originalGifSrc = gif.src; // Store the original GIF source if not already stored

    gif.style.display = 'block'; // Show the GIF
    staticImg.style.display = 'none'; // Hide the static image
    gif.src = ''; // Force restart of GIF
    gif.src = originalGifSrc; // Restart the GIF by resetting the source
  };

  // Function to reset the GIF
  window.resetGif = function(element) {
    const gif = element.querySelector('.project-gif');
    const staticImg = element.querySelector('.project-static-img');
    const originalGifSrc = gif.src;

    gif.style.display = 'none'; // Hide the GIF
    staticImg.style.display = 'block'; // Show the static image
    gif.src = ''; // Resetting the src attribute helps stop the GIF
    gif.src = originalGifSrc; // Reassign the original GIF source
  };

  // IntersectionObserver to auto-play GIF on smaller screens
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && window.innerWidth < 768) {
        playGif(entry.target);
      } else {
        resetGif(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  // Observe all GIF wrappers
  document.querySelectorAll('.project-gif-wrapper').forEach(wrapper => {
    observer.observe(wrapper);
  });

  // Handle window resize events
  window.addEventListener('resize', function() {
    document.querySelectorAll('.project-gif-wrapper').forEach(wrapper => {
      if (window.innerWidth < 768) {
        observer.observe(wrapper);
      } else {
        observer.unobserve(wrapper);
      }
    });
  });
});
