var menu = document.getElementById("menu");
var menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
    menu.classList.toggle("show-menu");
}

menuIcon.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent document click event from closing the menu
    toggleMenu();
});

document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("show-menu");
    }
});

var menu = document.getElementById("menu");
var menuToggle = document.querySelector(".menu-toggle");

function toggleMenu() {
    menu.classList.toggle("show-menu");
}

menuToggle.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent document click event from closing the menu
    toggleMenu();
});

document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("show-menu");
    }
});
