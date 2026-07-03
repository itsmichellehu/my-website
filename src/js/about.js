import "@pages/about/_index.scss";

import { initializeFaqAccordion } from "@components/FaqAccordion/FaqAccordion";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";

document.addEventListener("DOMContentLoaded", () => {
  ProgressBar();

  initializeFaqAccordion();
});
