var gamePattern = [ ];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
