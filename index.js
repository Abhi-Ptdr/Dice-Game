/*var randomNumber1 = Math.floor((Math.random() * 6) + 1) ;
//console.log(randomNumber1);

//var player1 = prompt("Enter the name of the First Player");
//var player2 = prompt("Enter the name of the second Player");

if (randomNumber1 === 6){
  document.querySelector("img#player1").setAttribute("src", "images/dice6.png");
}else if (randomNumber1 === 5){
  document.querySelector("img#player1").setAttribute("src", "images/dice5.png");
}else if (randomNumber1 === 4){
  document.querySelector("img#player1").setAttribute("src", "images/dice4.png");
}else if (randomNumber1 === 3){
  document.querySelector("img#player1").setAttribute("src", "images/dice3.png");
}else if (randomNumber1 === 2){
  document.querySelector("img#player1").setAttribute("src", "images/dice2.png");
}else {
  document.querySelector("img#player1").setAttribute("src", "images/dice1.png");
}

var randomNumber2 = Math.floor((Math.random() * 6) + 1) ;
//console.log(randomNumber2);

//var player1 = prompt("Enter the name of the First Player");
//var player2 = prompt("Enter the name of the second Player");

if (randomNumber2 === 6){
  document.querySelector("img#player2").setAttribute("src", "images/dice6.png");
}else if (randomNumber2 === 5){
  document.querySelector("img#player2").setAttribute("src", "images/dice5.png");
}else if (randomNumber2 === 4){
  document.querySelector("img#player2").setAttribute("src", "images/dice4.png");
}else if (randomNumber2 === 3){
  document.querySelector("img#player2").setAttribute("src", "images/dice3.png");
}else if (randomNumber2 === 2){
  document.querySelector("img#player2").setAttribute("src", "images/dice2.png");
}else {
  document.querySelector("img#player2").setAttribute("src", "images/dice1.png");
}


if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else {
  document.querySelector("h1").innerHTML = "Draw!"
}
*/

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else {
  document.querySelector("h1").innerHTML = "Draw!"
}
