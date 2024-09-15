//score
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
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

//game ui logic
const gameProcess = (choiceNumber) => {
  const choices = ["rock", "paper", "scissors"];
  const humanChoice = choices[choiceNumber].toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();
  console.log(`Your Choice is`, humanChoice);
  console.log(`Computer Choice is`, computerChoice);
  playRound(humanChoice, computerChoice);
  console.log(`Your Score is ${humanScore}`);
  console.log(`Computer Score is ${computerScore}`);
  scoreBoard.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
  winner();
};

//Who wins
const winner = () => {
  if (humanScore == 5) {
    announcement.textContent = "You Win!";
    scoreBoard.appendChild(announcement);
    humanChoiceButton.forEach((item) => {
      console.log(item);
      item.disabled = true;
    });
  } else if (computerScore == 5) {
    announcement.textContent = "You Lose!";
    scoreBoard.appendChild(announcement);
    humanChoiceButton.forEach((item) => {
      console.log(item);
      item.disabled = true;
    });
  }
};

//Three Buttons
const container = document.querySelector("body");
const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock");
rockButton.classList.add("humanChoices");
rockButton.textContent = "ROCK";
rockButton.addEventListener("click", () => {
  gameProcess(0);
});
container.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper");
paperButton.classList.add("humanChoices");
paperButton.textContent = "PAPER";
paperButton.addEventListener("click", () => {
  gameProcess(1);
});
container.appendChild(paperButton);

const stoneButton = document.createElement("button");
stoneButton.setAttribute("id", "scissors");
stoneButton.classList.add("humanChoices");
stoneButton.textContent = "SCISSORS";
stoneButton.addEventListener("click", () => {
  gameProcess(2);
});
container.appendChild(stoneButton);

//all three buttons nodelist
const humanChoiceButton = document.querySelectorAll("button");
// console.log(humanChoiceButton);

//scoreboard 
// scoreBoard.style.cssText = "background: red; height: 100px; width: 100px;"
const scoreBoard = document.createElement("div");
scoreBoard.setAttribute("class", "scoreboard");
container.appendChild(scoreBoard);
scoreBoard.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;

//winner announcement
const announcement = document.createElement("h1");
