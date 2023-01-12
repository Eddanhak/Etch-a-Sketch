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
const buttonClearGrid = document.querySelector("#btn-clear-grid");

let mouseClicked = false;
let mouseOver = false;

document.body.onmousedown = () => (mouseClicked = true);
document.body.onmouseup = () => (mouseClicked = false);
document.body.onmouseover = () => (mouseOver = true);





/*

function that generates grid.
1 argument, how many grids to generate.

Creates (numb) of divs, in white color.
Add a eventlistener to every div, Hover event to change color of every div.

Have :hover css class pre declared in css file.
Get the background-color value from that into random?




*/


function createGrid(numb) {
    adjustGrid(mainGrid, numb);
    
    for(let i = 0; i < Math.pow(numb, 2); i++) {
        let tempDiv = document.createElement("div");
        mainGrid.appendChild(tempDiv);
        addEvent(tempDiv);
    }
}



function adjustGrid(cont, grids) {
    /*
    Adjusts grid depending on the input.
    Creates GRIDxGRID by input.
    */
    cont.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${grids}, 1fr)`;

}


function addEvent(divv) {
    /*
    Adds eventlistener to every div. 
    Applies randomColor function to every div when event is true.
    
     */
        divv.addEventListener("mousedown", (event) => drawColor(divv));
        divv.addEventListener("mouseover", (event) => drawColor(divv));
}


function drawColor(divv) {
    if(mouseClicked && mouseOver) {
        divv.style.backgroundColor = randomColor();
    }
    else {
        return;
    }
}


function clearGrid(e) {


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

buttonClearGrid.addEventListener("click", clearGrid);


