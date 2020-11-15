const body = document.querySelector("body");

const Total_Image = 7;

function handleImgLoad(){
  console.log("finished Lodding!");
}
/*
function paintImage(ImageNum){
  const img = new Image();
  img.src=`./Images/${ImageNum + 1}.jpg`;
  img.classList.add("bgImage");
  body.prepend(img);
  img.addEventListener("load",handleImgLoad);
}*/

function paintImage(ImageNum){
  const src=`./Images/${ImageNum + 1}.jpg`;
  body.style.backgroundImage = `url(${src})`;
}

function genRandom(){
  const num = Math.floor(Math.random() * Total_Image);
  return num;
}

function init(){
  const randomNum = genRandom();
  paintImage(randomNum);
}

init();
