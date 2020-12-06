const body = document.querySelector("body");

const Total_Image = 10;

function handleImgLoad(){
  console.log("finished Lodding!");
}
function paintImage(ImageNum){
  const src=`./img/${ImageNum + 1}.jpg`;
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
