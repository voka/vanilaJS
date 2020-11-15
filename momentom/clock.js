const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector(".js-title");


//!!!!!!!!!!!!!!!!!! ${}사용할 땐, '' or "" 가 아니라 ``를 사용해야 한다. -> 30분 날림

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
// 작은 if문 -> 조건식 ? 참 반환값 : 거짓 반환값
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`//`:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();
