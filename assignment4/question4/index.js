document.getElementById("changeStyle").addEventListener("click", function() {
    let box = document.getElementById("box");

    // Change styles dynamically
    box.style.backgroundColor = getRandomColor();
    box.style.color = "white";
    box.style.fontSize = "24px";
    box.style.borderRadius = "15px";
    box.style.padding = "20px";
    box.style.border = "3px solid red";
});

// Function to generate random colors
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

