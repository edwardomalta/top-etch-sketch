const container = document.querySelector(".container");

function addSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

for (let i = 0; i < 16; i++) {
    addSquare();
}