const loadValue = document.querySelector(".loadValue");
const range = document.querySelector(".Choose");
const GuessNum = document.querySelector(".GuessNum");
const chooseNum = document.querySelector(".chooseNum");
const wonOrlost = document.querySelector(".wonOrlost");
const Play = document.querySelector(".Play");

function getValue() {
  loadValue.innerHTML = range.value;
  console.log(range.value);
}

function Guess() {
  console.dir(GuessNum);
  if (GuessNum.value === "") {
    alert("choose your number");
    return false;
  }
  var ranNum = Math.floor(Math.random() * range.value);
  chooseNum.innerHTML = `You chose :${GuessNum.value}, the machine chose: ${ranNum}`;
  if (GuessNum.value === ranNum) {
    wonOrlost.innerHTML = "You Won!!";
  } else {
    wonOrlost.innerHTML = "You lost!";
  }
}

function init(){
  Play.addEventListener('click',Guess);
  range.addEventListener('input',getValue);
  console.log(range.value);
}
init();