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

Creates (numb) of divs, 


*/



function createGrid(numb) {
    for(let i = 0; i < Math.pow(numb, 2); i++) {
        let tempDiv = document.createElement("div");
        let tempPara = document.createElement("p");
        addDivStyle(tempDiv);
        addParagraphStyle(tempPara);
        tempDiv.appendChild(tempPara);
        mainGrid.appendChild(tempDiv);
        adjustGrid(mainGrid, numb);
    }
}

function adjustGrid(cont, grids) {
    cont.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    cont.style.gridAutoRows = `repeat(${grids}, 1fr)`;

}



function addDivStyle(divv) {
    divv.style.backgroundColor = randomColor();
    addFlex(divv);
}



function addFlex(tagg) {
    tagg.style.display =  "flex";
    tagg.style.justifyContent = "center";
    tagg.style.alignItems = "center";


}


function addParagraphStyle(para) {
    para.textContent = "What is the deal?";
    para.style.fontSize = "20px";
    para.style.color = randomColor();
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



createGrid(32);