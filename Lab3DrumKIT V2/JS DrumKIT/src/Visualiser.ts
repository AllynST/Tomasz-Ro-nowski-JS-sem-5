import { NotePositionBlack, NotePositionWhite } from "./Enums/NotePosition";
import { Note } from "./Note";
import { Recorder } from "./Recorder";
import TimeLine from "./TimeLine";

export interface Visualiser{
    visualiserStart():void;
    visualiserStateHandler():void;
    addNoteToVisualiser(note:Note):void;    
}


/**Static class used to handle Track visualiser */
export class Visualiser{


    //ctx value is set in startUp function
    static ctx :CanvasRenderingContext2D|undefined;
    static #notes:Note[] = []
    static #visualiserState:boolean = false;
    

    static #render(){
        if(!Visualiser.#visualiserState){
            return
        }
        
        
        Visualiser.#clearVisualiser();
        Visualiser.#progressBarHandler();
        Visualiser.#noteYChange();
        Visualiser.#noteCleanup();
        Visualiser.#noteRender();

        requestAnimationFrame(Visualiser.#render)
    }
    /** Renders notes on the visualiser */
    static #noteRender():void{

        Visualiser.#notes.forEach((note:Note) => {
            Visualiser.ctx!.beginPath();
            Visualiser.ctx!.fillStyle = note.visColor!;
            Visualiser.ctx!.rect(
                note.visPosX!,
                note.visPosY!,
                note.black ? 13 : 27,
                30)
            Visualiser.ctx!.fill();
            Visualiser.ctx!.stroke();
        });
    }
    /** Deletes notes that are over the edge of the canvas */
    static #noteCleanup():void{
        Visualiser.#notes.forEach((note:Note) => {
            if(note.visPosY! <= -20){
                Visualiser.#notes.splice(Visualiser.#notes.indexOf(note),1)
            }
        });
    }
    /** Clears the visualiser canvas */
    static #clearVisualiser():void{
        Visualiser.ctx!.clearRect(0,0,Visualiser.ctx?.canvas.width!,Visualiser.ctx?.canvas.height!);
    }
    /**Change Y coordinate of each note  */
    static #noteYChange():void{
        Visualiser.#notes.forEach((note:Note) => {
            note.visPosY = note.visPosY! - 1;
        });
    }

    /** This function starts the visualiser */
   static visualiserStart = ():void =>{
        if(Visualiser.#visualiserState){
            //Safeguard against multiple calls
            return
        }
        Visualiser.#visualiserState = true;
        this.#render();
    }

    /** This function pauses/unpauses the visualiser render */
    static visualiserStateHandler = ():void =>{
        Visualiser.#visualiserState = false;
    }
    /** This function adds note to visualsier with additional parameters used by visualiser
     * @param note Note obj to be added to visualiser
     * @param color Color of the note
    */
    static addNoteToVisualiser = (note:Note,color:string):void =>{


        if(note.keyCode[1] != "#"){
            note.visPosX = NotePositionWhite[note.keyCode]; 
            note.black = false; 
        }
        else{           
            //7 added to center the note on the black key
            note.visPosX = NotePositionBlack[note.keyCode]+7;   
            note.black = true;         
        }
              
        note.visPosY = 750;
        note.visColor = color;
       
        Visualiser.#notes.push(note);
    }

    static #progressBarHandler(){
        const time:number = Recorder.Context.currentTime / TimeLine.timeLineDuration
        let progressBar:HTMLDivElement = document.querySelector(".trackCurrentTime")!
        progressBar.style.width = `${time*100}%`
    }


}



