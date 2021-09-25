function computerPlay() {
    const play = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3)
    let randomPlay = play[randomNum]
    return randomPlay
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log(`It's a draw. Your current score is ${score}.`)
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")) 
    {
        score++
        console.log(`Yay you win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}. Your current score is ${score}.`)
    }
    else {
        console.log(`Boo hoo, you lose! ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}. Your current score is ${score}.`)
    }
    return score
}

function game(score) {

    let playerSelection = prompt("Choose Rock, Paper or Scissors!").toLowerCase()
    let computerSelection = computerPlay()
    score = playRound(playerSelection, computerSelection)
        
}


let score = 0, round = 1

while (round <= 5) {
    game(score)
    round++
}

if (score > 2) {
    console.log("You win the game!")
}
else {
    console.log("You lose the game!")
}