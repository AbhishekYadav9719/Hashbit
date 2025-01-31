let count = 0;
const container = document.getElementById("container");
const button = document.getElementById("addDiv");

button.addEventListener("click", () => {
    count++;
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.textContent = `Div ${count}`;
    newDiv.style.backgroundColor = getRandomColor();
    
    // Remove div on click
    newDiv.addEventListener("click", () => newDiv.remove());

    container.appendChild(newDiv);
});

// Function to generate a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
