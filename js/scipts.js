///PLAYER 1: Grabbing ID from html and turning them into variables------------
var rollP1El = document.getElementById("rollP1-el")
var turnScoreP1El = document.getElementById("turnScoreP1-el")
var totalScoreP1El = document.getElementById("totalScoreP1-el")
////PLAYER 2: Grabbing ID from html and turning them into variables-----------
var rollP2El = document.getElementById("rollP2-el")
var turnScoreP2El = document.getElementById("turnScoreP2-el")
var totalScoreP2El = document.getElementById("totalScoreP2-el")
//PLAYER 1 OBJECT ------------------------------------------------------------
/// Refactor object code 
function Player1(turnScore, totalScore) {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
//Defining Player1 variables -------------------------------------------------
Player1.totalScore = 0
Player1.turnScore = 0
//PLAYER 2 OBJECT ------------------------------------------------------------
function Player2(turnScore, totalScore) {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
//Defining Player2 variables--------------------------------------------------
Player2.totalScore = 0
Player2.turnScore = 0
//Disable and Enable Button Function------------------------------------------
function disableP1EnableP2(){
  document.getElementById("p2Roll").disabled = false;
  document.getElementById("p2Save").disabled = false; 
  document.getElementById("p1Roll").disabled = true;
  document.getElementById("p1Save").disabled = true;
}
function disableP2EnableP1(){
  document.getElementById("p2Roll").disabled = true;
  document.getElementById("p2Save").disabled = true; 
  document.getElementById("p1Roll").disabled = false;
  document.getElementById("p1Save").disabled = false;
}
//WIN CHECK FUNCTION---------------------------------------------------------------
function winCheck() {
  if (Player1.totalScore + Player1.turnScore >= 100 ) {
    document.getElementById("game").style.display = "none";
    document.getElementById("p1Win").style.display = "block";
  } else if (Player2.totalScore + Player2.turnScore >= 100) {
    document.getElementById("game").style.display = "none";
    document.getElementById("p2Win").style.display = "block";
  }
}
///CHANGE IMAGE LAYER 1 ----------------------------------------------------------
function changeImageP1() {
  var p1Image = document.getElementById("p1Image");
  if (p1Roll === 1) {
    p1Image.src = "img/1P1.jpg";
  } else if ( p1Roll === 2) {
    p1Image.src = "img/2P1.jpg";
  }  else if ( p1Roll === 3) {
    p1Image.src = "img/3P1.jpg";
  } else if ( p1Roll === 4) {
    p1Image.src = "img/4P1.jpg";
  } else if ( p1Roll === 5) {
    p1Image.src = "img/5P1.jpg";
  } else if ( p1Roll === 6) {
    p1Image.src = "img/6P1.jpg";
  }  
}
//CHANGE IMAGE PLAYER 2 -----------------------------------------------------------
function changeImageP2() {
  var p2Image = document.getElementById("p2Image");
  if ( p2Roll === 1) {
    p2Image.src = "img/1P2.jpg";
  }  else if ( p2Roll === 2) {
    p2Image.src = "img/2P2.jpg";
  } else if ( p2Roll === 3) {
    p2Image.src = "img/3P2.jpg";
  } else if ( p2Roll === 4) {
    p2Image.src = "img/4P2.jpg";
  } else if ( p2Roll === 5) {
    p2Image.src = "img/5P2.jpg";
  }  else if ( p2Roll === 6) {
    p2Image.src = "img/6P2.jpg";
  } 
}

// function computerMove() {
//   rollDiceP2()
//   rollDiceP2()
//   saveRollP2
// }

// ROLL DICE P1--------------------------------------------------------------
function rollDiceP1() {
  p1Roll = Math.floor(Math.random() * 6) + 1;
      if (p1Roll === 1) { 
        Player1.turnScore = 0 
        disableP1EnableP2()
        // computerMove()
      } else { 
        Player1.turnScore = Player1.turnScore + p1Roll
      }
    rollP1El.textContent = "Current Dice Roll: " + p1Roll
    turnScoreP1El.textContent = "Turn Score: " + Player1.turnScore
    changeImageP1()
    winCheck()
}
// ROLL DICE P2--------------------------------------------------------------
function rollDiceP2() {
  p2Roll = Math.floor(Math.random() * 6) + 1;
    if (p2Roll === 1) { 
      Player2.turnScore = 0 
      disableP2EnableP1()  
    } else { 
      Player2.turnScore = (Player2.turnScore + p2Roll)
    }
  rollP2El.textContent = "Current Dice Roll: " + p2Roll
  turnScoreP2El.textContent = "Turn Score: " + Player2.turnScore
  changeImageP2()
  winCheck()
}
//SAVE ROLL P1 --------------------------------------------------------------
function saveRollP1() {
  Player1.totalScore = Player1.totalScore + Player1.turnScore
  totalScoreP1El.textContent = "Total Score: " + Player1.totalScore
  Player1.turnScore = 0
  disableP1EnableP2()
}

//SAVE ROLL P2 --------------------------------------------------------------
function saveRollP2() {
  Player2.totalScore = Player2.totalScore + Player2.turnScore
  totalScoreP2El.textContent = "Total Score: " + Player2.totalScore
  Player2.turnScore = 0
    disableP2EnableP1()
}
 
//Setting the Player 1 as the starting player--------------------------------
$(document).ready(function() {
  document.getElementById("p2Roll").disabled = true;
  document.getElementById("p2Save").disabled = true;

})




