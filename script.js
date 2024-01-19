/*function gamePlay(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return "Player wins";
    } else if (computerSelection > playerSelection){
        return "Computer wins";
    } else (computerSelection === playerSelection);{
        return "It's a Tie";
    }
        
}*/

/*Leet Code version
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
let computerSelection = getComputerChoice();
console.log("Computer choice: ",computerSelection);*/

/*function getComputerChoice(){
    let choice = Math.random() * 3;
if (choice <= 1) {
    choice = "Rock";
} else if (choice <= 2) {
    choice = "Paper";
} else {
    choice = "Scissors";
}
return choice;// if your forget the return function it returns undefined as error
}
let computerSelection = getComputerChoice();*/


/*document.getElementById("Rock").addEventListener("click",function())*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//let computerMove = ''; (Using return value is better as we use scope) declaring a Global Variable, so it can be used in all functions.
//Return = gets a value out of a function
//Parameter of a function = puts a value into a function- works same way as a variable- it can store value
// ------------------------------------------------------
// that is not a good practice

// document.getElementById('Rock').onclick = function () {
//     playGame('Rock');
// }

// document.getElementById('Paper').onclick = function() {
//     playGame('Paper');
// }

// document.getElementById('Scissors').onclick = function() {
//        playGame('Scissors');
//     }


const buttonRock = document.getElementById('Rock');
const buttonPaper = document.getElementById('Paper')
const buttonScissors = document.getElementById('Scissors')

let gamesCounter = 0
let playerWinCount = 0
let computerWinCount = 0

buttonRock.addEventListener('click', () => {
    playGame('Rock')
    gamesCounter++
})
buttonPaper.addEventListener('click', () => {
    playGame('Paper')
    gamesCounter++
})
buttonScissors.addEventListener('click', () => {
    playGame('Scissors')
    gamesCounter++
})

function pickComputerMove(){
        const randomNumber = Math.random();

        let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber
        < 1 / 3) {
            computerMove ='Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
            computerMove = 'Paper';
        } else if (randomNumber >= 2 /3 && randomNumber < 1){
            computerMove = 'Scissors';
        }
    
        return computerMove;
        /* Using a return value is preffered to using a global variable, 
        as the scope will prevent us naming conflicts
        Best Practice: Keep Variables inside a scope (if you can)*/
}

function playGame(playerMove){
    const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'Rock'){
            if (computerMove === 'Rock'){
                result = 'Tie.';
            } else if (computerMove === 'Paper'){
                result = 'You lose.';
            } else if (computerMove === 'Scissors'){
            result = 'You win.'; 
            }

        } else if (playerMove === 'Paper'){
            if (computerMove === 'Rock'){
                result = 'You win.';
            } else if (computerMove === 'Paper'){
                result = 'Tie.';
            } else if (computerMove === 'Scissors'){
            result = 'You lose.'; 
            }

        } else if(playerMove === 'Scissors'){
            if (computerMove === 'Rock'){
                result = 'You lose.';
            } else if (computerMove === 'Paper'){
                result = 'You win.';
            } else if (computerMove === 'Scissors'){
            result = 'Tie.'; 
            }
        }
        //Reusing the function to call inside a functions.
        alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}`);
        checkGame(result)
    }

function checkGame(result) {
    console.log(computerWinCount, playerWinCount)
    if (result === 'You lose.'){
        computerWinCount++
        
    } else if (result === 'You win.') {
        playerWinCount++
    }
    if (computerWinCount === 5) {
        alert('The Computer Won the game!')
        playerWinCount = 0
        computerWinCount = 0
    } else if(playerWinCount === 5) {
        alert('You won')
        playerWinCount = 0
        computerWinCount = 0
    }
}