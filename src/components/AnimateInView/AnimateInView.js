import 'intersection-observer'; // Polyfill to ensure Intersection Observer support in older browsers

export function AnimateInView({ classAnimationMap, threshold = 0.1, rootMargin = '0px' } = {}) {
  // Collect all elements matching the classes in the map
  const elements = [].concat(...Object.keys(classAnimationMap)
    .map(cls => Array.from(document.querySelectorAll(`.${cls}`)))); // Flatten NodeLists into a single array

  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find the appropriate animation based on the class of the target element
        const targetClass = Object.keys(classAnimationMap).find(cls => entry.target.classList.contains(cls));
        const animationClass = classAnimationMap[targetClass];

        // Add the appropriate Animate.css classes
        if (animationClass) {
          entry.target.classList.add('animate__animated', animationClass);
          entry.target.style.opacity = 1; // Ensure the element becomes visible
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      }
    });
  }, {
    threshold, // Visibility threshold to trigger animation
    rootMargin // Optional margin to trigger the animation earlier or later
  });

  // Set the opacity of each element to 0 and start observing it
  elements.forEach(element => {
    element.style.opacity = 0; // Start hidden by default
    observer.observe(element);
  });
}