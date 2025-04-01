const container = document.querySelector(".container");

function addSquare(line) {
    const square = document.createElement("div");
    square.classList.add("square");
    line.appendChild(square);
}

function createLine(){
    const line = document.createElement("div");
    for (let i = 0; i < 16; i++) {
        addSquare(line);
    }
    container.appendChild(line);
}

createLine();