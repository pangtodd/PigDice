// business logic


function Player(firstName, score, turn) {
  this.firstName = firstName;
  this.score = score;
  this.turn = turn;

Player.score = 0

function rollDice() {
  roll = Math.floor(Math.random() * 6) + 1;

  switch(roll) {
    case('1',1):
      Player.score = 0;
      Player.turn = false;
      break;
    default:
      Player.score=(Player.score + roll)
      break;
  }
  
  console.log("current roll: "+roll)
  console.log("overall Score: "+Player.score)
}
