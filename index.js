
let userName = prompt("Input your name:");

const userScoreElement = document.querySelector('.user-won');
const computerScoreElement = document.querySelector('.computer-won');
const userNumberElement = document.querySelector('.usersnum');
const computerNumberElement = document.querySelector('.computernum');
const generateButton = document.querySelector('.generate');

let userScore = 0;
let computerScore = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

function updateScores() {
    userScoreElement.textContent = `${userName}: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function checkWinner() {
    if (userScore === 3) {
        alert(`${userName} won this game!`);
        resetGame();
    } else if (computerScore === 3) {
        alert(`Computer won this game!`);
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScores();
}

generateButton.addEventListener('click', () => {
    const userNumber = generateRandomNumber();
    const computerNumber = generateRandomNumber();

    userNumberElement.textContent = userNumber;
    computerNumberElement.textContent = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    updateScores();
    checkWinner();
});

updateScores();
