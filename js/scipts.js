///PLAYER 1 ----------------------
var rollP1El = document.getElementById("rollP1-el")
var turnScoreP1El = document.getElementById("turnScoreP1-el")
var totalScoreP1El = document.getElementById("totalScoreP1-el")
////PLAYER 2 ---------------------
var rollP2El = document.getElementById("rollP2-el")
var turnScoreP2El = document.getElementById("turnScoreP2-el")
var totalScoreP2El = document.getElementById("totalScoreP2-el")
//PLAYER 1 OBJECT -------------
/// Refactor object code 
//create a win fucntion
function Player1(score, turnScore, totalScore) {
  this.score = score;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player1.score = 0
Player1.totalScore = 0
//PLAYER 2 OBJECT -------------
function Player2(score, turnScore, totalScore) {
  this.score = score;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player2.score = 0
Player2.totalScore = 0
//Disable Function---------------------------
function disableP1(){
  document.getElementById("p2Roll").disabled = false;
  document.getElementById("p2Save").disabled = false; 
  document.getElementById("p1Roll").disabled = true;
  document.getElementById("p1Save").disabled = true;
}
function disableP2(){
  document.getElementById("p2Roll").disabled = true;
  document.getElementById("p2Save").disabled = true; 
  document.getElementById("p1Roll").disabled = false;
  document.getElementById("p1Save").disabled = false;
}
// ROLL DICE P1---------------
function rollDiceP1() {
  p1Roll = Math.floor(Math.random() * 6) + 1;
    if (p1Roll === 1) { 
      Player1.score = 0 
      Player1.turnScore = 0 
      disableP1()
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
      disableP2()  
    } else { 
      Player2.score = (Player2.score + p2Roll)
      Player2.turnScore = (Player2.score)
    }
  rollP2El.textContent = "current roll: " + p2Roll
  turnScoreP2El.textContent = "Score: " + Player2.score
}
//SAVE ROLL P1 --------------
//take math out of save function
function saveRollP1() {
  Player1.totalScore = Player1.totalScore + Player1.turnScore
  totalScoreP1El.textContent = "Total Score: " + Player1.totalScore
    disableP1()
    Player1.score = 0
    Player1.turnScore = 0
    if (Player1.totalScore + Player1.turnScore >= 10 ) {
      console.log("Player  1 wins")
    }
}

//SAVE ROLL P2 --------------
function saveRollP2() {
  Player2.totalScore = Player2.totalScore + Player2.turnScore
  totalScoreP2El.textContent = "Total Score: " + Player2.totalScore
    disableP2()
      Player2.score = 0
      Player2.turnScore = 0
      //create a win function
      if (Player2.totalScore + Player2.turnScore >= 10) {
        console.log("Player  2 wins")
      }
}
 
//Setting the Player 1 as the starting player
$(document).ready(function() {
  document.getElementById("p2Roll").disabled = true;
  document.getElementById("p2Save").disabled = true;

})




