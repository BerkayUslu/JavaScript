const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


function gameStarter(){
    console.log("GAME STARTING...");
    const playerMove = prompt("Please enter your chose rock/paper/scissors");
    if(playerMove.trim() == "" || ){

    }
}

startGameBtn.addEventListener('click', gameStarter);