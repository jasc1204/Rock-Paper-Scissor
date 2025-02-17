let humanScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const response = document.getElementById("response");



function getComputerChoice()
{
    let option = Math.random();

    if (option > 0 && option < (1/3))
        return "ROCK";

    else if(option > (1/3) && option < (2/3))
        return "SCISSOR";

    else 
        return "PAPER";

}

function playRound(humanChoice,computerChoice)
{
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();

    if(human == "SCISSOR" && computer == "ROCK")
    {
        computerScore++;
        response.textContent= "Human Score: " + humanScore + " Computer Score: " + computerScore;

    }
    
    else if (human == "PAPER" && computer == "SCISSOR")
    {
        computerScore++;
        response.textContent= "Human Score: " + humanScore + " Computer Score: " + computerScore;

    }

    else if (human == "ROCK" && computer == "PAPER")
    {
        computerScore++;
        response.textContent= "Human Score: " + humanScore + " Computer Score: " + computerScore;

    }

    else if (human == computer)
        response.textContent= "Human Score: " + humanScore + " Computer Score: " + computerScore;
    else
    {
        humanScore++;     
        response.textContent= "Human Score: " + humanScore + " Computer Score: " + computerScore;
   
    }
            
}

function playGame(name)
{

    playRound(name,getComputerChoice());

    console.log()

    if (humanScore == 5)
    {
        result.textContent = " Human wins";
        humanScore = 0;
        computerScore = 0;

    }
    else if (computerScore == 5)
    {
        result.textContent = " Computer wins";
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click",function(e){
        if(humanScore == 0 && computerScore == 0)
            result.textContent = "";
        const name = e.target.getAttribute("data-name");
        playGame(name)
    });
});



