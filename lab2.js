var options = ["rock", "scissors", "paper"];

prompt("Select Rock(1), Scissors(2) or Paper(3).");

var userChoice = prompt;

if(userChoice = 1)
{
    alert("You have selected Rock");   
}
else if(userChoice = 2)
{
    alert("You have selected Scissors");   
}
else if(userChoice = 3)
{
    alert("You have selected Paper");   
}

var computerChoice = Math.random();

if(computerChoice > 0 && computerChoice <= 0.33)
{
    computerChoice = "rock";
    console.log("Computer selected Rock.");
}
else if(computerChoice > 0.34 && computerChoice <= 0.66)
{
    computerChoice = "paper";
    console.log("Computer selected Paper.");
}
else if(computerChoice > 0.67 && computerChoice <= 1)
{
    computerChoice = "scissors";
    console.log("Computer selected Scissors.");
}

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";
    }
};