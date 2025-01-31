document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("toggleBtn");
    let paragraph = document.getElementById("myPara");

    button.addEventListener("click", function() {
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
            button.textContent = "Hide";
        } else {
            paragraph.style.display = "none";
            button.textContent = "Show";
        }
    });
});
