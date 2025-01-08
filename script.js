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

