const container = document.querySelector(".container");

function addSquare(line) {
    const square = document.createElement("div");
    square.classList.add("square");
    line.appendChild(square);
}

function createLine(){
    const line = document.createElement("div");
    line.classList.add("line");
    for (let i = 0; i < 16; i++) {
        addSquare(line);
    }
    container.appendChild(line);
}

function renderLines() {
    for(let i = 0; i < 16; i++) {
        createLine();
    }
}

renderLines();