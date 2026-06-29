import "@scss/main.scss";
import "@components/GlobalComponents";

const initBottomScrollLock = () => {
  const sentinel = document.createElement("div");
  sentinel.style.cssText =
    "position:absolute;bottom:0;left:0;height:1px;width:1px;pointer-events:none;";
  document.body.appendChild(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflowY = "";
        document.body.style.paddingRight = "";
      }
    },
    { threshold: 1.0 },
  );

  observer.observe(sentinel);
};

initBottomScrollLock();

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("video.lazy")) {
    import("./lazy-video.js").then(({ default: initLazyVideos }) => {
      initLazyVideos();
    });
  }

  if (document.querySelector(".tabs-container")) {
    import("@components/TabsContainer/TabsContainer.js").then(
      ({ default: initTabsContainers }) => {
        initTabsContainers();
      },
    );
  }
});

const page = document.body.dataset.page;

if (page === "home") import("./index");
if (page === "about") import("./about");
if (page === "tastebuds") import("./tastebuds");
if (page === "postup") import("./postup");
// if (page === "boardspace") import("./boardspace", "@components/ProjectComponents");
