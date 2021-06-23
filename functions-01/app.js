const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


function gameStarter(){
    console.log("GAME STARTING...");
    let playerMove = prompt("Please enter your chose rock/paper/scissors");
    while((playerMove.trim() === "") || ((playerMove.trim()!==ROCK) & (playerMove.trim() !==PAPER) && (playerMove.trim() !== SCISSORS)) ){
        playerMove = prompt("Wrong move please write again. It shoul be like rock/paper/scissors");
    }
    console.log("Your move : " + playerMove);
    const choiceOfPc = choiceMaker();
    console.log("Pc move : "+choiceOfPc);
    decideWinner(playerMove,choiceOfPc);
}

function choiceMaker(){
    const num = getRandomInt(3);
    return num == 0 ? ROCK : num == 1 ? PAPER : SCISSORS;
}

function getRandomInt(maxInt){
    return Math.floor(Math.random()*maxInt);
}

function decideWinner(playerMove, choiceOfPc){
    if(playerMove.trim() === choiceOfPc){
        console.log("it is a draw");
    }else if(((playerMove === ROCK) && (choiceOfPc === SCISSORS)) || ((playerMove === PAPER)&&(choiceOfPc === ROCK))|| (playerMove === SCISSORS)&&(choiceOf===PAPER)){
        console.log("You WIN");
    }else{
        console.log("You LOSE")
    }
}
startGameBtn.addEventListener('click', gameStarter);