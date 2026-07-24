import "./_FeatureCard.scss";
import { onReady } from "@js/utils/dom-events";

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

function wireCarousel(wrapper, grid) {
  const cards = grid.querySelectorAll(".feature-card");
  if (cards.length === 0) return;

  let currentIndex = 0;
  const handleWheel = (event) => {
    const atStart = currentIndex === 0;
    const atEnd = currentIndex === cards.length - 1;
    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
      return; // let the page scroll normally once the carousel has no more room
    }
    event.preventDefault();
    const cardWidth = cards[0].getBoundingClientRect().width;
    currentIndex =
      event.deltaY > 0
        ? Math.min(currentIndex + 1, cards.length - 1)
        : Math.max(currentIndex - 1, 0);
    wrapper.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
  };
  wrapper.addEventListener("wheel", handleWheel, { passive: false });

  const prevButton = wrapper.parentElement?.querySelector(
    "[data-feature-cards-prev]",
  );
  const nextButton = wrapper.parentElement?.querySelector(
    "[data-feature-cards-next]",
  );
  if (!prevButton || !nextButton) return;

  const updatePrevOpacity = () => {
    prevButton.style.opacity = wrapper.scrollLeft === 0 ? "0.5" : "1";
  };
  updatePrevOpacity();

  prevButton.addEventListener("click", () => {
    wrapper.scrollBy({ left: -wrapper.clientWidth, behavior: "smooth" });
  });
  nextButton.addEventListener("click", () => {
    wrapper.scrollBy({ left: wrapper.clientWidth, behavior: "smooth" });
  });
  wrapper.addEventListener("scroll", updatePrevOpacity);
}

export function renderFeatureCards(wrapper, items) {
  if (!wrapper || !Array.isArray(items) || items.length === 0) return;

  const grid = document.createElement("ul");
  grid.className = "feature-card-grid";
  grid.innerHTML = items
    .map((item, i) => cardMarkup(item, i, items.length))
    .join("");

  wrapper.innerHTML = "";
  wrapper.appendChild(grid);
  wireCarousel(wrapper, grid);
}

export function initFeatureCards() {
  onReady(() => {
    document.querySelectorAll("[data-feature-cards]").forEach((wrapper) => {
      const raw = wrapper.getAttribute("data-feature-cards");
      if (!raw) return; // empty marker: a page module renders this one
      let items;
      try {
        items = JSON.parse(raw);
      } catch {
        return;
      }
      renderFeatureCards(wrapper, items);
    });
  });
}

export default initFeatureCards;
