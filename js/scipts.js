// business logic

//See if you can put everything into two functions instead, making it call on player.1score, player.2score etc,....
function Player(score, totalScore) {
  this.score = score;
  this.totalScore = totalScore;
}
Player.score = 0
Player.totalScore = 0

function rollDice() {
  roll = Math.floor(Math.random() * 6) + 1;
  //If statements for adding totalScore, Score, etc...
    if (roll === 1) { 
      Player.score = 0    
    } else { 
      Player.totalScore= (Player.totalScore + roll) 
      Player.score = (Player.score + roll)
    }
    //Winning If statements
    if (Player.totalScore >= 100) {
      console.log("YOU WIN")
    }
  console.log("current roll: "+roll)
  console.log("Turn Score: "+Player.score)
  console.log("Total Score: " + Player.totalScore)
}

rollDice()
