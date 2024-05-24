'use strict';

let computerScore = 0;
let humanScore = 0;

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

// console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt('Select one: rock, paper, scissors');
  return choice.toLowerCase();
}

// console.log(getHumanChoice());
