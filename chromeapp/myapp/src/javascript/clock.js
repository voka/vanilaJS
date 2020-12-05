const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".today");
  

function get(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

function init(){
    get();
    setInterval(get,1000);
}

init();