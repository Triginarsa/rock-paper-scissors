let humanScore = 0;
let computerScore = 0;
let hand = "";
let compHand = "";
let randomResult = null;

var humanScoreDiv = document.getElementById("human-score");
var comScoreDiv = document.getElementById("com-score");
var congratsDiv = document.getElementById("congrats");

humanScoreDiv.innerHTML = humanScore;
comScoreDiv.innerHTML = computerScore;

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

function getHumanChoice(handInput) {
  if (hand === "" || hand === undefined || hand === null) {
    hand = handInput;
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
  humanScoreDiv.innerHTML = humanScore;
  comScoreDiv.innerHTML = computerScore;
  return console.log(`human: ${humanScore} vs com: ${computerScore}`);
}

function resetRound() {
  compHand == "";
  hand = "";
  randomResult = null;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDiv.innerHTML = humanScore;
  comScoreDiv.innerHTML = computerScore;
}

function winnerBanner() {
  let congratsText = "";
  if (humanScore === 5) {
    congratsText = "congrats human";
    congratsDiv.innerHTML = congratsText;
    resetGame();
    return console.log(congratsText);
  }
  if (computerScore === 5) {
    congratsText = "congrats computer";
    congratsDiv.innerHTML = congratsText;
    resetGame();
    return console.log(congratsText);
  }
}

function playGame(handInput) {
  const humanSelection = getHumanChoice(handInput);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  resetRound();
  congratsDiv.innerHTML = "";
  winnerBanner();
}
