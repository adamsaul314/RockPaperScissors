let humanScore = 0
let computerScore = 0

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

  let userSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
  const humanSelection = getHumanChoice(userSelection);
  const computerSelection = getComputerChoice();
  
  console.log("Your choice:", humanSelection);
  console.log("Computer's choice:", computerSelection);
  console.log(playRound(humanSelection, computerSelection))

  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
  



