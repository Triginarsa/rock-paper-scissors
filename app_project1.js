let humanScore = 0;
let computerScore = 0;
let hand = "";
let compHand = "";
let randomResult = null;

function getComputerChoice() {
  if (compHand == "" || randomResult === null) {
    randomResult = Math.floor(Math.random() * 3);
    if (randomResult === 0) {
      compHand = "rock";
    }
    if (randomResult === 1) {
      compHand = "paper";
    }
    if (randomResult === 2) {
      compHand = "scissors";
    }
  }

  return compHand;
}

function getHumanChoice() {
  if (hand === "" || hand === undefined || hand === null) {
    hand = String(prompt("What's your choose?"));
    if (
      hand.toLowerCase() === "rock" ||
      hand.toLowerCase() === "paper" ||
      hand.toLowerCase() === "scissors"
    ) {
      return hand.toLowerCase();
    }
  }
  return alert("must be rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
  console.log("human choose:", humanChoice);
  console.log("com choose:", computerChoice);

  if (humanChoice === computerChoice) {
    console.log("draw");
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  }
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
  }
  return console.log(`human: ${humanScore} vs com: ${computerScore}`);
}

function resetGame() {
  compHand == "";
  hand = "";
  randomResult = null;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("round", i + 1);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    resetGame();
  }
}
