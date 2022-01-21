const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');
rockBtn.addEventListener('click',() => singleRound(rockBtn.textContent, computerPlay()));
paperBtn.addEventListener('click',() => singleRound(paperBtn.textContent, computerPlay()));
scissorsBtn.addEventListener('click',() => singleRound(scissorsBtn.textContent, computerPlay()));

let playerScore = 0;
let computerScore = 0;


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
            resultsDiv.textContent = "TIE!"
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "paper"){
            resultsDiv.textContent = "You win!";
            playerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "scissors"){
            resultsDiv.textContent = "You lose...";
            computerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
    }
    else if(computerSelection == "paper"){
        if(playerSelection == "rock"){
            resultsDiv.textContent = "You lose...";
            computerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "paper"){
            resultsDiv.textContent = "TIE!"
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "scissors"){
            resultsDiv.textContent = "You win!";
            playerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
    }
    else if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            resultsDiv.textContent = "You win!";
            playerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "paper"){
            resultsDiv.textContent = "You lose...";
            computerScore++;
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`
        }
        else if(playerSelection == "scissors"){
            resultsDiv.textContent = "TIE!"
            scoreDiv.textContent = `Player:${playerScore} | Computer:${computerScore}`

        }
    }
}
