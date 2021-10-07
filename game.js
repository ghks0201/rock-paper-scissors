const scoreContent = document.querySelector(".score")
let gameStarted = false
let score = 0, round = 0


// Generate computer's current game round
function computerPlay() {
    const possibleMoves = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    let randomPlay = possibleMoves[randomNum]
    return randomPlay
}


// Play the current round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        scoreContent.textContent = `It's a draw. Your current score is ${score}.`
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")) 
    {
        score++
        scoreContent.textContent = `Yay you win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}. Your current score is ${score}.`
    }
    else {
        scoreContent.textContent = `Boo hoo, you lose! ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}. Your current score is ${score}.`
    }
    round++
    return score

}

// Generate the game play
function game(score) {

    let playButtons = document.querySelectorAll(".game-buttons")

    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener("click", () => {
            
            let playerMove = playButtons[i].className.split(" ")[1]
            let computerMove = computerPlay()
            score = playRound(playerMove, computerMove)
            checkWinner()
            
        })
    }
}

// Check the final winner
function checkWinner() {
    if (round === 5) {
        const winnerText = document.createElement("div")
        winnerText.classList.add("game-winner")

        if (score >= 3) {
            winnerText.textContent = "You win the game!"
        }
        else {
            winnerText.textContent = "You lose the game!"
        }
        scoreContent.appendChild(winnerText)
        startOver()
    }
}
    
// Start over the game     
function startOver() {
    score = 0;
    round = 0;
    gameStarted = false;
}



// Add event listener to keyboard the start the game
document.addEventListener("keydown", () => {
    scoreContent.textContent = "Game started."
    gameStarted = true
})


// Start the game
if (gameStarted = true) {
    game(score)
}

