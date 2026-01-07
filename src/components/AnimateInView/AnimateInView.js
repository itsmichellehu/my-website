import "./AnimateInView.scss";

export async function AnimateInView({ classAnimationMap, threshold = 0.1, rootMargin = "0px" } = {}) {

	const classes = Object.keys(classAnimationMap);
	const selector = classes.map((cls) => `.${cls}`).join(",");
	const elements = Array.from(document.querySelectorAll(selector));

	// Add pre-animation class and create a map for faster lookups
	const classMap = new Map(classes.map((cls) => [cls, classAnimationMap[cls]]));
	elements.forEach((el) => el.classList.add("pre-animation"));

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Find matching class
					const targetClass = classes.find((cls) => entry.target.classList.contains(cls));
					const animationClass = classMap.get(targetClass);

					if (animationClass) {
						entry.target.classList.remove("pre-animation");
						entry.target.classList.add("animate__animated", animationClass);
						observer.unobserve(entry.target);
					}
				}
			});
		},
		{ threshold, rootMargin }
	);

	elements.forEach((el) => observer.observe(el));
}
