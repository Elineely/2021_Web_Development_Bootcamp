
var buttonsDrum = document.querySelectorAll("button.drum");

var numberOfButtons = document.querySelectorAll("button.drum").length;

for(i = 0; i < numberOfButtons; i++){
  var audio = new Audio("./soundsDK/tom-1.mp3");
  buttonsDrum[i].addEventListener("click", function ( ) {
    audio.play( );
  });
}
