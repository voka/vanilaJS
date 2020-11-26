const color = ["#16a0850","#2ecc71","#3498db","#9b59b6","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6"];
const sizeOfWindow = window.innerWidth + window.innerHeight ;


function handleWresize(event){
    const currentSize = window.innerWidth + window.innerHeight ;

    if(sizeOfWindow*1.35 < currentSize){
        document.body.style.backgroundColor = color[0];
    }
    else if(sizeOfWindow*1.3 < currentSize){
        document.body.style.backgroundColor = color[1];
    }
    else if(sizeOfWindow*1.25 < currentSize){
        document.body.style.backgroundColor = color[2];
    }
    else if(sizeOfWindow*1.2 < currentSize){
        document.body.style.backgroundColor = color[3];
    }
    else if(sizeOfWindow*1.15 < currentSize){
        document.body.style.backgroundColor = color[4];
    }
    else if(sizeOfWindow*1.1 < currentSize){
        document.body.style.backgroundColor = color[5];
    }
    else if(sizeOfWindow*1.05 < currentSize){
        document.body.style.backgroundColor = color[6];
    }
    else if(sizeOfWindow*1.025 < currentSize){
        document.body.style.backgroundColor = color[7];
    }
    else if(sizeOfWindow < currentSize) {
        document.body.style.backgroundColor = color[8];
    }
    else if(sizeOfWindow*0.95 < currentSize){
        document.body.style.backgroundColor = color[0];
    }
    else if(sizeOfWindow*0.9 < currentSize){
        document.body.style.backgroundColor = color[1];
    }
    else if(sizeOfWindow*0.85 < currentSize){
        document.body.style.backgroundColor = color[2];
    }
    else if(sizeOfWindow*0.8 < currentSize){
        document.body.style.backgroundColor = color[3];
    }
    else if(sizeOfWindow*0.75 < currentSize){
        document.body.style.backgroundColor = color[4];
    }
    else if(sizeOfWindow*0.7 < currentSize){
        document.body.style.backgroundColor = color[5];
    }
    else if(sizeOfWindow*0.65 < currentSize){
        document.body.style.backgroundColor = color[6];
    }
    else if(sizeOfWindow*0.6 < currentSize){
        document.body.style.backgroundColor = color[7];
    }
    else{
        document.body.style.backgroundColor = color[8];
    }
}
window.addEventListener("resize",handleWresize);