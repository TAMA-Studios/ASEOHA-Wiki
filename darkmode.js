document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return; // Prevent errors if element is missing

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("main-page-div-bottom")?.classList.add("dark-mode");
        document.getElementById("main-page-div")?.classList.add("dark-mode");
        document.getElementById("sidebar")?.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", toggle.checked);
        document.getElementById("main-page-div-bottom")?.classList.toggle("dark-mode", toggle.checked);
        document.getElementById("main-page-div")?.classList.toggle("dark-mode", toggle.checked);
        document.getElementById("sidebar")?.classList.toggle("dark-mode", toggle.checked);

        localStorage.setItem("darkMode", toggle.checked ? "enabled" : "disabled");
    });
});
