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
const buttonRandomColor = document.querySelector("#btn-random-color");
const buttonBgColor = document.querySelector("#btn-bg-color");
const buttonRandomBg = document.querySelector("#btn-fill-random");
const colorPick = document.querySelector("#color-pick");
const inputGrids = document.querySelector("#input-grids");
const bgColor = document.querySelector("#bg-color-pick");



bgColor.value = "#ffffff";

let mouseClicked = false;
let mouseOver = false;
let randButtonCheck = false;
let targetColor = true;

let defaultGridValue = 16;
let defaultBgColor = "rgb(255, 255, 255)";



/*

function that generates grid.
1 argument, how many grids to generate.

Creates (numb) of divs, in white color.
Add a eventlistener to every div, Hover event to change color of every div.

Have :hover css class pre declared in css file.
Get the background-color value from that into random?




*/


function generateGrid(numb = 16) {
    /*
    Generates INTxINT grid based on the inputted number.
    Default value when page is loaded, set to 16.
    16x16 GRID.
    */
    if(inputGrids.value === "") {
        createGrid(numb);
    }
    else {
        createGrid(parseInt(inputGrids.value));
    }


}


function removeGrids() {
    /*
    Removes all divs from grid container.
    Is run everytime before grid is generated to not have any colored divs when user generates new grid.
    */

    let gridArray = Array.from(mainGrid.children);
    gridArray.forEach(grid => mainGrid.removeChild(grid));
    

}




function createGrid(numb) {
    removeGrids();
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
        divv.onmousedown = () => (mouseClicked = true);
        divv.onmouseup = () => (mouseClicked = false);
        divv.onmouseover = () => (mouseOver = true);
        divv.addEventListener("mousedown", (event) => drawColor(divv));
        divv.addEventListener("mouseover", (event) => drawColor(divv));
}


function drawColor(divv) {

    /*
    Checks if random color button is pressed.
    If pressed, randomize every divs background color when mouse is pressed and hovers over.
    If not pressed, use the color pickers color.
    */


    if(mouseClicked && mouseOver && randButtonCheck) {
        divv.style.backgroundColor = randomColor();
    }
    else if(mouseClicked && mouseOver) {
        divv.style.backgroundColor = getChosenColor();
    }
}



function getChosenColor() {

    /*
    Gets the current chosen color in the color picker.
    */

    let pickedColor = String(colorPick.value);
    return pickedColor;

}





function toggleRandomColorBtn(btn) {
    /*
    When random color button is pressed, fire this function.
    Change the appearance of the button, and use alter boolean value of randButtonCheck.
    
    if statement(if randButtonCheck is true): Change boolean to false.
    Change button color to default(not active color).
    Make font size smaller.
    
    if statement(if randButtonCheck is false): change boolean to true.
    Change button color to some green.
    Make font size bigger. Add CSS transition for font.

    */

    if (randButtonCheck) {
        btn.style.backgroundColor = defaultBgColor;
        btn.style.color = "black";
        btn.style.fontSize = "initial";
        randButtonCheck = false;

    }
    else {
        btn.style.backgroundColor = "rgba(125, 235, 1, 0.5)";
        btn.style.fontSize = "18px";
        btn.style.color = "white";
        btn.style.transition = "0.3s";
        randButtonCheck = true;
    }



}



function clearGrid(e) {

    /*
    When Clear grid is pressed, iterate through every div and set them to white color.
    */

    let gridArray = Array.from(mainGrid.children);
    gridArray.forEach(grid => grid.style.backgroundColor = defaultBgColor);

}


function randNumber() {
    let randNumb =  Math.floor(Math.random() * 255) + 1;
    return randNumb;


}


function changeBgColor() {

    /*
    Gets value from colorpicker.
    Loops through all divs in grid.
    assigns new bg color to all the divs.
    */

    let gridArray = Array.from(mainGrid.children);
    gridArray.forEach(grid => grid.style.backgroundColor = bgColor.value);

}



function randomBgColor() {
    let gridArray = Array.from(mainGrid.children);
    gridArray.forEach(grid => grid.style.backgroundColor = randomColor());

}




function randomColor() {
    // Returns random rgb string in format = rgb(int, int, int);
    let tempArr = [];
    for(let i = 0; i < 3; i++){
        tempArr[i] = randNumber();
    } 
    let randomRGB = `rgb(${tempArr[0]},${tempArr[1]},${tempArr[2]})`;
    return randomRGB;
}


generateGrid();

buttonClearGrid.addEventListener("click", clearGrid);
buttonRandomColor.addEventListener("click", (event) => toggleRandomColorBtn(buttonRandomColor));
buttonGenerate.addEventListener("click", generateGrid);
buttonBgColor.addEventListener("click", changeBgColor);
buttonRandomBg.addEventListener("click", randomBgColor);

