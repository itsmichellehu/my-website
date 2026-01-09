import "@scss/main.scss";
import "@components/GlobalComponents";

const page = document.body.dataset.page;

if (page === "home") import("./index");
if (page === "about") import("./about");
if (page === "tastebuds") import("./tastebuds");
if (page === "postup") import("./postup");
// if (page === "boardspace") import("./boardspace", "@components/ProjectComponents");
