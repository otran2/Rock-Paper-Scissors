function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    if (rand === 0){
        return "rock"
    }
    else if (rand === 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let hand = prompt("What hand will you choose? (Please enter one of the following 3 options: Rock, Paper, or Scissors)");

    if (hand === null){
        return null;
    }
    else if (hand.toLowerCase() === "rock") {
        return "rock";
    } else if (hand.toLowerCase() === "paper") {
        return "paper";
    } else if (hand.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return "";
    }
}

const playButton = document.querySelector(".play-button");
const log = document.querySelector("#log");
// playButton.addEventListener("click", getHumanChoice);

console.log(getComputerChoice())
console.log(getHumanChoice())