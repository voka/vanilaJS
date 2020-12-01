const todoForm = document.querySelector('.toDoForm'),
    toDoInput = todoForm.querySelector('input'),
    toDoList = document.querySelector('.toDoList');

const List = [];

function paintToDo(value){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const delImage = document.createElement('img');
    const saveBtn = document.createElement('button');
    const saveImage = document.createElement('img');
    delImage.setAttribute("src","img/X.png");
    saveImage.setAttribute("src","img/save.jpg");
    delImage.style.width = '25px';
    saveImage.style.width = '25px';
    delImage.style.height = '25px';
    saveImage.style.height = '25px';
    delBtn.classList.add('shadow');
    saveBtn.classList.add('shadow');
    delBtn.appendChild(delImage);
    saveBtn.appendChild(saveImage);
    const span = document.createElement('span');
    span.innerText = value;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(saveBtn);
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