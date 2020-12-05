// JS available on https://github.com/colinlohner/FSM-JS


//Setup
const div = document.createElement('div');
div.setAttribute('id', 'fsm_actual');
document.body.appendChild(div);
const fsm = document.querySelectorAll('.fsm');
const Actual = document.querySelector('#fsm_actual');
Actual.style.position = "absolute";
const BtnClose = document.createElement('div');
    BtnClose.setAttribute('id','close');
     BtnClose.innerHTML = "Close";
     BtnClose.addEventListener('click',closeFSM);
     BtnClose.classList.add('h-20');
     BtnClose.classList.add('place-self-start');
var position = {};
var size = {};


//modal action stuffs
function openFSM(event) {
    var Menu = event.currentTarget;
    
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
     
    
	
	setTimeout(function(){
		Actual.innerHTML = Menu.innerHTML;
		var classes = Menu.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
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
		Actual.classList.add('full-screen')
    }, 1000);
    
};

function closeFSM(event){
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
    }, 1000);
    
};

function init(){
    for (var i = 0; i < fsm.length; i++) {
        fsm[i].addEventListener("click", openFSM);
    }
}

init();
