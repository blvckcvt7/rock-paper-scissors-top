'use strict';

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num == 1) {
    return 'rock';
  } else if (num == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// function getHumanChoice() {
//   let choice = prompt('Select one: rock, paper, scissors');
//   return choice.toLowerCase();
// }

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  if (computerChoice == 'paper' && humanChoice == 'rock') {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice === humanChoice) {
    return `It's a tie! Both players selected ${computerChoice}!`;
  } else {
    humanScore++;
    return `Human wins! ${humanChoice} beats ${computerChoice}.`;
  }
}

let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let scissorsButton = document.querySelector('.scissors-button');
let body = document.querySelector('body');

let scoreDiv = document.createElement('div');
body.appendChild(scoreDiv);

function tracking() {
  rockButton.addEventListener('click', () => {
    scoreDiv.textContent = `${playRound(
      getComputerChoice(),
      'rock'
    )} | User Score: ${humanScore} | 
    Computer Score ${computerScore}`;
  });

  paperButton.addEventListener('click', () => {
    scoreDiv.textContent = `${playRound(
      getComputerChoice(),
      'paper'
    )} | User Score: ${humanScore} | 
    Computer Score ${computerScore}`;
  });

  scissorsButton.addEventListener('click', () => {
    scoreDiv.textContent = `${playRound(
      getComputerChoice(),
      'scissors'
    )} | User Score: ${humanScore} | 
    Computer Score ${computerScore}`;
  });
}

tracking();
