'use strict';
// business logic
///PLAYER 1 ----------------------
let roll1El = document.getElementById("rollP1-el")
let turnScoreP1El = document.getElementById("turnScoreP1-el")
let totalScoreP1El = document.getElementById("totalScoreP1-el")
////PLAYER 2 ---------------------
let rollP2El = document.getElementById("rollP2-el")
let turnScoreP2El = document.getElementById("turnScoreP2-el")
let totalScoreP2El = document.getElementById("totalScoreP2-el")
//PLAYER 1 OBJECT -------------
function Player1(score, turnScore, totalScore) {
  this.score = score;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player1.score = 0
Player1.totalScore = 0
let p1Roll = 0
//PLAYER 2 OBJECT -------------
function Player2(score, turnScore, totalScore) {
  this.score = score;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player2.score = 0
Player2.totalScore = 0
let p2Roll = 0
// ROLL DICE P1---------------
function rollDiceP1() {
  p1Roll = Math.floor(Math.random() * 6) + 1;
    if (p1Roll === 1) { 
      Player1.score = 0 
      Player1.turnScore = 0   
    } else { 
      Player1.score = (Player1.score + p1Roll)
      Player1.turnScore = (Player1.score)
    }
  rollP1El.textContent = "current roll: " + p1Roll
  turnScoreP1El.textContent = "Score: " + Player1.score
}
// ROLL DICE P2---------------
function rollDiceP2() {
  p2Roll = Math.floor(Math.random() * 6) + 1;
    if (p2Roll === 1) { 
      Player2.score = 0 
      Player2.turnScore = 0   
    } else { 
      Player2.score = (Player2.score + p2Roll)
      Player2.turnScore = (Player2.score)
    }
  rollP2El.textContent = "current roll: " + p2Roll
  turnScoreP2El.textContent = "Score: " + Player2.score
}
//SAVE ROLL P1 --------------
function saveRollP1() {
  Player1.totalScore = Player1.totalScore + Player1.turnScore
  totalScoreP1El.textContent = "Total Score: " + Player1.totalScore
    if (Player1.totalScore + Player1.turnScore >= 100) {
      console.log("Player  1 wins")
    }
}
//SAVE ROLL P2 --------------
function saveRollP2() {
  Player2.totalScore = Player2.totalScore + Player2.turnScore
  totalScoreP2El.textContent = "Total Score: " + Player2.totalScore
    if (Player2.totalScore + Player2.turnScore >= 100) {
      console.log("Player  2 wins")
    }
}


