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

function getHumanChoice() {
  let choice = prompt('Select one: rock, paper, scissors');
  return choice.toLowerCase();
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (computerChoice == 'paper' && humanChoice == 'rock') {
      computerScore++;
      return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
      computerScore++;
      return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
      computerScore++;
      return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice == humanChoice) {
      return `It's a tie! Both players selected ${computerChoice}!`;
    } else {
      humanScore++;
      return `Human wins! ${humanChoice} beats ${computerChoice}.`;
    }
  }
  // Loop to play 5 rounds of the game

  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (computerScore > humanScore) {
    console.log(
      `Computer wins with a score of ${computerScore} vs ${humanScore}.`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `Human wins with a score of ${humanScore} vs ${computerScore}.`
    );
  } else {
    console.log(
      `It's a tie! both players scored ${humanScore}! Play another game.`
    );
  }
}

playGame();
