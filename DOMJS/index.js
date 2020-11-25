const title = document.querySelector(".title");
const color = ["blue","red","green","orange","pink","lightgreen"];


function handleMDBclick(event){
    
    title.style.color = color[5];
    title.innerHTML = "You Double-clicked here"
}

function handleWresize(event){
    
    title.style.color = color[4];
    
    title.innerHTML = "You resize the window"
}

function handleMrclick(event){
    
    title.style.color = color[3];
    title.innerHTML = "Your right click here"
}

function handleMclick(event){
    
    title.style.color = color[2];
    
    title.innerHTML = "You click here"
}

function handleMenter(event){
    
    title.style.color = color[1];
    
    title.innerHTML = "Your mouse is here"
}

function handleMleave(event){
    
    title.style.color = color[0];
    
    title.innerHTML = "Your mouse is gone"
}


title.addEventListener("mouseleave",handleMleave);
title.addEventListener("mouseenter",handleMenter);
title.addEventListener("click",handleMclick);
title.addEventListener("dblclick",handleMDBclick);
title.addEventListener("contextmenu",handleMrclick);
window.addEventListener("resize",handleWresize);