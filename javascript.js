let humanScore = 0, computerScore = 0, totalGames = 0

const MAXGAMES = 5
const possibleHands = ["Rock", "Paper", "Scissors"]

//const playButton = document.querySelector(".play-button");
const options = document.querySelector(".player-options")
const log = document.querySelector("#log")
log.style.textAlign = "center"
log.style.fontWeight = "bold"
log.style.margin = "8px"

// Determines the computer's choice
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    if (rand === 0){
        return "Rock"
    }
    else if (rand === 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

// Determines the player's choice
function getHumanChoice(){
    let hand = prompt("What hand will you choose? (Please enter one of the following 3 options: Rock, Paper, or Scissors)");

    if (hand === null){
        return null;
    }
    else if (hand.toLowerCase() === "rock") {
        return "Rock";
    } else if (hand.toLowerCase() === "paper") {
        return "Paper";
    } else if (hand.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        return "";
    }
}

// Updates the scores and game number
function updateStats(){
    let playerTracker = document.querySelector(".score-player");
    let computerTracker = document.querySelector(".score-computer");
    let roundTracker = document.querySelector(".round-number");
    playerTracker.textContent = humanScore
    computerTracker.textContent = computerScore
    roundTracker.textContent = `Rounds Played: ${totalGames}`
    if (totalGames === MAXGAMES){
        let endText
        if (humanScore === computerScore){
            endText = "Draw, no winner!"
        }
        else if (humanScore > computerScore){
            endText = "You won, congratulations!"
        }
        else{
            endText = "You lose, better luck next time!"
        }
        //  console.log(endText)
        log.innerText = endText;
    }
}

// Determines round winner
function playRound(humanChoice, computerChoice){
    let roundText
    if (humanChoice === computerChoice){
        roundText = "Same hand, draw!" 
        //  console.log(roundText)
        log.innerText = roundText;
    }
    else if ((humanChoice === possibleHands[0] && computerChoice === possibleHands[2])
    || (humanChoice === possibleHands[1] && computerChoice === possibleHands[0])
    || (humanChoice === possibleHands[2] && computerChoice === possibleHands[1])){
        roundText = `You win! ${humanChoice} beats ${computerChoice}!`
        //  console.log(roundText)
        log.innerText = roundText;
        humanScore ++
    }
    else{
        roundText = `You lose! ${humanChoice} does not beat ${computerChoice}!`
        //  console.log(roundText)
        log.innerText = roundText;
        computerScore ++
    }
    totalGames ++
}

function playGame(){
    if (totalGames === MAXGAMES){
        return;
    }
    let playerHand = getHumanChoice()
    if (possibleHands.includes(playerHand)){
        let computerHand = getComputerChoice()
        playRound(playerHand, computerHand)
        updateStats()
    }
    else{
        alert("Invalid choice")
    }
}

options.addEventListener('click', function(event) {
  if (totalGames === MAXGAMES){
    return;
  }
  const buttonText = event.target.innerText
  playRound(buttonText, getComputerChoice())
  updateStats()
});

// playButton.addEventListener("click", playGame);