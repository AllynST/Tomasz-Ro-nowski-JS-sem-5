
const trackVisualiser:HTMLCanvasElement = document.querySelector("#trackVisualiser");
const context :CanvasRenderingContext2D = trackVisualiser.getContext("2d")

export function keyboardClickVisual(keyCode:string,color:string,delay:number):void{

    


    setTimeout(() => {       
        let key = document.getElementById(keyCode);
        let prevColor = key.style.backgroundColor;
        key.style.backgroundColor = color;
        key.style.opacity = "0.5";

        setTimeout(() => {
            key.style.backgroundColor = prevColor;
            key.style.opacity = "1";
        }, 100);
    },delay*1000)
    
    
}

export function menuBubbleVisual(targetPosition:number):void{    
    let menuBubble = document.getElementById("menuBubble");

    menuBubble.style.top = targetPosition-12 + "px";    
    menuBubble.style.borderRadius = "50%"; 

    setTimeout(() => {
      menuBubble.style.borderRadius = "15px 0px 0px 15px";
    }, 200);
}

export function addTrackVisual(track:HTMLElement):void{
    
}


//TODO DELETE TEMPLATE INFO
//full scale keyboard has 88 keys
function renderVisualizer():void{
    
}



