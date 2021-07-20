
//returns one out of the three options of the game using random
function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return selections[index];
}

//determines the winner of a single round, comparing playerSelection
//with computer selection
function playRound(playerSelection, computerSelection) {
    computerIcon.src = `/images/${computerSelection}.svg`; 
    switch (playerSelection) {
        case computerSelection: 
            message.textContent = "It's a tie";
            return "tie";
        case "rock":
            if (computerSelection === 'scissors') {
                message.textContent = "You won! Rock beats Scissors";
                return "player";
            } else {
                message.textContent = "You lost. Paper beats Rock";
                return "computer";
            }
        case "paper":
            if (computerSelection === "scissors") {
                message.textContent = "You lost. Scissors beats Paper";
                return "computer";
            } else {
                message.textContent = "You won! Paper beats Rock";
                return "player";
            }
        case "scissors":
            if (computerSelection === "rock") {
                message.textContent = "You lost. Rock beats Scissors";
                return "computer";
            } else {
                message.textContent = "You won! Scissors beats Paper";
                return "player";
            }    
    }
}


//Creates a gameSet of five rounds and declares the winner of the match.
function check() {
    //Adding game score
    if (winner === "player") {
        playerScore += 1;
        player.textContent = "You: " + playerScore;
    } else if (winner === "computer") {
        computerScore += 1;
        machine.textContent = "Machine: " + computerScore;
    } 
    
    if (playerScore === 3 || computerScore === 3) {
        rounds = 5;
    }

    if (rounds === 5){
        if (playerScore > computerScore) {
            message.textContent = "Player won! Congrats";
            win.play(); 
        } else if (playerScore === computerScore) {
            message.textContent = "It's a tie. What a shame";
            tie.play();    
        } else {
            message.textContent = "Computer won. Good luck on next match!" ;
            lose.play();
        }
        removeEventListeners();
        finish.style.display = "inline";
    }
}

function game(playerSelection) {
    winner = playRound(playerSelection, computerPlay());
    rounds++;
    roundsLabel.textContent = rounds;
    check();
}

function playRock(){
    let playerSelection = "rock";
    rockAudio.play();
    game(playerSelection);
}

function playPaper(){
    let playerSelection = "paper";
    paperAudio.play();
    game(playerSelection);
}

function playScissors(){
    let playerSelection = "scissors";
    scissorsAudio.play();
    game(playerSelection);
}

function createEventListeners() {
    rock.addEventListener("click", playRock);
    paper.addEventListener("click", playPaper);
    scissors.addEventListener("click", playScissors);
}

function removeEventListeners(){
    rock.removeEventListener("click", playRock);
    paper.removeEventListener("click", playPaper);
    scissors.removeEventListener("click", playScissors);  
}


//Changes the view depending on the current state. Home or Game mode.
function toggleView() {
    if (home.style.display === "" || home.style.display === "flex") {
        home.style.display= "none";
        gameMode.style.display = "flex";
        gameSound.pause();
        rounds = 0;
        playerScore = 0;
        computerScore = 0;

        //Initialize the screen of gameMode
        player.textContent = "You: " + playerScore;
        machine.textContent = "Machine: " + computerScore;
        roundsLabel.textContent = rounds;
        computerIcon.src = "";
        message.textContent = "Waiting for results";
        
        createEventListeners();


    } else {
        home.style.display = "flex";
        gameMode.style.display = "none";
        finish.style.display = "none";
        gameSound.play();
    } 
} 

//Assign variables for the game

const selections = ["rock", "paper", "scissors"]; 
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let winner;

//Assign constants for the respected id
const home = document.getElementById("home");
const gameMode = document.getElementById("gameMode");
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", toggleView);
const message = document.getElementById("message");
const player = document.getElementById("player");
const machine = document.getElementById("machine");
const roundsLabel = document.getElementById("roundsLabel");
const computerIcon = document.getElementById("computerIcon");


//Assign the buttons to constants
const rock = document.getElementById("rock");
const paper = document.getElementById("paper"); 
const scissors = document.getElementById("scissors");
const finish = document.getElementById("finish");

//Creates eventListeners
finish.addEventListener("click", toggleView);

//Creates audio element for buttons
let rockAudio = new Audio("/audio/rock.mp3");
let paperAudio = new Audio("/audio/paper.mp3");
let scissorsAudio = new Audio("/audio/scissors.mp3");
let win = new Audio("/audio/win.mp3");
let lose = new Audio("/audio/lose.mp3");
let gameSound = new Audio("/audio/gameSound.mp3");
let tie = new Audio("/audio/tie.mp3");

gameSound.play();



