
import ProgressBar from '../components/ProjectProgressBar/ProjectProgressBar';

import { initializeAccordion } from '../components/ProjectAccordion/ProjectAccordion';
import initializeTabs from '../components/TabsContainer/TabsContainer';
import enableImageZoom from '../components/ImageZoom/ImageZoom';

document.addEventListener('DOMContentLoaded', function () {
    ProgressBar();

    initializeAccordion();
    enableImageZoom();
    initializeTabs();
});