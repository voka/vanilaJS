// JS available on https://github.com/colinlohner/toDo-JS


//Setup

const div = document.createElement('div');
div.setAttribute('id', 'toDo_actual');
document.body.appendChild(div);
const toDo = document.querySelectorAll('.toDo');
const Actual = document.querySelector('#toDo_actual');
Actual.style.position = "absolute";
const BtnClose = document.createElement('div');
    BtnClose.setAttribute('id','close');
     BtnClose.innerHTML = "Close";
     BtnClose.addEventListener('click',closetoDo);
     BtnClose.classList.add('h-20');
const superStar = document.querySelector('.superStar');
const HIDE ="hide";


let toDoForm,
      toDoInput,
      toDoList;

const TODO_LS= "todo";

let toDos = [];


let position = {};
let size = {};


//modal action stuffs
function opentoDo(event) {
    const Menu = event.currentTarget;
    
	position = Menu.getBoundingClientRect();
	size = {
		width: window.getComputedStyle(Menu).width,
		height: window.getComputedStyle(Menu).height
	}
	
	Actual.style.position = "absolute";
	Actual.style.top = position.top + 'px';
	Actual.style.left = position.left + 'px';
	Actual.style.height = size.height;
	Actual.style.width = size.width;
    Actual.style.margin = Menu.style.margin;
     superStar.classList.add(HIDE);
    
	console.log(1);
	setTimeout(function(){
		Actual.innerHTML = Menu.innerHTML;
		const classes = Menu.classList.value.split(' ');
		for (let i = 0; i < classes.length; i++) {
			Actual.classList.add(classes[i]);
        }
        Actual.appendChild(BtnClose);
		Actual.style.height = '100vh';
		Actual.style.width = '100vw';
		Actual.style.top = '0';
		Actual.style.left = '0';
		Actual.style.margin = '0';
	}, 1);
	
	setTimeout(function(){
		Actual.classList.add('full-screen');
		toDoForm = Actual.querySelector(".js-toDoForm"),
		toDoInput = Actual.querySelector(".js-toDoInput"),
		toDoList = Actual.querySelector(".js-toDoList");
		initToDo();

		
	}, 1000);
	

};
function initToDo(){
	load_to_do();
	toDoForm.addEventListener("submit",handleSubmit); 

	function handleSubmit(event){
		event.preventDefault();
		const currentValue=toDoInput.value;
		if(currentValue===""){
			alert("Please write your to do!");
			return false;
		}
		paintToDo(currentValue);
		reset_input();
	}
}



function paintToDo(text){
	const index = toDos.length+1;
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const delImage = document.createElement('img');
	delImage.setAttribute("src","../img/X.png");
	delImage.style.height = '25px';
	delImage.style.width = '25px';
	delImage.classList.add('shadow');
	delBtn.classList.add('focus:outline-none');
	delBtn.appendChild(delImage);
	delBtn.addEventListener("click",del_todos);
	li.innerHTML = "<div class='toDo-list-item mx-5'>" + text + "<span class='Mask font-black'><span>" + text + "</span></span>" + "<span class='Mask font-black'><span>" + text + "</span></span> </div>"
	li.appendChild(delBtn);
	li.id = index;
	li.classList.add("flex");
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
	let btn = event.target;
	console.dir(btn.localName);
	if(btn.localName == "img"){
		btn = btn.parentNode;
	}
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


function closetoDo(event){
    const Menu = Actual;
	Menu.style.height = size.height;
	Menu.style.width = size.width;
	Menu.style.top = position.top + 'px';
	Menu.style.left = position.left + 'px';
	Menu.style.margin = '0';
	Menu.classList.remove('full-screen');
	Menu.classList.add('shrinking');
	
	setTimeout(function(){
		while(Menu.firstChild) Menu.removeChild(Menu.firstChild);
		var classList = Menu.classList;
		while (classList.length > 0) {
			 classList.remove(classList.item(0));
		}
		Menu.style = '';;
		superStar.classList.remove(HIDE);
    }, 1000);
    
};

function init(){
    for (let i = 0; i < toDo.length; i++) {
        toDo[i].addEventListener("click", opentoDo);
    }
}

init();

//-----toDoList

