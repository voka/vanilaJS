//canvas 위에 마우스 커서가 있으면 감지해야한다.canvas -> div
//canvas -> context를 가지며 우리가 픽셀에 접근하게 해주는 요소다. <canvas>요기에 픽셀이 있다.</canvas>
//canvas 는 css를 기본적으로 캔버스를 만든다. pixel 을 다룰수있는 element로써 ㅇㅇ -> 그래서 element에게 width와 height를 줘야 한다.(안주면 안그려짐) pixel modifier을 줘야함
//canvas는 그 안에 있는 픽셀을 다룰 수 있는 어마어마한 기능을 가진 html5요소이다.
//canvas에게 canvas가 다루는 윈도우의 크기를 알려줘야 해서 width와 height를 알려줘야 하는 것이다.
//context의 역할은 그 안에 있는 픽셀을 다루는 것이다. -다양한 context가 있지만 이번엔 2d만 할 것이다.
//canvas는 위에서 부터 내려오면서 실행되므로 이전에 실행됬던것에 영향을 미치지 않는다.
//canvas는 그림을 그리는 것이기 때문에 저장기능과 복사기능은 이미 내장돼 있음.

const canvas = document.getElementById("js_canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js_color");
const lineWidth = document.getElementById("js_range")
const mode = document.getElementById("js_mode");
const Save = document.getElementById("js_save");

const INIT_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;


canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE); //초기 캔버스 색과 넓이 지정 -> 이렇게 해야 처음 저장할때 그대로 저장됨
ctx.strokeStyle = INIT_COLOR; //우리가 그리는 선의 초기의 색 , Default
ctx.lineWidth = 2.5; // 우리가 그리는 선의 초기 굵기
ctx.fillStyle = INIT_COLOR;

let painting = false;
let filling = false;
let Paint = true;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

function onMouseMove(event){ //mouse가 canvas위에 있는동안은 항상 이벤트가 발생한다.
    if(Paint){ //Paint 모드일때만 동작함
        const x = event.offsetX;
        const y = event.offsetY;
        if(!painting){// Path는 선이다. , painting이 false라면 마우스가 움직이는 그 자리가 선의 시작점이 될 것이다., 
            ctx.beginPath(); //마우스가 움직이다가 클릭하면 그때 부터 더이상 Path가 만들어 지지 않고, Line가 그려지기 시작할 것이다.
            ctx.moveTo(x,y);
            //console.log("Path "+ x +", "+ y);
        }
        else{// painting이 true라면 이제 Line 그리기가 시작된다. -> lineTo(x,y)로 마우스 커서가 있는 곳까지 storke(<정해둔 색으로 선을 그림>)를 통해 그려질 것이다.
            ctx.lineTo(x,y); 
            ctx.stroke();
            //ctx.closePath();
            //console.log("line "+ x +", "+ y);
        }   
    }
}
/*
function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}*/
function change_color(evnet){
    const Paint_color = event.target.style.backgroundColor;
    ctx.strokeStyle = Paint_color;
    ctx.fillStyle = Paint_color;
}

function change_lineWidth(event){
    ctx.lineWidth = event.target.value;
}

function change_mode(event){
    if(filling == true){
        Paint = true;
        filling = false;
        mode.innerText = "Fill";
    }
    else{
        Paint = false;
        filling = true;
        mode.innerText = "PAINT";
    }
    //console.log(`fill : ${filling} , paint : ${Paint}`);
}
function CanvasClick(){
    if(filling){// Fill 모드일 경우에만 동작함.
        ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault(); // 우클릭 방지 기능 
}

function saveclick(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image; // URL을 가져야 하고 download는 저장되는 파일의 이름을 가져야 한다.
    link.download = "FILE";
    link.click();
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",CanvasClick);
    canvas.addEventListener("contextmenu",handleCM); // 우클릭 방지 가능함 ㅇㅇ
}

if(colors){ //colors가 정의되지 않았을 경우를 대비함 
    Array.from(colors).forEach(color => // 각각의 div를 표현함 ㅇㅇ !
        color.addEventListener("click",change_color)
   );
}


if(lineWidth){// lineWidth가 정의되지 않았을 경우를 대비함
    lineWidth.addEventListener("input", change_lineWidth);
}

if(mode){
    mode.addEventListener("click", change_mode);
}

if(Save){
    Save.addEventListener("click",saveclick);
}