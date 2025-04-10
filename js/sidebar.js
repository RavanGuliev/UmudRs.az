const sidebar = document.getElementById("sidebar");
const body = document.body;

function opensidebar() {
    sidebar.classList.toggle("hidden");

    if (!sidebar.classList.contains("hidden")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}