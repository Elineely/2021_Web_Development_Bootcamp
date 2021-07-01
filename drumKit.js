
var buttonsDrum = document.querySelectorAll("button.drum");

var numberOfButtons = document.querySelectorAll("button.drum").length;

for(i = 0; i < numberOfButtons; i++){
  buttonsDrum[i].addEventListener("click", function ( ) {
  //this.setAttribute("style", "color : white;");
  var bottonsInnerHTML = this.innerHTML;

  switch (bottonsInnerHTML) {
    case "w":
      var tom1 = new Audio("./soundsDK/tom-1.mp3");
      tom1.play( );
      break;
    case "a":
      var tom2 = new Audio("./soundsDK/tom-2.mp3");
      tom2.play( );
      break;
    case "s":
      var tom3 = new Audio("./soundsDK/tom-3.mp3");
      tom3.play( );
      break;
    case "d":
      var tom4 = new Audio("./soundsDK/tom-4.mp3");
      tom4.play( );
      break;
    case "j":
      var crash = new Audio("./soundsDK/crash.mp3");
      crash.play( );
      break;
    case "k":
      var kickBass = new Audio("./soundsDK/kick-bass.mp3");
      kickBass.play( );
      break;
    case "l":
      var snare = new Audio("./soundsDK/snare.mp3");
      snare.play( );
      break;
    default:

  }

  });
}
