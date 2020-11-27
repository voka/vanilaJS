const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".today"),
    nTitle = clockContainer.querySelector(".christmas");


function get(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const christmas = new Date(2020,11,25,00,00,00);
    let mSeconds = christmas.getTime(); 
    const getday = date.getTime();
    const nDay = Math.floor((mSeconds - getday)/(1000*60*60*24));
    mSeconds = mSeconds - nDay*(1000*60*60*24);
    const nHour = Math.floor((mSeconds - getday)/(1000*60*60));
    mSeconds = mSeconds - nHour*(1000*60*60);
    const nMinutes = Math.floor((mSeconds - getday)/(1000*60));
    mSeconds = mSeconds - nMinutes*(1000*60);
    const nSeconds = Math.floor((mSeconds - getday)/1000);
    //console.log(nDay, nHour, nMinutes, nSeconds);
    clockTitle.innerText = `Current Time :  ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    nTitle.innerText = `Time Until Christmas :  ${nDay}D ${nHour < 10 ? `0${nHour}` :  nHour}H ${nMinutes < 10 ? `0${nMinutes}` : nMinutes}M ${nSeconds < 10 ? `0${nSeconds}` : nSeconds}S`;
}

function init(){
    get();
    setInterval(get,1000);
}

init();