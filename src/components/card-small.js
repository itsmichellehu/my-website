import { throttle } from "@js/utils/dom-events.js";

// Export the breakpoints object
export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  sm: 576,
  med: 768,
  lg: 992,
  xl: 1200,
};

// All card icons share a single throttled resize listener instead of each card
// registering its own (which previously leaked one listener per card).
const cardIcons = [];

const sizeIcon = (img) => {
  if (window.innerWidth >= breakpoints.med) {
    img.className = "iconSize-med";
  } else if (window.innerWidth >= breakpoints.mobileM) {
    img.className = "iconSize-sm";
  }
};

let resizeListenerAttached = false;
function ensureResizeListener() {
  if (resizeListenerAttached) return;
  resizeListenerAttached = true;
  window.addEventListener(
    "resize",
    throttle(() => cardIcons.forEach(sizeIcon), 150)
  );
}

// Export the cardSmall function
export function cardSmall(iconSrc, iconSize, headline, containerSelector = '.values-grid') {
  const cardContainer = document.querySelector(containerSelector);

  const cardElement = document.createElement('div');
  cardElement.className = 'values-grid-item'; // Class name only, no dot

  const img = document.createElement('img');
  img.className = `iconSize-${iconSize}`;
  img.src = iconSrc;
  img.style.alignSelf = "center";
  cardElement.appendChild(img);

  const p = document.createElement('p');
  p.className = 'card_headline';
  p.textContent = headline;
  cardElement.appendChild(p);

  cardContainer.appendChild(cardElement);

  // Size this icon now, then let the shared resize listener keep it in sync.
  sizeIcon(img);
  cardIcons.push(img);
  ensureResizeListener();
}
