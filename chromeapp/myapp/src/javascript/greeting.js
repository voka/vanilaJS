const form = document.querySelector(".js-form"), input = form.querySelector("input"), greeting = document.querySelector(".js-greetings");

const USER_LS ="currentUser";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    //console.log(text);
}
function showing(target){
  target.style.display="block";
}
function hide(target){
  target.style.display="none";
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  hide(form);
  showing(greeting);
  greeting.innerText = `OH!!! superstar ${text}, HI!!`;
}

function loadName() {
  const currentUser=localStorage.getItem(USER_LS)
  if (currentUser==null){
    showing(form);
    hide(greeting);
    askForName();
  }
  else{
    hide(form);
    showing(greeting);
    paintGreeting(currentUser);
  }
}

function init(event){
  loadName();
}

init();
