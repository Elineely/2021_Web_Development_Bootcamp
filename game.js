//variables

var gamePattern = [ ];

var level = 0;

var started = false;

var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [ ];

//functions
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playAudio1(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
  level++;
  return gamePattern, level;
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

function animatePress(currerntColor){
  $("#" + currerntColor).toggleClass("pressed");
  setTimeout(() => $("#" + currerntColor).toggleClass("pressed"), 100);
}

function checkAnswer(currentLevel){
  for(i=0 ; i <= currentLevel; i++){
    if(gamePattern[i] === userClickedPattern[i]){
      console.log("success");
      return 1;
    }else{
      console.log("wrong");
      return 0;
    }
  }
}

function usersTurn() {
  $(".btn").click( function( ) {
  var chosenByUser = this.id;
  playAudio1(chosenByUser);
  animatePress(chosenByUser);
  userClickedPattern.push(chosenByUser);
  return userClickedPattern;
  });
}


//game start
$(document).keypress( function(){
  if(!started){
    $("#level-title").text("Level. " + level);
    setTimeout(() =>nextSequence(), 700);
    started = true;

    usersTurn();
    if(userClickedPattern[0]){
      if(level = 0){checkAnswer(0)
      nextSequence()
      usersTurn()}
      while(level!=0 && checkAnswer(level)){
        nextSequence();
        usersTurn();
        checkAnswer(level);
      }

    }

  }
});
