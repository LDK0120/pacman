const gridLayout = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,4,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,4,0,
    0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0,
    0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,
    0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0,
    0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0,
    0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0,
    1,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,1,
    0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0,
    1,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,1,
    0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0,
    0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0,
    0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0,
    0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,
    0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0,
    0,2,2,2,2,2,2,0,2,0,2,0,2,2,2,2,2,2,0,
    0,2,0,0,0,0,2,0,2,0,2,0,2,0,0,0,0,2,0,
    0,4,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,4,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];

//console.log(gridLayout.length);

const container = document.querySelector(".container");
const score = document.querySelector(".score");
const squares = [];
const width = 285;
const height = 315;

function createSquares () {
    for (let i=0; i< gridLayout.length; i++) {
        let square = document.createElement('div');
        squares.push(square);
        container.appendChild(square);

        if (gridLayout[i] === 0) {
            squares[i].classList.add("wall");
        } else if (gridLayout[i] === 1) {
            squares[i].classList.add("empty-wall");
        } else if (gridLayout[i] === 2) {
            squares[i].classList.add("pac-dot");
        } else if (gridLayout[i] === 4) {
            squares[i].classList.add("power-pallet");
        }
    }
}

createSquares();
//console.log(squares);
