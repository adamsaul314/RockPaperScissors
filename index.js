let playerSelection = prompt('Choose rock, paper or scissors: ');

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


    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log('You lose! Paper beats rock.')

    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log('You win! Rock beats scissors.')

    } else if (playerSelection == 'Rock' && computerSelection == 'Rock'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log('You Lose! Scissors beats paper.')

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You Win! Paper beats rock.')

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log('You Win! Scissors beats paper.')

    }else if (playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        console.log('Tie! Play again.')

    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log('You Lose! Rock beats scissors.')
    }

}

console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection))