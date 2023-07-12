
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