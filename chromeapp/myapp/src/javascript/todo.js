
const toDoForm = Actual.querySelector(".js-toDoForm"),
  toDoInput = Actual.querySelector(".js-toDoInput"),
  toDoList = Actual.querySelector(".js-toDoList");


const TODO_LS= "todo";

let toDos = [];

function paintToDo(text){
  const index = toDos.length+1;
  const li = document.createElement("li");
  li.classList.add("toDo-list-item");
  li.innerText = text;
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.classList.add("Mask");
  span.classList.add("font-black");
  const spanChild = document.createElement("span");
  spanChild.innerText = text;
  span.appendChild(spanChild);
  delBtn.innerText = "❌";
  delBtn.addEventListener("click",del_todos);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = index;
  toDoList.appendChild(li);
  const todo_obj ={
    text: text, id: index
  };
  toDos.push(todo_obj);
  save_todo();
}
//JSON.stringfy() 괄호 안에 있는자바스크립트를 스트링으로 변환해준다.
function save_todo(){
  localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}
// filter함수의 조건을 만족시키는 경우에만 통과시키겠다

function del_todos(event){

  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  })
  toDos = cleanToDos;
  save_todo();
}

function reset_input(){
  toDoForm.reset();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=toDoInput.value;
  console.log(currentValue);
  paintToDo(currentValue);
  reset_input();
}
//JSON -> JAVA Script Object Notation -> string-> 자바스크립트로 변환해줌
function load_to_do(){
  const loaded_todos = localStorage.getItem(TODO_LS);
  if(loaded_todos){
    const parsedToDos = JSON.parse(loaded_todos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });

  }
}
function init(){
  load_to_do();
  toDoForm.addEventListener("submit",handleSubmit);

}

init();
