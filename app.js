let ramdumnumber1 = Math.floor(Math.random() * 6) + 1;
let ramdumnumber2 = Math.floor(Math.random() * 6) + 1;

let randumi1 = "images/dice" + ramdumnumber1 + ".png";
let randumi2 = "images/dice" + ramdumnumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randumi1);
document.querySelectorAll("img")[1].setAttribute("src", randumi2);

if (ramdumnumber1 > ramdumnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (ramdumnumber1 < ramdumnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
