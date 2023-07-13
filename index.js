let playerSelection = prompt('Choose rock, paper or scissors: ');
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();


function getComputerChoice () {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];

    let computerSelection = Math.floor(Math.random()*computerChoices.length);

    if (computerSelection == 0){
        return 'Rock'
    } else if (computerSelection == 1){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection == 'rock' && computerSelection == 'Paper'){
        console.log('You lose! Paper beats rock.')

    } else if (playerSelection == 'rock' && computerSelection == 'Scissors'){
        console.log('You win! Rock beats scissors.')

    } else if (playerSelection == 'rock' && computerSelection == 'Rock'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'paper' && computerSelection == 'Paper'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'paper' && computerSelection == 'Scissors'){
        console.log('You Lose! Scissors beats paper.')

    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        console.log('You Win! Paper beats rock.')

    } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
        console.log('You Win! Scissors beats paper.')

    }else if (playerSelection == 'scissors' && computerSelection == 'Scissors'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'scissors' && computerSelection == 'Rock'){
        console.log('You Lose! Rock beats scissors.')
    }

    return computerSelection, playerSelection;

}

console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection))