// src/js/lazy-video.js
export default function initLazyVideos() {
	const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

	// Pre-size videos so posters match the final video size
	// Use data-width/data-height on the <video> element when available
	lazyVideos.forEach((video) => {
		const w = parseInt(video.dataset.width, 10);
		const h = parseInt(video.dataset.height, 10);
		if (w && h && !Number.isNaN(w) && !Number.isNaN(h)) {
			video.style.aspectRatio = `${w} / ${h}`;
			if (!video.style.width) video.style.width = "100%";
			if (!video.style.height) video.style.height = "auto";
		}
	});

	if ("IntersectionObserver" in window) {
		const lazyVideoObserver = new IntersectionObserver(
			(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const video = entry.target;
					const sources = video.querySelectorAll("source");

					sources.forEach((source) => {
						source.src = source.dataset.src;
					});

					video.load();

					// After metadata is available, lock in the actual aspect ratio
					video.addEventListener(
						"loadedmetadata",
						() => {
							const vw = video.videoWidth;
							const vh = video.videoHeight;
							if (vw && vh) {
								video.style.aspectRatio = `${vw} / ${vh}`;
							}
						},
						{ once: true }
					);
					video.classList.remove("lazy");
					lazyVideoObserver.unobserve(video);
				}
			});
			},
			// Start loading just before the video scrolls into view so playback
			// is ready by the time it's visible.
			{ rootMargin: "200px 0px" }
		);

		lazyVideos.forEach((lazyVideo) => {
			lazyVideoObserver.observe(lazyVideo);
		});
	}
}