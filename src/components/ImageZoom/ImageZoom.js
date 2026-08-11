import "./_ImageZoom.scss";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const DOUBLE_TAP_MS = 300;
const DOUBLE_TAP_SCALE = 2.5;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

// The browser restores focus on its own for Esc and light-dismiss, but not
// when script hides the popover: focus falls to <body> and a keyboard user
// loses their place on the page. Every scripted close path routes through here.
function dismiss(popover) {
  const trigger = document.querySelector(`[popovertarget="${popover.id}"]`);
  popover.hidePopover();
  if (trigger) trigger.focus();
}

// Escape alone isn't a discoverable way out, and on touch there is no Esc key
// at all. Added here rather than in buildZoomMarkup so hand-authored popovers
// get one too.
function addCloseButton(popover) {
  if (popover.querySelector(".img-zoom-close")) return;

  const close = document.createElement("button");
  close.type = "button";
  close.className = "img-zoom-close";
  close.setAttribute("aria-label", "Close image");
  // The glyph carries no meaning for a screen reader; the label above does.
  close.innerHTML = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_67887_320)"><path d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="#1F1F1F"/></g><defs><clipPath id="clip0_67887_320"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>';
  close.addEventListener("click", () => dismiss(popover));
  popover.appendChild(close);
}

// Wires pinch/drag/double-tap onto one popover image. Transform state lives
// here so each popover keeps its own zoom independently.
function attachZoom(popover, image) {
  addCloseButton(popover);

  const pointers = new Map();

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let panStartX = 0;
  let panStartY = 0;
  let lastTapTime = 0;

  // Untransformed geometry, measured once per gesture instead of per move.
  // Reading layout inside pointermove forces a sync reflow on every event,
  // which is what makes a pinch feel choppy.
  let baseWidth = 0;
  let baseHeight = 0;
  let baseCenterX = 0;
  let baseCenterY = 0;
  let frame = 0;

  const measure = () => {
    const previous = image.style.transform;
    image.style.transform = "none";
    const rect = image.getBoundingClientRect();
    baseWidth = rect.width;
    baseHeight = rect.height;
    baseCenterX = rect.left + rect.width / 2;
    baseCenterY = rect.top + rect.height / 2;
    image.style.transform = previous;
  };

  const paint = () => {
    frame = 0;
    image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
  };

  // Coalesce writes onto one paint per frame; pointer events outrun the
  // display, so writing per event just queues work the compositor discards.
  const render = () => {
    image.classList.toggle("is-zoomed", scale > MIN_SCALE);
    if (!frame) frame = requestAnimationFrame(paint);
  };

  const renderNow = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    image.classList.toggle("is-zoomed", scale > MIN_SCALE);
    paint();
  };

  const reset = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    pointers.clear();
    image.style.transition = "";
    renderNow();
  };

  // Keep the image overlapping its frame: at scale 1 there is no slack, so
  // translation is pinned to 0 and the image can never be dragged offscreen.
  // Derived from the cached base size, so no layout read here.
  const constrainPan = () => {
    const slackX = Math.max(0, (baseWidth * scale - baseWidth) / 2);
    const slackY = Math.max(0, (baseHeight * scale - baseHeight) / 2);
    translateX = clamp(translateX, -slackX, slackX);
    translateY = clamp(translateY, -slackY, slackY);
  };

  // Zoom around a fixed screen point so the pixel under the fingers/cursor
  // stays put, rather than the image sliding out from under them.
  const zoomToPoint = (nextScale, clientX, clientY) => {
    const originX = clientX - baseCenterX;
    const originY = clientY - baseCenterY;
    const ratio = nextScale / scale;

    translateX = originX - (originX - translateX) * ratio;
    translateY = originY - (originY - translateY) * ratio;
    scale = nextScale;

    constrainPan();
    render();
  };

  const handleDoubleTap = (clientX, clientY) => {
    image.style.transition = "transform 200ms ease-out";
    if (scale > MIN_SCALE) {
      scale = 1;
      translateX = 0;
      translateY = 0;
      renderNow();
    } else {
      zoomToPoint(DOUBLE_TAP_SCALE, clientX, clientY);
      renderNow();
    }
    setTimeout(() => {
      image.style.transition = "";
    }, 200);
  };

  image.addEventListener("pointerdown", (event) => {
    image.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchStartDistance = distance(a, b);
      pinchStartScale = scale;
      return;
    }

    const now = event.timeStamp;
    if (now - lastTapTime < DOUBLE_TAP_MS) {
      handleDoubleTap(event.clientX, event.clientY);
      lastTapTime = 0;
      return;
    }
    lastTapTime = now;

    panStartX = event.clientX - translateX;
    panStartY = event.clientY - translateY;
  });

  image.addEventListener("pointermove", (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const center = midpoint(a, b);
      const nextScale = clamp(
        (distance(a, b) / pinchStartDistance) * pinchStartScale,
        MIN_SCALE,
        MAX_SCALE,
      );
      zoomToPoint(nextScale, center.x, center.y);
      return;
    }

    // Below 1x there is nothing to pan; let the tap/close behaviour win.
    if (scale <= MIN_SCALE) return;

    translateX = event.clientX - panStartX;
    translateY = event.clientY - panStartY;
    constrainPan();
    render();
  });

  const releasePointer = (event) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) {
      pinchStartDistance = 0;
      pinchStartScale = scale;
    }
    if (pointers.size === 0 && scale <= MIN_SCALE) reset();
  };

  image.addEventListener("pointerup", releasePointer);
  image.addEventListener("pointercancel", releasePointer);

  image.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const nextScale = clamp(
        scale * (event.deltaY < 0 ? 1.15 : 1 / 1.15),
        MIN_SCALE,
        MAX_SCALE,
      );
      zoomToPoint(nextScale, event.clientX, event.clientY);
      if (scale === MIN_SCALE) reset();
    },
    { passive: false },
  );

  // Unzoomed, the image reads as click-to-close (cursor: zoom-out). Zoomed, it
  // absorbs the click so panning doesn't dismiss the lightbox on pointerup.
  image.addEventListener("click", (event) => {
    if (scale > MIN_SCALE) {
      event.stopPropagation();
      return;
    }
    dismiss(popover);
  });

  // Click anywhere outside the image to dismiss. Native light-dismiss only
  // fires on the backdrop, and the popover box fills the viewport, so the
  // margin around the image would otherwise swallow the click.
  popover.addEventListener("click", (event) => {
    if (event.target === popover) dismiss(popover);
  });

  // Every pointer gesture above needs a keyboard equivalent, otherwise a
  // keyboard-only user can open the lightbox but never zoom or pan it.
  // tabindex="-1" keeps the image out of the Tab order while still allowing
  // focus(), so Tab reaches the close button rather than the image.
  image.tabIndex = -1;
  if (!image.getAttribute("role")) image.setAttribute("role", "img");

  const PAN_STEP = 60;
  const KEY_ZOOM_STEP = 1.25;

  image.addEventListener("keydown", (event) => {
    const nudge = (dx, dy) => {
      // Panning below 1x is meaningless: constrainPan pins translation to 0.
      if (scale <= MIN_SCALE) return false;
      translateX += dx;
      translateY += dy;
      constrainPan();
      render();
      return true;
    };

    // Zoom around the viewport centre; there is no cursor to anchor to.
    const centre = () => [window.innerWidth / 2, window.innerHeight / 2];

    switch (event.key) {
      case "+":
      case "=":
        zoomToPoint(
          clamp(scale * KEY_ZOOM_STEP, MIN_SCALE, MAX_SCALE),
          ...centre(),
        );
        break;
      case "-":
      case "_":
        zoomToPoint(
          clamp(scale / KEY_ZOOM_STEP, MIN_SCALE, MAX_SCALE),
          ...centre(),
        );
        if (scale === MIN_SCALE) reset();
        break;
      case "0":
        reset();
        break;
      case "ArrowLeft":
        if (!nudge(PAN_STEP, 0)) return;
        break;
      case "ArrowRight":
        if (!nudge(-PAN_STEP, 0)) return;
        break;
      case "ArrowUp":
        if (!nudge(0, PAN_STEP)) return;
        break;
      case "ArrowDown":
        if (!nudge(0, -PAN_STEP)) return;
        break;
      default:
        return;
    }
    // Only reached when a key was handled, so arrows don't scroll the page
    // behind the lightbox and "0"/"+" don't leak to the document.
    event.preventDefault();
  });

  popover.addEventListener("toggle", (event) => {
    if (event.newState === "closed") {
      reset();
      window.removeEventListener("resize", measure);
      return;
    }
    // Geometry is only knowable once the popover is laid out.
    measure();
    window.addEventListener("resize", measure);
    // Focus the image, not the close button, so the zoom/pan keys work
    // immediately. Tab still reaches Close as the next stop.
    image.focus();
  });

  render();
}

