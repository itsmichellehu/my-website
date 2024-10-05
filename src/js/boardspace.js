import '../scss/boardspace.scss';
import '../components/GlobalComponents';
import '../components/ProjectComponents';

import '../components/lists';
import '../components/wrappedList';
import '../components/showFullImage';
import '../components/table';

import { initializeBoardspaceAccordion } from "../components/BoardspaceAccordion/BoardspaceAccordion";

document.addEventListener('DOMContentLoaded', () => {
    initializeBoardspaceAccordion();
});


function initializeBoardspacePage() {
    // Your code to initialize the post up page goes here
    console.log("Boardspace Page Initialized!");
}

initializeBoardspacePage();
