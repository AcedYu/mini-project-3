//screen prompt ask for choice of rock paper scissors (automatic)
//after accepting input determines opponent input
//determine opponent input by using random number generator Math.floor(Math.random()*3)
//determine the game result by comparing user input with opponent input
//display the result
//display score
//prompt play again
var moves =['R', 'P', 'S'];
var wins = 0;
var losses = 0;
var draws = 0;

function game() {
  var userMove = prompt("Enter R, P, S (Rock, Paper, Scissors): ");
  userMove = userMove.toUpperCase();
  if (userMove === 'R' || userMove === 'P' || userMove === 'S') {
    var randomNum = Math.floor(Math.random()*3);
    var aiMove = moves[randomNum];
    alert("Opponent chooses " + aiMove + "!");
    var result = getResult(userMove, aiMove);
    alert(result);
    if(result === 'You Win!') {
      wins++;
    } else if (result === 'You Lose!') {
      losses++;
    } else {
      draws++;
    }
    alert("Your Score: \nWins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);
    var rematch = confirm("Would you like to play again?");
    if(rematch) {
      game();
    }
  } else {
    alert("You must choose R, P, or S");
    game();
  }
}

function getResult(user, ai) {
  if (user === 'R') {
    if (ai === 'P') {
      return 'You Lose!';
    } else if (ai === 'S') {
      return 'You Win!';
    } else {
      return 'Draw!';
    }
  }
  if (user === 'P') {
    if (ai === 'S') {
      return 'You Lose!';
    } else if (ai === 'R') {
      return 'You Win!';
    } else {
      return 'Draw!';
    }
  }
  if (user === 'S') {
    if (ai === 'R') {
      return 'You Lose!';
    } else if (ai === 'P') {
      return 'You Win!';
    } else {
      return 'Draw!';
    }
  }
}

game();