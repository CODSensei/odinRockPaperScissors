let humanScore = 0;
let computerScore = 0;

//generate a random number from 0 to 2
//then with that get rock paper and scissors
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
};

//get the prompt and check if it is valid or not
const getHumanChoice = () => {
  const a = prompt("Enter your choice (Rock , Paper , Scissors) ");
  if (
    a !== "Rock" &&
    a !== "rock" &&
    a !== "Paper" &&
    a !== "paper" &&
    a !== "Scissors" &&
    a !== "scissors"
  ) {
    alert("Invalid Prompt");
  }
  return a;
};

//takes choices and checks who win or loose or it is a draw
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("Its a Draw !!!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win !!!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Loose !!!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win !!!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Loose !!!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win !!!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Loose !!!");
    computerScore++;
  }
};

//gets choices and play round 5 times
const playGame = () => {
  for (i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice().toLowerCase();
    console.log(`Your number ${i + 1} choice is`, humanChoice);
    const computerChoice = getComputerChoice().toLowerCase();
    console.log(`Computer number ${i + 1} choice is`, computerChoice);
    playRound(humanChoice, computerChoice);
    console.log(`Your Score is ${humanScore}`);
    console.log(`Computer Score is ${computerScore}`);
  }
};

playGame();
