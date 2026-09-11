// Gets the choice for the computer randomly
function getComputerChoice()
{
    // Map the 3 choices to the integers 0, 1 and 2
    // Rock will be 0, Paper 1, and Scissors 2

    // Get a random integer between 0 and 2 inclusive
    const max = 3;
    let choice = Math.floor(Math.random() * max);

    // Return the corresponding choice
    if (choice === 0)
    {
        return "Rock";
    }
    else if (choice === 1)
    {
        return "Paper";
    }
    else // choice equals 2
    {
        return "Scissors";
    }
}

// Gets the choice from the user
function getHumanChoice()
{   
    // Prompt user to enter their choice
    let choice = prompt("User please enter your choice here: ");

    // Transform to lowercase
    choice = choice.toLowerCase();
    
    // Capitalize first letter
    return choice[0].toUpperCase() + choice.slice(1);
}

// Gets the winner of the round and updates scores accordingly
function playRound(humanChoice, computerChoice)
{   
    // Log user and computer choices
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    // Decide winner of round

    // If both choices are the same round is a tie and scores remain the same, log outcome
    if (humanChoice === computerChoice)
    {
        console.log("The round is a tie!");
    }
    
    // Round is not a tie

    // Outcomes where user wins
    else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
             humanChoice === "Paper" && computerChoice === "Rock" ||
             humanChoice === "Scissors" && computerChoice === "Paper")
    {   
        // Log outcome 

        // Slight change if user choice is Scissors to follow English grammar
        if (humanChoice === "Scissors")
        {
            console.log("You win! Scissors beat " + computerChoice)
        }

        else
        {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }

        // Increment user score by 1
        humanScore++;
    }

    // User loses in all other outcomes
    else
    {   
        // Log outcome

        // Slight change if computer choice is Scissors to follow English grammar
        if (computerChoice === "Scissors")
        {
            console.log("You lose! Scissors beat " + humanChoice);
        }
        
        else
        {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }

        // Increment computer score by 1
        computerScore++;
    }
}

// Logs final scores and winner of the game
function getWinner()
{
    // Log final scores
    console.log("Your final score is: " + humanScore);
    console.log("Computer's final score is: " + computerScore);

    // Log winner

    // User wins
    if (humanScore > computerScore)
    {
        console.log("Congratulations! You won the game");
    }

    // Computer wins
    else if (computerScore > humanScore)
    {
        console.log("We're sorry, you lost the game this time");
    }

    // Tie
    else
    {
        console.log("No winner! Game is a tie");
    }
}

// Plays 5 rounds, keeps track of the scores and logs the outcome of the game
function playGame()
{   
    // Game will have 5 rounds
    const rounds = 5;
    for (let i = 0; i < rounds; i++)
    {
        // Variables to store user and computer choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Start round
        playRound(humanChoice, computerChoice);
    }

    // Get winner of the game
    getWinner();
}

// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;

// Play the game
playGame();
