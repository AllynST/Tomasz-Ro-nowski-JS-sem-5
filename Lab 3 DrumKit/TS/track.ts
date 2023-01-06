import {Note} from "./Note.js"
import Piano from './Piano.js'

export interface Track{
    addNote(Note:Note):void;
    playTrack():void;
    muteTrack():void;
}

export class Track{
    

    
    private notes :Note[] = []
    private muted = false;
    private instrument
    private color
    private name:string;


    constructor(instrument,color,name){   
        this.color = color;
        this.name = name;
        this.instrument = instrument;
    }

    addNote = (Note:Note):void =>{
        this.notes.push(Note);       
        
    }   

    playTrack = ():void =>{
        
        this.notes.forEach((note:Note) => {    
            console.log(note)
            Piano.playSound(note)
        });
        
    }

    muteTrack = ():void =>{        
        this.muted = !this.muted
    }

}