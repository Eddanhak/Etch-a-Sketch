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


/*

function that generates grid.
1 argument, how many grids to generate.

Creates (numb) of divs, 


*/

function createGrid(numb) {
    for(let i = 0; i < numb; i++) {
        let tempDiv = document.createElement("div");
        tempDiv.style.backgroundColor = "rgb(20, 5, 5)";
        let tempPara = document.createElement("p");
        tempPara.textContent = "What?";
        tempDiv.appendChild(tempPara);
        mainGrid.appendChild(tempDiv);
    }
}


function randNumber() {
    let randNumb =  Math.floor(Math.random * 255) + 1;
    console.log(randNumb);
}


function randomBGColor() {

}


createGrid(10);
randNumber();