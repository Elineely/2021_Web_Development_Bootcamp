//two random numbers
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);
//image1 - 리팩토링시에, 랜덤 넘버에 맞춰서 이미지 변경하는 함수를 만드는게 가독성이 좋을 듯.

if (randomNumber1 == 1){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice1.png");
}
if (randomNumber1 == 2){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice2.png");
}
if (randomNumber1 == 3){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice3.png");
}
if (randomNumber1 == 4){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice4.png");
}
if (randomNumber1 == 5){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice5.png");
}
if (randomNumber1 == 6){
  document.querySelector(".img1").setAttribute("src","./imagesDicee/dice6.png");
}

//image2

if (randomNumber2 == 1){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice1.png");
}
if (randomNumber2 == 2){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice2.png");
}
if (randomNumber2 == 3){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice3.png");
}
if (randomNumber2 == 4){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice4.png");
}
if (randomNumber2 == 5){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice5.png");
}
if (randomNumber2 == 6){
  document.querySelector(".img2").setAttribute("src","./imagesDicee/dice6.png");
}

//change the title to display a winner

if(randomNumber1 === randomNumber2){
  document.querySelector(".title").innerHTML = "Draw!";
}

if(randomNumber1 > randomNumber2){
  document.querySelector(".title").innerHTML = "<img class= 'flag' src='./imagesDicee/flag.png'> Player 1 wins!";
}

if(randomNumber1 < randomNumber2){
  document.querySelector(".title").innerHTML = " Player 2 wins! <img  class = 'flag' src='./imagesDicee/flag.png'>";
}
