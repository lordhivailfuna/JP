
var JackHand = Math.floor(Math.random() * 3) + 1;
var randomHandSourceJack = "Images/Jack" + JackHand + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomHandSourceJack);

var PoyHand = Math.floor(Math.random() * 3) + 1;
var randomHandSourcePoy = "Images/Poy" + PoyHand + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomHandSourcePoy);


if (JackHand == 1 && PoyHand == 2){
  document.querySelector("h1").innerHTML = "Jack Wins!";
}
if (JackHand == 2 && PoyHand == 3){
  document.querySelector("h1").innerHTML = "Jack Wins!";
}
if (JackHand == 3 && PoyHand == 1){
  document.querySelector("h1").innerHTML = "Jack Wins!";
}

if (PoyHand == 1 && JackHand == 2){
  document.querySelector("h1").innerHTML = "Poy Wins!";
}
if (PoyHand == 2 && JackHand == 3){
  document.querySelector("h1").innerHTML = "Poy Wins!";
}
if (PoyHand == 3 && JackHand == 1){
  document.querySelector("h1").innerHTML = "Poy Wins!";
}

if (PoyHand == JackHand){
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
