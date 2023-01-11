/*

Create webpage with a 16x16 grid.
Create the divs using javascript.
put grid squares in container divs.

Try using different methods:
- Float/clear
- inline-block
- flexbox
- CSS Grid


*/


let arrayGrid = [];

const mainGrid = document.querySelector("#container-grid");
const inputGridNumber = document.querySelector("#input-grids");
const buttonGenerate = document.querySelector("#button-generate");


/*

function that generates grid.
1 argument, how many grids to generate.

Creates (numb) of divs, in white color.
Add a eventlistener to every div, Hover event to change color of every div.



*/


function createGrid(numb) {
    adjustGrid(mainGrid, numb);
    
    for(let i = 0; i < Math.pow(numb, 2); i++) {
        let tempDiv = document.createElement("div");
        mainGrid.appendChild(tempDiv);
        addEvent(tempDiv);
        addDivStyle(tempDiv);
    }
}

function adjustGrid(cont, grids) {
    cont.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${grids}, 1fr)`;

}


function addDivStyle(divv) {
    divv.classList.add("grid-div");
}


function addEvent(divv) {
    divv.addEventListener("mousedown", (event) => divv.style.backgroundColor = randomColor());
}



function randNumber() {
    let randNumb =  Math.floor(Math.random() * 255) + 1;
    return randNumb;


}

// Returns random rgb string in format = rgb(int, int, int);

function randomColor() {
    let tempArr = [];
    for(let i = 0; i < 3; i++){
        tempArr[i] = randNumber();
    } 
    let randomRGB = `rgb(${tempArr[0]},${tempArr[1]},${tempArr[2]})`;
    return randomRGB;
}



createGrid(40);


