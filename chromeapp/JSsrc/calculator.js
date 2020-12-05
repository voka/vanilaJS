const msg = document.querySelector(".msg");
const Cal = document.querySelectorAll(".Cal"),
  Start = document.querySelectorAll(".Start"),
  Reset = document.querySelector(".Reset"),
  doEval = document.querySelector(".doEval");

let str = "";
let PreValue = "";
function evalMake(s) {
  if (PreValue + str === "") {
    if (s === "+" || s === "*" || s === "-" || s === "/" || s === ".") {
      alert("처음엔 숫자를 입력하세요!");
      return;
    } else {
      Do(s);
    }
  } else {
    if (
      PreValue.charAt(PreValue.length - 1) === "+" ||
      PreValue.charAt(PreValue.length - 1) === "*" ||
      PreValue.charAt(PreValue.length - 1) === "-" ||
      PreValue.charAt(PreValue.length - 1) === "/"
    ) {
      if (s === "+" || s === "*" || s === "-" || s === "/") {
        if (str === "") {
          alert("연산자를 두번연속 입력하지 마세요.");
          return false;
        }
        evalDo();
        str = str + s;
      } else {
        str = str + s;
        msg.innerHTML = str;
      }
    } else {
      Do(s);
    }
  }
}
function Do(s) {
  if (s === "+" || s === "*" || s === "-" || s === "/") {
    evalDo();
    str = str + s;
  } else {
    str = str + s;
    msg.innerHTML = str;
  }
}
function evalClear() {
  str = "";
  PreValue = "";
  msg.innerHTML = str;
}
function evalDo() {
  console.log(PreValue + str);
  if (PreValue + str === "") {
    alert("Please Press Button");
    return false;
  }
  str = String(eval(PreValue + str));
  msg.innerHTML = str;
  PreValue = "";
}
function triggerNum(event) {
  const BtnValue = event.target.value;
  evalMake(BtnValue);
}
function triggerCal(event) {
  PreValue = PreValue + str;
  str = "";
}
function init() {
  for (let i = 0; i < Cal.length; ++i) {
    Cal[i].addEventListener("click", triggerNum);
  }
  for (let i = 0; i < Start.length; ++i) {
    Start[i].addEventListener("click", triggerCal);
  }
  Reset.addEventListener("click", evalClear);
  doEval.addEventListener("click", evalDo);
}
init();
