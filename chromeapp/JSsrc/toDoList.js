const todoForm = document.querySelector('.toDoForm'),
    toDoInput = todoForm.querySelector('input'),
    PENDING = document.querySelector('.Pending'),
    FINISHED = document.querySelector('.Finished');

let Pend_List = [];
let Finish_List = [];
const Pending = "PENDING";
const Finished = "FINISHED";
const p = PENDING.className;
const f = FINISHED.className;

function paintToDo(flag,value){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const delImage = document.createElement('img');
    const saveBtn = document.createElement('button');
    const saveImage = document.createElement('img');
    //button style start
    delImage.setAttribute("src","../img/X.png");
    saveImage.setAttribute("src","../img/save.jpg");
    delImage.style.width = '25px';
    saveImage.style.width = '25px';
    delImage.style.height = '25px';
    saveImage.style.height = '25px';
    delBtn.classList.add('shadow');
    saveBtn.classList.add('shadow');
    delBtn.appendChild(delImage);
    saveBtn.appendChild(saveImage);
    //button style end
    
    const span = document.createElement('span');
    span.innerText = value + "  ";
    li.appendChild(span);
    saveBtn.addEventListener('click',push);
    delBtn.addEventListener('click',del);
    
    li.appendChild(delBtn);
    li.appendChild(saveBtn);
    if(flag === Pending){
        const index = Pend_List.length+1;
        li.id = index;
        const todo_obj ={
            text: value, id: index
        };
        PENDING.appendChild(li);
        Pend_List.push(todo_obj);
        save_pend();
    }
    else{
        const index = Pend_List.length+1;
        li.id = index;
        const todo_obj ={
            text: value, id: index
        };
        FINISHED.appendChild(li);
        Finish_List.push(todo_obj);
        save_finish();
    }
    
}
function del(event){
    const Btn = event.target.parentElement
    const li  = Btn.parentElement;
    if(li.parentElement.className== p){
        PENDING.removeChild(li);
        const cleanarray = Pend_List.filter(function(pend){
            return pend.id != parseInt(li.id);
        })
        Pend_List = cleanarray;
        save_pend();
    }
    else{
        FINISHED.removeChild(li);
        const cleanarray = Finish_List.filter(function(toDo){
            return toDo.id != parseInt(li.id);
        })
        Finish_List = cleanarray;
        save_finish();
    }
   
}
//local Storage에 저장
function save_pend(event){
    localStorage.setItem(Pending,JSON.stringify(Pend_List));
}
function save_finish(event){
    localStorage.setItem(Finished,JSON.stringify(Finish_List));
}

//데이터 보내기
function push(event){
    const Btn = event.target.parentElement
    const li  = Btn.parentElement;
    if(li.parentElement.className== p){
        PENDING.removeChild(li);
        FINISHED.appendChild(li);
        const cleanarray = Pend_List.filter(function(pend){
            return pend.id != parseInt(li.id);
        })
        const temp ={
            text: li.children[0].innerText, id: li.id
        };
        Finish_List.push(temp);
        Pend_List = cleanarray;
    }
    else{
        FINISHED.removeChild(li);
        PENDING.appendChild(li);
        const cleanarray = Finish_List.filter(function(todo){
            return todo.id != parseInt(li.id);
        })
        const temp ={
            text: li.children[0].innerText, id: li.id
        };
        Pend_List.push(temp);
        Finish_List = cleanarray;
    }
    
    save_pend();
    save_finish();

}
//local storage 불러오기
function load_pend(){
    const loaded_pend = localStorage.getItem(Pending);
    if(loaded_pend){
            const parsedPend = JSON.parse(loaded_pend);
            parsedPend.forEach(function(pend){
            paintToDo(Pending,pend.text);
        });
    }
}
function load_finish(){
    const loaded_todo = localStorage.getItem(Finished);
    if(loaded_todo){
        const parsedtodo = JSON.parse(loaded_todo);
        parsedtodo.forEach(function(todo){
        paintToDo(Finished,todo.text);
    });
}
}
function handleSubmit(event){
    event.preventDefault();
    var value = toDoInput.value;
    toDoInput.value = ""; 
    console.log(value);
    paintToDo(Pending,value);
}

function init(){
    todoForm.addEventListener('submit',handleSubmit);
    load_pend();
    load_finish();
}

init();