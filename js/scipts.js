// business logic


function Player(firstName, score) {
  this.firstName = firstName;
  this.score = score;
}
Player.score = 0

function rollDice() {
  roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) { 
      Player.score = 0    
    } else { 
      Player.score= (Player.score + roll)
    }
  console.log("current roll: "+roll)
  console.log("overall Score: "+Player.score)
}
