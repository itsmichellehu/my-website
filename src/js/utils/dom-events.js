// Shared helpers for performant DOM event handling.

/**
 * Coalesce a high-frequency event (scroll, resize) onto animation frames so the
 * callback runs at most once per frame. Returns an unsubscribe function.
 *
 * @param {EventTarget} target - element/window to listen on
 * @param {string} type - event name, e.g. "scroll" or "resize"
 * @param {(event: Event) => void} callback
 * @param {AddEventListenerOptions} [options]
 * @returns {() => void} cleanup function that removes the listener
 */
export function onAnimationFrame(target, type, callback, options = { passive: true }) {
	let ticking = false;
	let lastEvent = null;

	const listener = (event) => {
		lastEvent = event;
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(() => {
			ticking = false;
			callback(lastEvent);
		});
	};

	target.addEventListener(type, listener, options);
	return () => target.removeEventListener(type, listener, options);
}

/**
 * Classic trailing throttle: invoke `func` at most once per `limit` ms.
 */
export function throttle(func, limit = 100) {
	let inThrottle = false;
	let lastArgs = null;
	return function throttled(...args) {
		if (inThrottle) {
			lastArgs = args;
			return;
		}
		func.apply(this, args);
		inThrottle = true;
		setTimeout(() => {
			inThrottle = false;
			if (lastArgs) {
				throttled.apply(this, lastArgs);
				lastArgs = null;
			}
		}, limit);
	};
}

/**
 * Debounce: invoke `func` only after `wait` ms have passed without a new call.
 */
export function debounce(func, wait = 150) {
	let timeout;
	return function debounced(...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), wait);
	};
}
