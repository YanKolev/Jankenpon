const buttonRock = document.getElementById("Rock");
const buttonPaper = document.getElementById("Paper");
const buttonScissors = document.getElementById("Scissors");

let gamesCounter = 0;
let playerWinCount = 0;
let computerWinCount = 0;

buttonRock.addEventListener("click", () => {
  playGame("Rock");
  gamesCounter++;
});
buttonPaper.addEventListener("click", () => {
  playGame("Paper");
  gamesCounter++;
});
buttonScissors.addEventListener("click", () => {
  playGame("Scissors");
  gamesCounter++;
});

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
  /* Using a return value is preffered to using a global variable, 
        as the scope will prevent us naming conflicts
        Best Practice: Keep Variables inside a scope (if you can)*/
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  }
  //Reusing the function to call inside a functions.
  console.log(
    `You picked ${playerMove}. Computer picked ${computerMove}.${result}`
  );
  checkGame(result);
}

function checkGame(result) {
  console.log(computerWinCount, playerWinCount);
  if (result === "You lose.") {
    computerWinCount++;
  } else if (result === "You win.") {
    playerWinCount++;
  }
  if (computerWinCount === 5) {
    console.log("The Computer Won the game!");
    playerWinCount = 0;
    computerWinCount = 0;
  } else if (playerWinCount === 5) {
    console.log("You won");
    playerWinCount = 0;
    computerWinCount = 0;
  }
}
