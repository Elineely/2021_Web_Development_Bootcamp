var gamePattern = [ ];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function playAudio1(color){
  switch(color){
    case "red" :
      var redSound = new Audio("./sounds/red.mp3")
      redSound.play();
      break;
    case "yellow" :
      var yellowSound = new Audio("./sounds/yellow.mp3")
      yellowSound.play();
      break;
    case "green" :
      var greenSound = new Audio("./sounds/green.mp3")
      greenSound.play();
      break;
    case "blue" :
      var blueSound = new Audio("./sounds/blue.mp3")
      blueSound.play();
      break;
  }
}

var randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
playAudio1(randomChosenColor);
$("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);

var userClickedPattern = [ ];

$(".btn").click( function( ) {
  var chosenByUser = this.className.slice(4);
  playAudio1(chosenByUser);
  userClickedPattern.push(chosenByUser);
  return userClickedPattern;
});