let autoId = 0;

// Builds the button + popover pair around a plain `<img class="zoomable">` so
// pages don't hand-repeat the boilerplate. The image keeps its place in the
// layout: the button replaces it inline and the img moves inside.
function buildZoomMarkup(image) {
  const id = image.id ? `zoom-${image.id}` : `zoom-auto-${(autoId += 1)}`;
  // `alt` describes the image; `data-zoom-label` is the shorter button phrasing.
  // Keep them distinct so the enlarged view isn't reduced to the button label.
  const description = image.alt;
  const label = image.dataset.zoomLabel || description;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "img-zoomable";
  trigger.setAttribute("popovertarget", id);
  trigger.setAttribute(
    "aria-label",
    label ? `Enlarge ${label}` : "Enlarge image",
  );

  // Preserve any layout/background classes the author put on the image.
  if (image.dataset.zoomTriggerClass) {
    trigger.classList.add(
      ...image.dataset.zoomTriggerClass.split(/\s+/).filter(Boolean),
    );
  }

  const popover = document.createElement("div");
  popover.className = "img-zoom-popover";
  popover.id = id;
  popover.setAttribute("popover", "");

  const full = document.createElement("img");
  full.src = image.currentSrc || image.src;
  if (image.srcset) full.srcset = image.srcset;
  if (image.sizes) full.sizes = image.sizes;
  full.alt = description || label || "";

  image.replaceWith(trigger);
  trigger.appendChild(image);
  // The thumbnail is decorative once the button carries the label.
  image.alt = "";
  trigger.after(popover);
  popover.appendChild(full);

  return { popover, full };
}

export function initImageZoom() {
  document.querySelectorAll("img.zoomable").forEach((image) => {
    if (image.closest(".img-zoomable") || image.dataset.zoomReady === "true")
      return;
    image.dataset.zoomReady = "true";
    const { popover, full } = buildZoomMarkup(image);
    popover.dataset.zoomReady = "true";
    attachZoom(popover, full);
  });

  // Hand-authored markup (tastebuds affinity maps) still works as-is.
  document.querySelectorAll(".img-zoom-popover").forEach((popover) => {
    const image = popover.querySelector("img");
    if (!image || popover.dataset.zoomReady === "true") return;
    popover.dataset.zoomReady = "true";
    attachZoom(popover, image);
  });
}

export default initImageZoom;
