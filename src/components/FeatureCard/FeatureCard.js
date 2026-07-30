import "./_FeatureCard.scss";

const prevArrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"/></svg>`;
const nextArrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"/></svg>`;

function iconMarkup(icon) {
  if (typeof icon === "string" && icon.trim().startsWith("<svg")) {
    return icon;
  }
  return `<img class="feature-card_icon" loading="lazy" alt="" src="${icon}" />`;
}

function cardMarkup(item, index, total) {
  const positionClass =
    index === 0 ? " first-child" : index === total - 1 ? " last-child" : "";
  const body = item.body ? `<p class="feature-card_body">${item.body}</p>` : "";
  return `
		<li class="feature-card${positionClass}">
			<div class="feature-card_icon-wrapper">
				${iconMarkup(item.icon)}
			</div>
			<div class="feature-card_content">
				<p class="feature-card_heading">${item.heading}</p>
				${body}
			</div>
		</li>`;
}

// Swiping is handled natively by CSS scroll-snap on the track (see
// _FeatureCard.scss); JS only wires the optional prev/next buttons, which
// drive the same snap positions. No wheel hijacking — that fought the
// browser's native scroll and caused the carousel to jump.
function wireCarousel(track) {
  const cards = track.querySelectorAll(".feature-card");
  if (cards.length === 0) return;

  const prevButton = track.parentElement?.querySelector(
    "[data-feature-cards-prev]",
  );
  const nextButton = track.parentElement?.querySelector(
    "[data-feature-cards-next]",
  );
  if (!prevButton || !nextButton) return;

  // Per-card stride = distance between adjacent card left edges, so it already
  // includes the flex gap. Falls back to the card's own width for a lone card.
  const cardStride = () =>
    cards.length > 1
      ? cards[1].getBoundingClientRect().left -
        cards[0].getBoundingClientRect().left
      : cards[0].getBoundingClientRect().width;

  // Derive the index from live scroll position so the buttons and any manual
  // swipe share one source of truth (no private counter to drift out of sync).
  const currentIndex = () => Math.round(track.scrollLeft / cardStride());

  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({ left: cardStride() * clamped, behavior: "smooth" });
  };

  const updatePrevOpacity = () => {
    prevButton.style.opacity = track.scrollLeft === 0 ? "0.5" : "1";
  };
  updatePrevOpacity();

  prevButton.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
  nextButton.addEventListener("click", () => scrollToIndex(currentIndex() + 1));
  track.addEventListener("scroll", updatePrevOpacity);
}

// `track` is the <ul class="feature-cards"> authored in the page HTML. We fill
// it with <li> cards in place — the track IS the scroll/snap + layout element.
export function renderFeatureCards(track, items) {
  if (!track || !Array.isArray(items) || items.length === 0) return;

  track.innerHTML = items
    .map((item, i) => cardMarkup(item, i, items.length))
    .join("");

  wireCarousel(track);
}

// Caller (ProjectComponents.js) already runs this inside onReady.
export function initFeatureCards() {
  document.querySelectorAll("[data-feature-cards]").forEach((track) => {
    const raw = track.getAttribute("data-feature-cards");
    if (!raw) return; // empty marker: a page module renders this one
    let items;
    try {
      items = JSON.parse(raw);
    } catch {
      return;
    }
    renderFeatureCards(track, items);
  });
}

export default initFeatureCards;
