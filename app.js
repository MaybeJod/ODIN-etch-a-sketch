// variables
const grid = document.querySelector(".grid");
const resetBtn = document.querySelector("#reset");

// slider for grid size
let slider = document.querySelector("#sliderValue");
let output = document.querySelector("#displaySliderValue");
output.innerHTML = slider.value;

// get value from slider to use for createGrid
slider.oninput = function() {
    output.innerHTML = this.value;
    resetGrid();
    changeGridSize();
}

createGrid(slider.value);

function createGrid(gridSize) {
    //creates the grid with gridSize parameter
    grid.style.cssText =
        `grid-template-columns: repeat(${gridSize}, 1fr); ` 
        + `grid-template-rows: repeat(${gridSize}, 1fr); ` 
        + `border: 5px solid #000000;`
        + `border-radius: 12px;`;

    // square the grid
    const numberOfCells = gridSize ** 2;
    
    // creates the cells with a div, as a child of .grid
    for(i = 0; i < numberOfCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        grid.appendChild(gridCell);
        // hover effect so there is a color trail after the mouse 
        gridCell.addEventListener("mouseover", colorTrail);
    };

}

// random colors in HSL for color trail 
function getRandomColor() {
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
}

// color trail for mouseover
function colorTrail() { 
    this.style.backgroundColor = getRandomColor();
    this.style.border = "none";
}

// reset the gird 
function resetGrid() {
    grid.innerHTML = "";
    createGrid(slider.value);
}

// event listener for reset button
resetBtn.addEventListener("click", resetGrid)

// when slider gets a new value, change the grid size. 
function changeGridSize() {
    resetGrid();
    createGrid(slider.value);
}