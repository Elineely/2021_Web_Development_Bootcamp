//variables

var gamePattern = [ ];
var userClickedPattern = [ ];

var level = 0;
var started = false;

var buttonColors = ["red", "blue", "green", "yellow"];


//functions
function nextSequence(){
  userClickedPattern = [ ];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  playAudio1(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);

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
      if(userClickedPattern.slice(0,i).length === gamePattern.length){
        setTimeout(function(){
          nextSequence();
        }, 1000);

      }
    } else{
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

  checkAnswer(userClickedPattern.length-1);
  });
}


//game start
$(document).keypress( function(){
  if(!started){
    $("#level-title").text("Level. " + level);
    nextSequence();
    started = true;
  }
});

usersTurn();
// checkAnswer(level);
//
// switch(checkAnswer(level)){
// case 1 :
//   while(level!=0 && checkAnswer(level)){
//     nextSequence();
//     usersTurn();
//     checkAnswer(level);
//   }
//   break;
// default :
//   level = 0;
//   gamePattern = [];
//   userClickedPattern = [];
//   started = false;
//   $("#level-title").text("Press A Key to Restart");
// }
