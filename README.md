# vanilaJS

JS에서 queryselector("")느 그 노드의 첫번째 자식을 반환해준다.

null - > undefined 와 같아. 존재하지(정의되지) 않으면 사용할 수 없는 것이다.

const title = document.querySelector(".title");

function handleMenter(){
    실행내용
}

title.addEventListener("mouseenter",handleMenter);   -> mouseenter이라는 이벤트가 발생할때만 handleMenter이라는 함수가 실행된다.
title.addEventListener("mouseenter",handleMenter()); -> 새로고침 하자 마자 바로 handleMenter이라는 함수가 실행된다.
