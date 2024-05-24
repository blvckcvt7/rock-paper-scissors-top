'use strict';

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  return num;
}

console.log(getComputerChoice());
