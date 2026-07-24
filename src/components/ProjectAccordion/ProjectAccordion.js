import "./_ProjectAccordion.scss";
import { onReady } from "@js/utils/dom-events";

function initializeAccordion() {
  onReady(() => {
    document.querySelectorAll(".accordion").forEach((accordion) => {
      accordion.addEventListener("click", function () {
        this.classList.toggle("accordion-active");
        const content = this.querySelector(".accordion_content");
        if (this.classList.contains("accordion-active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = 0;
        }
      });
    });
  });
}

export { initializeAccordion };
