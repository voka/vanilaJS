const todoForm = document.querySelector('.toDoForm'),
    toDoInput = todoForm.querySelector('input'),
    toDoList = document.querySelector('.toDoList');

const List = [];

function paintToDo(value){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.classList.add('shadow');
    delBtn.classList.add('font-black');
    delBtn.classList.add('text-pink-700');
    delBtn.classList.add('font-mono');
    delBtn.innerText = " X ";
    const span = document.createElement('span');
    span.innerText = value;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    var value = toDoInput.value;
    toDoInput.value = ""; 
    console.log(value);
    paintToDo(value);
}

function init(){
    todoForm.addEventListener('submit',handleSubmit);
}

init();