import TimeLine from "./TimeLine.js";
import { Note } from "./Note.js";
import { Recorder } from "./Recorder.js";


const trackVisualiser:HTMLCanvasElement = document.querySelector("#trackVisualiser");
trackVisualiser.height = 1000;
trackVisualiser.width = 1600;

const context :CanvasRenderingContext2D = trackVisualiser.getContext("2d");

const octaves:Element[] = Array.from(document.querySelectorAll('div.octave'));

export function keyboardClickVisual(keyCode:string,color:string,delay:number):void{

    


    setTimeout(() => {       
        let key = document.getElementById(keyCode);
        let prevColor = key!.style.backgroundColor;
        key!.style.backgroundColor = color;
        key!.style.opacity = "0.8";

        setTimeout(() => {
            key!.style.backgroundColor = prevColor;
            key!.style.opacity = "1";
        }, 100);
    },delay*1000)
    
    
}

export function menuBubbleVisual(targetPosition:number):void{    
    let menuBubble = document.getElementById("menuBubble");

    menuBubble!.style.top = targetPosition-12 + "px";    
    menuBubble!.style.borderRadius = "50%"; 

    setTimeout(() => {
      menuBubble!.style.borderRadius = "15px 0px 0px 15px";
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

        
        const letter:string = note.keyCode[0];

        const letterPos = LetterPosition[letter];

        const octavePos = parseInt(note.keyCode[1])*140;
        
        const positionX = letterPos+octavePos;
        const positionY = trackVisualiser.height-(note.startTime/20 * trackVisualiser.height)-100
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


export function octaveHoverHandler(octaveNr:number){
    let prev = null;

    if(prev != octaveNr){
        octaves.forEach((octave:Element)=>{
            octave.classList.remove("octaveHovered")
        })
        octaves[octaveNr].classList.add("octaveHovered")
        prev = octaveNr;
    }
}




enum LetterPosition{
    C = 0,
    D = 20,
    E = 40,
    F = 60,
    G = 80,
    A = 100,
    B = 120
}



