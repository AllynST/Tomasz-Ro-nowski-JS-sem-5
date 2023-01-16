import TimeLine from "./TimeLine.js";
import { Note } from "./Note.js";
import { Recorder } from "./Recorder.js";


const trackVisualiser:HTMLCanvasElement = document.querySelector("#trackVisualiser");
trackVisualiser.height = 1000;
trackVisualiser.width = 1600;

const context :CanvasRenderingContext2D = trackVisualiser.getContext("2d")

export function keyboardClickVisual(keyCode:string,color:string,delay:number):void{

    


    setTimeout(() => {       
        let key = document.getElementById(keyCode);
        let prevColor = key.style.backgroundColor;
        key.style.backgroundColor = color;
        key.style.opacity = "0.8";

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


export function deleteTrackCard(id:number){
    let trackCards:HTMLElement[] = Array.from(document.querySelectorAll('.trackLabel'));
    console.log(id)
    console.log(trackCards[0].id)
    let removalTarget:HTMLElement = trackCards.find(x=>parseInt(x.id) == id)
    console.log("DO wyjebania: "+removalTarget)
    removalTarget.remove()
}

export function addTrackVisual(track:HTMLElement):void{
    
}
//TODO

export function updateVisualiserState():void{
    const time:number = Recorder.Context.currentTime / TimeLine.timeLineDuration
    let progressBar:HTMLDivElement = document.querySelector(".trackCurrentTime")
    progressBar.style.width = `${time*100}%`

    const canvasHeight:number = trackVisualiser.offsetHeight;

    trackVisualiser.style.bottom = `-${time*canvasHeight}px`

    requestAnimationFrame(updateVisualiserState)
}
//TODO DELETE TEMPLATE INFO
//full scale keyboard has 88 keys
export function VisualiserPlaceNotes(notes:Note[],color:string):void{

        
    notes.forEach((note:Note):void => {
        const posXHelper = parseInt(note.keyCode.slice(1))
        const positionX = posXHelper*20;
        const positionY = trackVisualiser.height-(note.startTime/20 * trackVisualiser.height)-110
        context.beginPath();
        context.fillStyle = color;
        context.rect(positionX,positionY,20,25)
        context.fill();
        context.stroke();

    
    });
    
}

export function VisualiserClear():void{
    context.clearRect(0,0,2000,2000)
}




function visualiserMovement():void{

    //TODO MOVE THE CANVAS

    
}


