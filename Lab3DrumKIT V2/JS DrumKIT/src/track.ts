import {Note} from "./Note.js"
import Piano from './Instruments/Piano.js'
import TimeLine from "./TimeLine.js";
import { VisualiserPlaceNotes } from "./visualsHandler.js";

export interface Track{
    addNote(Note:Note):void;
    clearNotes():void;
    playTrack():void;
    muteTrack():void;
}

export class Track{
    

    
    private notes :Note[] = []
    private muted = false;
    private instrument
    index:number
    color:string
    name:string;


    constructor(index:number,name:string,color:string){   
        this.color = color;
        this.name = name;
        this.index = index;
    }

    addNote = (Note:Note):void =>{
        if(Note.keyCode == undefined){
            return
        }
        this.notes.push(Note);       
        
    }   

    clearNotes = () =>{
        this.notes = [];
    }

    playTrack = ():void =>{
        if(this.muted){
            return
        }
        VisualiserPlaceNotes(this.notes,this.color)
        this.notes.forEach((note:Note) => {    
            console.log(note)
            
            Piano.playSound(note,this.color)
        });
        
    }

    muteTrack = ():void =>{        
        this.muted = !this.muted
    }

}