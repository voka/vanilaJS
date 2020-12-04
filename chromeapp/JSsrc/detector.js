const Meue_List = document.querySelector('.Menu-list');






let X = -10, Y = 30;
function rotate(){
        console.log(X,Y);
        X -= 0.5;
        Y -= 0.1;
        if(X === -360) X = 0;
        if(Y === -360) Y = 0;
        Meue_List.style.transform = "rotateX("+ X.toString() + "deg)";
        Meue_List.style.transform = "rotateY("+ Y.toString() + "deg)";
    
}



function init(){
    console.log(Meue_List);
    setInterval(rotate,1);
}
init();