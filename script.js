let humanScore = 0
let computerScore = 0
let userSelection
function getComputerChoice(){

    let computerChoice;
    let computerNum = Math.floor(Math.random() * 3); //returns random int from 0 to 2

    if (computerNum == 0){
        computerChoice = 'Rock'
    }
    else if (computerNum == 1){
        computerChoice = 'Paper'
    }
    else {
        computerChoice='Scissors'
    }

    return computerChoice


}



function getHumanChoice(userSelection){

    if (userSelection == 'rock'){
        return userSelection
    }
    if (userSelection == 'paper'){
        return userSelection
    }
    if(userSelection == 'scissors'){
        return userSelection
    }
    else{
        return 'Invalid choice! You must chose rock, paper or scissors'
    }

}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice === computerChoice){
        return 'Its a tie!'
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore++
        return "You win!";
    }

    computerScore++
    return "Computer wins!";

  }



  function updateScore(result) {
    const resultDisplay = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
}

function updateDisplay(result, computerChoice) {
    const resultDisplay = document.getElementById("result");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const scoreDisplay = document.getElementById("score");

    resultDisplay.textContent = result;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
    scoreDisplay.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    updateDisplay(result, computerChoice);
});

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    updateDisplay(result, computerChoice);
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    updateDisplay(result, computerChoice);
});



