const container = document.querySelector("#container");
let cellNode = document.createElement("div");

cellNode.classList.add("cell");

let gridBtn = document.querySelector('#genBtn');

let cells = document.getElementsByClassName('cell');

let toggleIndicator = document.querySelector(".drawingToggle");

let color = "black";

let isDrawing = true;

//Dropdown color selection
function getColor() {
    color = document.getElementById("colorSelection").value;
}



//Button that creates row x column square
gridBtn.addEventListener("click", function() {
    let squareSize = document.getElementById('dimension').value;

    if (squareSize > 150) {
        alert("You must enter a number no greater than 150.")
    }
    else {
        clearGrid();
        createGrid(squareSize);
    }
    
});

container.addEventListener("click", function() {
    
    if(isDrawing) {
        isDrawing = false;
        toggleIndicator.textContent = "You are NOT drawing."
        toggleIndicator.style.cssText = "color:red";
    }
    else {
        isDrawing = true;
        toggleIndicator.textContent = "You are Drawing."
        toggleIndicator.style.cssText = "color:green";
    }
});

window.onload = function() {
    createGrid(16);
    toggleIndicator.textContent = "You are Drawing."
};



//Function that creates the grid and adds a specified number of div elements
function createGrid(num) {
    for(let i = 0; i < num **2; i++) {
        container.appendChild(cellNode.cloneNode(true));
    }
    gridFormat(container, num);
    startColor(color);
    
    
}

//Function that sets the # of rows and cols in the grid
function gridFormat(element, n) {
    element.setAttribute('style', `grid-template: repeat(${n}, 1fr ) / repeat(${n}, 1fr)`)
}

//Function that clears the grid
function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//Function that runs color changing on hover
function startColor(color) {
    switch(color) {
        case "black":
            for(let i = 0; i < cells.length; i++) {
                cells[i].addEventListener('mouseover', function(e) {
                    if (isDrawing) {
                        e.target.style.backgroundColor = "black";
                    }
                    
                });
            }
            break;

        case "eraser":
            for(let i = 0; i < cells.length; i++) {
                cells[i].addEventListener('mouseover', function(e) {
                    if (isDrawing) {
                        e.target.style.backgroundColor = "white";
                    }
                    
                });
            }
            break;
        
        case "rainbow":
            for(let i = 0; i < cells.length; i++) {
                let r = Math.random()*256;
			    let g = Math.random()*256;
			    let b = Math.random()*256;
                cells[i].addEventListener('mouseover', function(e) {
                    if (isDrawing) {
                        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                    }
                    
                });
            }
            break;
        
            default:
                for(let i = 0; i < cells.length; i++) {
                    cells[i].addEventListener('mouseover', function(e) {
                        e.target.style.backgroundColor = "red";
                    });
                }
                break;
    }
}







