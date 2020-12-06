
// full screen event + todo list 작성 및 삭제 
const div = document.createElement('div');
div.setAttribute('id', 'toDo_actual');
document.body.appendChild(div);
const toDo = document.querySelectorAll('.toDo');
const Actual = document.querySelector('#toDo_actual');
Actual.style.position = "absolute";
//fullscreen 닫기 버튼영역
const BtnClose = document.createElement('div');
    BtnClose.setAttribute('id','close');
     BtnClose.innerHTML = "Close";
     BtnClose.addEventListener('click',closetoDo);
	 BtnClose.classList.add('text-black','font-mono','text-3xl','shadow','bg-white','text-red-400');


//팝업들 
const alert0 = document.querySelector('.button0'),
	alert1 = document.querySelector('.button1'),
	alert2 = document.querySelector('.button2'),
	alert3 = document.querySelector('.button3'),
	popupName = document.querySelector("#popupName"),
	popup1 = document.querySelector("#popup1"),
	popup2 = document.querySelector("#popup2"),
	popup3 = document.querySelector("#popup3"),
	
superStar = document.querySelector('.superStar'),

Name = document.querySelector(".js-greetings"),

HIDE ="hide";

let toDoForm = null,
      toDoInput,
	  toDoList,
	  clearBtn;

const TODO_LS= "todo";

let toDos = [];

let position = {};
let size = {};


function opentoDo(event) {
	if(Name.innerText === ""){
		alert0.click();
		return false;
	}
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
		Actual.classList.add('full-screen','topLayout');
		if(toDoForm === null){ //한번만 리스트 세팅 하면 됨.
			toDoForm = Actual.querySelector(".js-toDoForm"),
			toDoInput = Actual.querySelector(".js-toDoInput"),
			toDoList = Actual.querySelector(".js-toDoList");
			clearBtn = Actual.querySelector(".clearToDo");
			SetToDo();
			load_to_do();

		}
		
	}, 1000);
	

};
//Todolist 세팅 및 제어 이벤트
function SetToDo(){
	clearBtn.addEventListener("click",clearTodo);
	toDoForm.addEventListener("submit",handleSubmit); 
	function handleSubmit(event){
		event.preventDefault();
		const currentValue=toDoInput.value;
		if(currentValue===""){
			Actual.classList.remove('topLayout');
			popup1.classList.add('topLayout');
			alert1.click();
			return false;
		}
		if(currentValue.length > 25){
			Actual.classList.remove('topLayout');
			popup2.classList.add('topLayout');
			alert2.click();
			return false;
		}
		if(toDos.length > 10){
			Actual.classList.remove('topLayout');
			popup3.classList.add('topLayout');
			alert3.click();
			return false;
		}
		Actual.classList.add('topLayout');
		paintToDo(currentValue);
		reset_input();
	}
	
}
//text slice
let flag = 0;
function sliceText(event){
	if(flag === 0){
		const divList = event.target.parentNode.parentNode.firstChild;
		const span1 = divList.firstChild.nextSibling;
		const span2 = span1.nextSibling;
		console.log(divList,span1,span2);
		divList.classList.add('sliceText_before','sliceText_hover','.sliceText_active');
		span1.classList.add('sliceText1');
		span2.classList.add('sliceText2');
		flag=1;
	}
	
}
function recalText(event){
	if(flag === 1){
		const divList = event.target.parentNode.parentNode.firstChild;
		const span1 = divList.firstChild.nextSibling;
		const span2 = span1.nextSibling;
		console.log(divList,span1,span2);
		divList.classList.add('sliceText_before','sliceText_hover','.sliceText_active');
		span1.classList.remove('sliceText1');
		span2.classList.remove('sliceText2');
		flag=0;
	}
	
}

//todo list input
function paintToDo(text){
	const index = toDos.length+1;
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const delImage = document.createElement('img');
	delImage.setAttribute("src","../img/X.png");
	delImage.style.height = '25px';
	delImage.style.width = '25px';
	delImage.classList.add('shadow');
	delBtn.classList.add('delBtn','focus:outline-none','flex-1' ,'ml-1', 'my-3');
	delBtn.appendChild(delImage);
	delBtn.addEventListener("click",del_todos);
	delBtn.addEventListener("mouseover",sliceText);
	delBtn.addEventListener("mouseout",recalText);
	li.innerHTML = li.innerHTML + "<div class='toDo-list-item mx-5'>" + text + "<span class='Mask font-black'><span>" + text + "</span></span>" + "<span class='Mask font-black'><span>" + text + "</span></span> </div>"
	
	li.id = index;
	li.classList.add("flex",'border-2','my-1');
	li.style.backgroundColor = '#FBFBAD';
	toDoList.appendChild(li);
	li.appendChild(delBtn);
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
//todo delete
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
//todo clear

function clearTodo(event){
	console.log(event.target);
	toDos = [];
	save_todo();
	closetoDo();
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

//영역 clsoe
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

