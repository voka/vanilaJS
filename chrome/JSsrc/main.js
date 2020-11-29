const form = document.querySelector(".searchForm"),
    input = document.querySelector(".searchBox");

const Gmail = document.querySelector(".Gmail");
const Gimage = document.querySelector(".Gimage");
const Gtap = document.querySelector(".Gtap");
const Gicon = document.querySelector(".Gicon");

const IconBox = document.querySelectorAll(".iconBox");


function handleSubmit(event){
    location.href = "https://www.google.com/search?q=" + input.value;
}

function mouseEnter(event){
    event.target.style.textDecoration = "underline";
    event.target.style.cursor = "pointer";
}
function mouseLeave(event){
    event.target.style.textDecoration = "none";
}
function goImage(event){
    location.href = "https://www.google.co.kr/imghp";
}

function init(){
    form.addEventListener("submit",handleSubmit);
    Gmail.addEventListener("mouseenter",mouseEnter);
    Gmail.addEventListener("mouseleave",mouseLeave);
    Gimage.addEventListener("mouseenter",mouseEnter);
    Gimage.addEventListener("mouseleave",mouseLeave);
    Gimage.addEventListener("click",goImage);
}


init();
