const selections = ["rock", "paper", "scissors"];    

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return selections[index];
}

function playRound(playerSelection, computerSelection) {
    console.log("Computer Play: " + computerSelection);
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock"){
                console.log("It's a tie");
                return "tie";
            } else if (computerSelection === 'scissors') {
                console.log("You won! Rock beats Scissors");
                return "player";
            } else {
                console.log("You lost. Paper beats Rock");
                return "computer";
            }
        case "paper":
            if (computerSelection === "paper"){
                console.log("It's a tie");                
                return "tie";
            } else if (computerSelection === "scissors") {
                console.log("You lost. Scissors beats Paper");
                return "computer";
            } else {
                console.log("You won! Paper beats Rock");
                return "player";
            }
        case "scissors":
            if (computerSelection === "scissors"){
                console.log("It's a tie")
                return "tie";
            } else if (computerSelection === "rock") {
                console.log("You lost. Rock beats Scissors")
                return "computer";
            } else {
                console.log("You won! Scissors beats Paper")
                return "player";
            }    
    }
}

function selection() {
    let checked = false;
    let playerSelection = '';
    while (!checked) {
        playerSelection = prompt("What do you choose?").toLowerCase();
        checked = selections.includes(playerSelection);
    }
    return playerSelection;    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = selection();
        console.log("Player Selection: " + playerSelection);
        winner = playRound(playerSelection, computerPlay());
        if (winner === "player") {
            playerScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player won! Score: " + playerScore);
    } else if (playerScore === computerScore) {
        console.log("It's a tie. What a shame");    
    } else {
        console.log("Computer won. Score: " + computerScore);
    }
}

