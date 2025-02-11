
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("collapsed");
        const links = sidebar.querySelectorAll("h2, a");
        links.forEach(link => link.style.opacity = sidebar.classList.contains("collapsed") ? "0" : "1");
    }