// Add event listener to choice buttons

const choiceButtons = document.querySelector(".choices");

choiceButtons.addEventListener("click", event => {

    // Clicking the div itself could also trigger the event listener
    // Make sure one of the buttons was clicked

    const userChoice = event.target.textContent;

    if (userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors")
    {   
        // If someone already won start a new game
        if (humanScore === 5 || computerScore === 5)
        {
            humanScore = 0;
            computerScore = 0;

            const finalWinner = document.querySelector(".winner");
            finalWinner.textContent = "";
        }

        // Get computer choice
        const computerChoice = getComputerChoice();

        // Call playRound with corresponding user choice
        playRound(userChoice, computerChoice);
    }
});

// Gets computer choice randomly
function getComputerChoice()
{
    // Map the 3 choices to the integers 0, 1 and 2
    // Rock will be 0, Paper 1, and Scissors 2

    // Get a random integer between 0 and 2 inclusive
    const choice = Math.floor(Math.random() * 3);

    // Return the corresponding choice

    if (choice === 0)
    {
        return "Rock";
    }

    else if (choice === 1)
    {
        return "Paper";
    }

    // choice equals 2
    else
    {
        return "Scissors";
    }
}

// Implements rock-paper-scissors, first to get 5 points wins the game
function playRound(humanChoice, computerChoice)
{   
    // Show user and computer choices for current round

    const userSelection = document.querySelector(".user-selection");
    userSelection.textContent = "Your choice is: " + humanChoice;

    const computerSelection = document.querySelector(".computer-selection");
    computerSelection.textContent = "The computer's choice is: " + computerChoice;

    // Get winner of round and show it on screen

    const roundOutcome = document.querySelector(".outcome");

    // If both choices are the same round is a tie and scores remain the same
    if (humanChoice === computerChoice)
    {
        roundOutcome.textContent = "The round is a tie! No point is conceded";
    }
    
    // Round is not a tie

    // Outcomes where user wins
    else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
             humanChoice === "Paper" && computerChoice === "Rock" ||
             humanChoice === "Scissors" && computerChoice === "Paper")
    {   
        // Slight change if user choice is Scissors to follow English grammar
        if (humanChoice === "Scissors")
        {
            roundOutcome.textContent = "You got a point! Scissors beat " + computerChoice;
        }

        else
        {
            roundOutcome.textContent = "You got a point! " + humanChoice + " beats " + computerChoice;
        }

        // Increment user score by 1
        humanScore++;
    }

    // User loses in all other outcomes
    else
    {   
        // Slight change if computer choice is Scissors to follow English grammar
        if (computerChoice === "Scissors")
        {
            roundOutcome.textContent = "The computer gets the point! Scissors beat " + humanChoice;
        }
        
        else
        {
            roundOutcome.textContent = "The computer gets the point! " + computerChoice + " beats " + humanChoice;
        }

        // Increment computer score by 1
        computerScore++;
    }

    // Show current scores on screen

    const userCurrentScore = document.querySelector(".user-score");
    userCurrentScore.textContent = "Your score is: " + humanScore;

    const computerCurrentScore = document.querySelector(".computer-score");
    computerCurrentScore.textContent = "The computer's score is: " + computerScore;

    // Check if there is a winner

    if (humanScore === 5 || computerScore === 5)
    {
        const finalWinner = document.querySelector(".winner");

        if (humanScore === 5)
        {
            finalWinner.textContent = "The game has ended. You won! :) Click a button again to start a new game!";
        }

        else
        {
            finalWinner.textContent = "The game has ended. The computer won :( Click a button again to start a new game!"
        }
    }
}

// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;