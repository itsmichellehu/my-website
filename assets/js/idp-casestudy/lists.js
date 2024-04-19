// Function to fill a list with items
function fillList(listId, items) {
    const list = document.getElementById(listId);
    if (list) {
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    } else {
        console.error("Element with id '" + listId + "' not found.");
    }
}

// Data for design audit list items
const boardspaceValueItems = [
    "Navigated the critical user flows",
    "Documented our errors and challenges encountered",
    "Mapped out the user flows"
];

// Fill the design audit list with content
fillList("boardspaceValue", boardspaceValueItems);

// Data for design audit list items
const designAuditListItems = [
    "Navigated the critical user flows",
    "Documented our errors and challenges encountered",
    "Mapped out the user flows"
];

// Fill the design audit list with content
fillList("designAuditList", designAuditListItems);

// Data for design audit polls home items
const designAuditPollsHomeItems = [
    "Indistinct navigation elements",
    "Unclear form validation requirements",
    "Limited customization",
    "Logic error in closing date (no time)"
];

// Fill the design audit polls home list with content
fillList("designAuditPollsHome", designAuditPollsHomeItems);

// Data for design audit polls home items
const designAuditVotingItems = [
    "No indication of exit route"
];

// Fill the design audit polls home list with content
fillList("designAuditVoting", designAuditVotingItems);

// Data for design audit polls home items
const designAuditResultsItems = [
    "Lack of accommodation to user preferences"
];

// Fill the design audit polls home list with content
fillList("designAuditResults", designAuditResultsItems);

//Data for design audit conclusion
const designAuditConclusionItems = [
    "Poor visibility of system status",
    "Limited user control and freedom",
    "Limited visual aesthetic",
    "Inconsistent in design elements",
    "Lack of visual aesthetic design",
    "Insufficient error prevention measures",
    "Mismatch between the system and the real world",
];

// Design audit conclusion
fillList ("designAuditConclusion", designAuditConclusionItems)

const exploringSolutionsItems = [
    "Simple user flow (maximum of 1 to 2 pages)",
    "Variety of answer options, question content, and survey settings",
    "Variety of data visualization",
    "Clean, minimal interface design",
    "Extensive and accessible help and documentation"
]
fillList ("exploringSolutionsList", exploringSolutionsItems)

// Refining the brief new deliverables
const newDeliverablesItems = [
    "Redesign poll feature",
    "Usability test report of redesign",
    "Reiteration recommendations",
    "Presentation of the final report"
]
fillList ("newDeliverables", newDeliverablesItems)

// User flow objectives
const userflowObjectivesItems = [
    "Streamline processes",
    "Increase user control and flexibility",
    "Improve error prevention",
    "Boost competitive value"
    ];
    
fillList("userflowObjectives", userflowObjectivesItems);

// Sketching objectives

const sketchingObjectivesItems = [
    "Improve scannability and navigation",
    "Accommodate different user preferences",
    "Emphasize CTA to increase engagement",
    "Reduce cognitive load"
    ];
    
fillList("sketchingObjectives", sketchingObjectivesItems);