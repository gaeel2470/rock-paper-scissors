// Gets the choice for the computer randomly
function getComputerChoice()
{
    // Map the 3 choices (rock, paper and scissors) to the integers 0, 1 and 2
    // rock will be 0, paper 1, and scissors 2

    // Get a random integer between 0 and 2 inclusive
    
    const max = 3;
    let choice = Math.floor(Math.random() * max);

    // Return the corresponding choice

    if (choice === 0)
    {
        return "rock";
    }
    else if (choice === 1)
    {
        return "paper";
    }
    else // choice equals 2
    {
        return "scissors";
    }
}