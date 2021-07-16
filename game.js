const selections = ["rock", "paper", "scissors"];    

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
            alert("It's a tie")
            return "tie";
        case "rock":
            if (computerSelection === 'scissors') {
                alert("You won! Rock beats Scissors");
                return "player";
            } else {
                alert("You lost. Paper beats Rock");
                return "computer";
            }
        case "paper":
            if (computerSelection === "scissors") {
                alert("You lost. Scissors beats Paper");
                return "computer";
            } else {
                alert("You won! Paper beats Rock");
                return "player";
            }
        case "scissors":
            if (computerSelection === "rock") {
                alert("You lost. Rock beats Scissors")
                return "computer";
            } else {
                alert("You won! Scissors beats Paper")
                return "player";
            }    
    }
}

//EntryMode game, this function makes sure the player only enters a valid
//selection and returns the selection lowercased.
function selection() {
    let checked = false;
    let playerSelection = '';
    while (!checked) {
        playerSelection = prompt("What do you choose?").toLowerCase();
        checked = selections.includes(playerSelection);
    }
    return playerSelection;    
}

//Creates a gameSet of five rounds and declares the winner of the match.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = selection();
        alert("Player Selection: " + playerSelection);
        winner = playRound(playerSelection, computerPlay());
        if (winner === "player") {
            playerScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }
        //whenever one of them gets 3 victories, the game is finished.
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    if (playerScore > computerScore) {
        alert("Player won! Score: " + playerScore);
    } else if (playerScore === computerScore) {
        alert("It's a tie. What a shame");    
    } else {
        alert("Computer won. Score: " + computerScore);
    }
}


//Changes the view when start button pressed, entering the game
function toggleView() {
    if (home.style.display === "") {
        home.style.display= "none";
    }
} 


const home = document.getElementById("home");
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", toggleView);


