
const reset = document.querySelector(".reset_B");

function reset_click(event){
  event.preventDefault();
  localStorage.clear();
  location.reload(true);
}


function init(){
    reset.addEventListener("click",reset_click);
}

init();