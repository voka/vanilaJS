const board = document.querySelector(".js-toDoForm > input");
const current_state = document.querySelector(".js-toDoForm > button")
const reset = document.querySelector(".reset_B");
//const L_T_Paint = document.querySelector(".link_to_paint");
//console.log(board);
//console.log(current_state);

const Showing_on = "show_inline";
const Hide = "hide"

// plag가 0이면 숨겨진 상태
// plag가 1이면 보이는 상태



function reset_click(event){
  event.preventDefault();
  localStorage.clear();
  location.reload(true);
}


let plag=0;
function handleClick(event){
  event.preventDefault();
  del_btn();
  plag == 0 ? showing() : hide();
  plag = !plag ;
}
function showing(event){
  show_angle_left();
  board.classList.remove(Hide);
  board.classList.add(Showing_on);
}

function hide(event){
  show_angle_right();
  board.classList.remove(Showing_on);
  board.classList.add(Hide);
}

function show_angle_right(){
  const right_i = document.createElement("i");
  right_i.className = "fas fa-angle-right fa-2x";
  current_state.appendChild(right_i);
}

function show_angle_left(){
  const left_i = document.createElement("i");
  left_i.className = "fas fa-angle-left fa-2x";
  current_state.appendChild(left_i);
}

function del_btn(){
  const c_s = current_state;
  while(c_s.hasChildNodes()){
    //console.log(c_s.firstChild);
    c_s.removeChild(c_s.firstChild);
  }

  
}
/*
function paint(event){
  event.preventDefault();
  const a = document.createElement("a");
  a.href = "https://clever-payne-b1ceee.netlify.app";
  a.target = "_blank";
  a.title = "PaintBoard";
  a.innerText = "Paint";
  L_T_Paint.appendChild(a);
}*/


function init(){
  board.classList.add(Hide);
  show_angle_right();
  current_state.addEventListener("click",handleClick);
  reset.addEventListener("click",reset_click);
  //L_T_Paint.addEventListener("click",paint);
}


init();
