const scoreDisplay = document.getElementById('score');
const width = 28;
let score = 0;
const grid = document.querySelector('.grid');

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
// 0: pac-dots
// 1: wall
// 2: ghost lair
// 3: power pellet
// 4: empty

// create ur board
const squares = [];

function createBoard(){
    for(let i = 0; i < layout.length; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);

        if(layout[i] === 0){
            squares[i].classList.add('pac-dot');
        }
        else if(layout[i] === 1){
            squares[i].classList.add('wall');
        }
        else if(layout[i] === 2){
            squares[i].classList.add('ghost-lair');
        }
        else if(layout[i] === 3){
            squares[i].classList.add("power-pellet");
        }
    }
}
createBoard();

//create characters
    //drawing pacman on the board

let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add('pac-man');
    //move PAC-MAN

function movePacman(keyPressed){
    squares[pacmanCurrentIndex].classList.remove('pac-man');
    switch(keyPressed.key){
        case "ArrowLeft":
            if(pacmanCurrentIndex % width !== 0 && 
               !squares[pacmanCurrentIndex-1].classList.contains("wall")&&
               !squares[pacmanCurrentIndex-1].classList.contains("ghost-lair"))
                pacmanCurrentIndex--;
            
            if(squares[pacmanCurrentIndex-1] === squares[363])
                pacmanCurrentIndex = 391;
            break;

        case "ArrowRight":
            if(pacmanCurrentIndex % width < width-1 &&
               !squares[pacmanCurrentIndex+1].classList.contains("wall")&&
               !squares[pacmanCurrentIndex+1].classList.contains("ghost-lair"))
                pacmanCurrentIndex++;

            if(squares[pacmanCurrentIndex+1] === squares[392])
                pacmanCurrentIndex = 364;
            break;

        case "ArrowUp":
            if(pacmanCurrentIndex - width >= 0 &&
               !squares[pacmanCurrentIndex - width].classList.contains("wall")&&
               !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
            )
                pacmanCurrentIndex -= width;
            break;

        case "ArrowDown":
            if(pacmanCurrentIndex + width < width*width &&
               !squares[pacmanCurrentIndex + width].classList.contains("wall")&&
               !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
            )
                pacmanCurrentIndex += width;
            break;
    }
    squares[pacmanCurrentIndex].classList.add("pac-man");
    pacDotEaten();
    powerPellerEaten();
    checkForGameOver();
    checkForWin();
}
document.addEventListener("keyup", movePacman);

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
        score++;
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
}

function powerPellerEaten(){
    if(squares[pacmanCurrentIndex].classList.contains("power-pellet")){
        score += 10;
        scoreDisplay.innerHTML = score;
        ghosts.forEach(ghost => ghost.isScared = true);
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].classList.remove("power-pellet");
    }
}

function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false);
}
//create ghosts

class Ghost{
    constructor(className, startIndex, speed){
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerID = NaN;
    }
}

const ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500),
]

//draw the ghosts on the grid
//The forEach() method calls a function for each element in an array.
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
})

//move ghosts randomly
ghosts.forEach(ghost => moveGhost(ghost));

function moveGhost(ghost){
    console.log(ghost);
    const directions = [-1, 1, -width, width];
    let direction = directions[Math.floor(Math.random() * directions.length)];
     
    ghost.timerID = setInterval(function() {
        if(!squares[ghost.currentIndex + direction].classList.contains("wall")&&
           !squares[ghost.currentIndex + direction].classList.contains("ghost")){

            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
           }
        else//find a new random dir to go in
           direction = directions[Math.floor(Math.random()*directions.length)];
        
        if(ghost.isScared)
                squares[ghost.currentIndex].classList.add("scared-ghost");
            //ghost scared and pacman is on it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")){
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
            ghost.currentIndex = ghost.startIndex;
            score += 100;
            scoreDisplay.innerHTML = score;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");

        }
        //check for gameOver
    }, ghost.speed)
}

function checkForGameOver(){
    if(squares[pacmanCurrentIndex].classList.contains("ghost")&&
       !squares[pacmanCurrentIndex].classList.contains("scared-ghost")){

        ghosts.forEach(ghost => clearInterval(ghost.timerID));
        document.removeEventListener("keyup", movePacman);
        setTimeout(() => {alert("GAME OVER")}, 500);
       }
}
//check for WIN
function checkForWin(){
    if(score > 274){
        ghosts.forEach(ghost => clearInterval(ghost.timerID));
        document.removeEventListener("keyup", movePacman);
        setTimeout(() => {alert("YOU WIN!")}, 500);
    }
}