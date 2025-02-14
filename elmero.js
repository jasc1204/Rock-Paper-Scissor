let humanScore = 0;
let computerScore = 0;



function getComputerChoice()
{
    let option = Math.random();

    if(option > (1/3))
        return "SCISSOR";

    else if (option > (1/3) && option < (2/3))
        return "ROCK";

    else 
        return "PAPER";

}


function getHumanChoice()
{
    let option = prompt("What is your choice?");
    console.log(option);
    return option;
}

function playRound(humanChoice,computerChoice)
{
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    if(human == "SCISSOR" && computer == "ROCK")
    {
        console.log("computer WINNNNNNNNNNS!");
        computerScore++;
    }
    
    else if (human == "PAPER" && computer == "SCISSOR")
    {
        console.log("computer WINNNNNNNNNNS!"); 
        computerScore++;
    }

    else if (human == "ROCK" && computer == "PAPER")
    {
        console.log("computer WINNNNNNNNNNS!"); 
        computerScore++;
    }

    else
    {
        console.log("YOU WINNNNNNNNNN!"); 
        humanScore++;        
    }
            
}

function playGame()
{
    for(let i = 0; i < 5; i++)
        playRound(getHumanChoice(),getComputerChoice());
}

playGame();

