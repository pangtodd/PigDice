// business logic
let rollEl = document.getElementById("roll-el")
let turnScoreEl = document.getElementById("turnScore-el")
let totalScoreEl = document.getElementById("totalScore-el")

//See if you can put everything into two functions instead, making it call on player.1score, player.2score etc,....
function Player(score, turnScore, totalScore) {
  this.score = score;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player.score = 0
Player.totalScore = 0
roll = 0

function rollDiceP1() {
  roll = Math.floor(Math.random() * 6) + 1;
  //If statements for adding totalScore, Score, etc...
    if (roll === 1) { 
      Player.score = 0    
    } else { 
      Player.score = (Player.score + roll)
      Player.turnScore = (Player.score)
      Player.totalScore = Player.turnScore
    }
    //Winning If statements
    if (Player.totalScore >= 100) {
      console.log("YOU WIN")
    }
  console.log("current roll: "+roll)
  console.log("Score: "+Player.score)
  console.log("Turn Score: "+Player.turnScore)
  console.log("Total Score: " + Player.totalScore)
  rollEl.textContent = "current roll: " + roll
  turnScoreEl.textContent = "Score: " + Player.score
  totalScoreEl.textContent = "Turn Score: " + Player.turnScore
}

function saveRollP1() {

  
}


