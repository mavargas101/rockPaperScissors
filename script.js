
function computerPlay(){
    computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        return "rock";
    }
    else if(computerChoice == 1){
        return "paper";
    }
    else if(computerChoice == 2){
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection)
    if(computerSelection == "rock"){
        if(playerSelection == "rock"){
            return "TIE!";
        }
        else if(playerSelection == "paper"){
            return "You win!";
        }
        else if(playerSelection == "scissors"){
            return "You lose...";
        }
    }
    else if(computerSelection == "paper"){
        if(playerSelection == "rock"){
            return "You lose...";
        }
        else if(playerSelection == "paper"){
            return "TIE!";
        }
        else if(playerSelection == "scissors"){
            return "You win!";
        }
    }
    else if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            return "You win!";
        }
        else if(playerSelection == "paper"){
            return "You lose...";
        }
        else if(playerSelection == "scissors"){
            return "TIE!";
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Please choose Rock Paper or Scissors.","");
        let computerSelection = computerPlay();
        console.log(singleRound(playerSelection, computerSelection));
    }
}
game();