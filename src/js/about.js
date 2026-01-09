import "@pages/about/_index.scss";

import { initializeFaqAccordion } from "@components/FaqAccordion/FaqAccordion";
import ProgressBar from "@components/ProjectProgressBar/ProjectProgressBar";
import "@components/Scrollable/scrollable";
import "@components/ToolboxSwiper/ToolboxSwiper";

document.addEventListener("DOMContentLoaded", () => {
	ProgressBar();

	initializeFaqAccordion();
});
