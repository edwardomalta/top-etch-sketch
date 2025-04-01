const container = document.querySelector(".container");
let SQUARES_PER_SIDE = 16;

function ask() {
    let number_of_squares = prompt("How much squares: ", 16)
    if (number_of_squares > 100 ) number_of_squares = 100;
    SQUARES_PER_SIDE = number_of_squares;
    renderLines();
}

function addSquare(line) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", (e) => {
        const sqr = e.target;
        sqr.style.backgroundColor = "blue";
    });
    square.classList.add("square");
    line.appendChild(square);
}

function createLine(){
    const line = document.createElement("div");
    line.classList.add("line");
    for (let i = 0; i < SQUARES_PER_SIDE; i++) {
        addSquare(line);
    }
    container.appendChild(line);
}

function clearContainer() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function renderLines() {
    clearContainer();
    for(let i = 0; i < SQUARES_PER_SIDE; i++) {
        createLine();
    }
}

renderLines();