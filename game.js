
//returns one out of the three options of the game using random
function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return selections[index];
}

//determines the winner of a single round, comparing playerSelection
//with computer selection
function playRound(playerSelection, computerSelection) {
    alert("Computer Play: " + computerSelection);
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
            alert("Player won! Score: " + playerScore);
        } else if (playerScore === computerScore) {
            alert("It's a tie. What a shame");    
        } else {
            alert("Computer won. Score: " + computerScore);
        }
        toggleView();  
    }
}

function game(playerSelection) {
    alert("Player Selection: " + playerSelection);
    winner = playRound(playerSelection, computerPlay());
    rounds++;
    roundsLabel.textContent = rounds;
    check();
}


//Changes the view depending on the current state. Home or Game mode.
function toggleView() {
    if (home.style.display === "" || home.style.display === "flex") {
        home.style.display= "none";
        gameMode.style.display = "flex";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;

        //Initialize the screen of gameMode
        player.textContent = "You: " + playerScore;
        machine.textContent = "Machine: " + computerScore;
        roundsLabel.textContent = rounds;
        
    } else {
        home.style.display = "flex";
        gameMode.style.display = "none";
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


//Assign the buttons to constants
const rock = document.getElementById("rock");
const paper = document.getElementById("paper"); 
const scissors = document.getElementById("scissors");

//Creates eventListeners

rock.addEventListener("click", function(){
    let playerSelection = "rock";
    game(playerSelection);
})
paper.addEventListener("click", function(){
    let playerSelection = "paper";
    game(playerSelection);
})
scissors.addEventListener("click", function(){
    let playerSelection = "scissors";
    game(playerSelection);
})

  


