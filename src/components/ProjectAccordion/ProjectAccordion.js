import "./_ProjectAccordion.scss";

// Caller (ProjectComponents.js) already runs this inside onReady.
function initializeAccordion() {
  document.querySelectorAll(".accordion").forEach((accordion) => {
    const header = accordion.querySelector(".accordion_header");
    const content = accordion.querySelector(".accordion_content");
    if (!header || !content) return;
    header.addEventListener("click", () => {
      accordion.classList.toggle("accordion-active");
      if (accordion.classList.contains("accordion-active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
}

export { initializeAccordion };
