import {Note} from "./Note.js"
import Piano from './Piano.js'
import TimeLine from "./TimeLine.js";

export interface Track{
    addNote(Note:Note):void;
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
        this.notes.push(Note);       
        
    }   

    playTrack = ():void =>{
        
        this.notes.forEach((note:Note) => {    
            console.log(note)
            Piano.playSound(note,this.color)
        });
        
    }

    muteTrack = ():void =>{        
        this.muted = !this.muted
    }

}