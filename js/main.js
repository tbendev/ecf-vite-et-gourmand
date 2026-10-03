// Sélection des éléments
const burgerToggle = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const navIcons = document.querySelectorAll(".nav-icon");

burgerToggle.addEventListener("click", () => {
    // Affichage navigation
    mainNav.classList.toggle("is-open");

    // Maj RGAA accessibilité
    const isExpanded = burgerToggle.getAttribute("aria-expanded");
    if (isExpanded === "false") {
        burgerToggle.setAttribute("aria-expanded", "true");
    } else {
        burgerToggle.setAttribute("aria-expanded", "false");
    }

    // Alterne les icônes burger / croix
    navIcons.forEach((icon) => {
        icon.toggleAttribute("hidden");
    });
});
