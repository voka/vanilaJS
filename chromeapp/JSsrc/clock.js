const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const christmas = new Date(2020,11,25,00,00,00);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    console.log(hours - christmas.getHours(),minutes - christmas.getMinutes(),seconds - christmas.getSeconds(), christmas - date);
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();