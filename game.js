const selections = ["rock", "paper", "scissors"];    

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return selections[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Computer Play: " + computerSelection);
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock"){
                return "It's a tie";
            } else if (computerSelection === 'scissors') {
                return "You won! Rock beats Scissors";
            } else {
                return "You lost. Paper beats Rock";
            }
        case "paper":
            if (computerSelection === "paper"){
                return "It's a tie";
            } else if (computerSelection === "scissors") {
                return "You lost. Scissors beats Paper";
            } else {
                return "You won! Paper beats Rock";
            }
        case "scissors":
            if (computerSelection === "scissors"){
                return "It's a tie";
            } else if (computerSelection === "rock") {
                return "You lost. Rock beats Scissors";
            } else {
                return "You won! Scissors beats Paper";
            }    
    }
}