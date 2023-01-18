import { Note } from "./Note.js";
import Piano from "./Instruments/Piano.js";
import Player from "./Player.js";
import {Recorder} from "./Recorder.js"
import TimeLine from "./TimeLine.js";


export function handleMouseClick(keyCode:string){    
    recordStateChecker(keyCode);
    console.log("mouse click")
    console.log(keyCode)
    Piano.playSound(new Note(0,keyCode,1),
    TimeLine.tracks[TimeLine.selectedTrack].color    
    )
}


export function handleKeyboardClick(keyCode:string){
       
    if(keyCode == "SPACE"){
        Recorder.handleRecordState();        
        return;
    }

    recordStateChecker(keyCode);
    
    Piano.playSound(
        new Note(0,keyCode,1),
        TimeLine.tracks[TimeLine.selectedTrack].color
    )
} 


function recordStateChecker(keyCode:string){
    if((Recorder.recordState == true)){
        Recorder.recordKey(keyCode);
    } 
}


