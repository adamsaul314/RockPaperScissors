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

    console.log(computerChoice); //remove 


}


let userSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();

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

console.log(getHumanChoice(userSelection))


