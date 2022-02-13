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
    0,4,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0,
    0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,
    0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0,
    0,2,2,2,2,2,2,0,2,0,2,0,4,2,2,2,2,2,0,
    0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,0,0,
    0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];

//console.log(gridLayout.length);

const container = document.querySelector(".container");
const squares = [];

const score = document.querySelector(".score");
let currentScore = 0;

const width = 19;
const height = 21;

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

//create pacman in the middle when the game starts: index of 180.        
let position = 180;            
squares[180].classList.remove("pac-dot");
squares[180].classList.add("pac-man");

function eatPacDot() {

    if (squares[position].classList.contains("pac-dot")) {
        squares[position].classList.remove("pac-dot");
        currentScore++;
        score.innerHTML = `${currentScore}`;
        squares[position].classList.add("pac-man");
    } else {
        squares[position].classList.add("pac-man");
    }
        

}


//allow player to move pacman:
function move(event) {
     let keyPressed = event.key;

    switch (keyPressed) {
        case "ArrowDown":
            if (position < 380 && squares[position + 19].classList.contains("wall") !== true) {
            squares[position].classList.remove("pac-man");
            position += 19;
            eatPacDot();
            }
            break;
        case "ArrowUp":
            if (position >= 19 && squares[position - 19].classList.contains("wall") !== true) {
            squares[position].classList.remove("pac-man");
            position -= 19;
            eatPacDot();
            squares[position].classList.add("pac-man");
            }
            break;
        case "ArrowLeft":
            if (position % width !== 0 && squares[position - 1].classList.contains("wall") !== true) {
            squares[position].classList.remove("pac-man");
            position -= 1;
            eatPacDot();
            squares[position].classList.add("pac-man");
            } else if (position === 171) {
                squares[position].classList.remove("pac-man");
                position = 189;
                squares[position].classList.add("pac-man");
            }
            break;
        case "ArrowRight":
            if (position % width <  18 && squares[position + 1].classList.contains("wall") !== true) {
            squares[position].classList.remove("pac-man");
            position += 1;
            eatPacDot();
            squares[position].classList.add("pac-man");
            } else if (position === 189) {
                squares[position].classList.remove("pac-man");
                position = 171;
                squares[position].classList.add("pac-man");
            }
            break;
    }
 }

document.addEventListener("keyup", move);

//need to generate 4 ghosts where pacman and power-pellet are not present.

