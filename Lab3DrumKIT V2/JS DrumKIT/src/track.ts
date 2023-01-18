import {Note} from "./Note.js"
import { playTrackOptimalisation } from "./helpers.js";
import { Visualiser } from "./Visualiser.js";

export interface Track{
    addNote(Note:Note):void;
    clearNotes():void;
    playTrack():void;
    muteTrack():void;
}

export class Track{
    

    
    private notes :Note[] = []
    private muted = false;
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
        // Visualiser.addNoteToVisualiser(Note,this.color))       
        Visualiser.addNoteToVisualiser(Note,this.color);      
        
    }   

    clearNotes = () =>{
        this.notes = [];
    }

    playTrack = ():void =>{
        if(this.muted){
            return
        }        
        playTrackOptimalisation(this.notes,this.color)            
    
        
    }

    muteTrack = ():void =>{        
        this.muted = !this.muted
    }

}