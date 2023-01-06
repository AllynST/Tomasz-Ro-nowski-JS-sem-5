import { Note } from "./Note.js";
import Piano from "./Piano.js";
import Player from "./Player.js";
import {Recorder} from "./Recorder.js"


export function handleMouseClick(keyCode:string){    
    recordStateChecker(keyCode);
    Piano.playSound(new Note(0,keyCode,1))
}


export function handleKeyboardClick(keyCode:string){
    console.log(keyCode)     
    if(keyCode == "SPACE"){
        Recorder.handleRecordState();        
        return;
    }

    recordStateChecker(keyCode);
    
    Piano.playSound(new Note(0,keyCode,1))
} 


function recordStateChecker(keyCode){
    if((Recorder.recordState == true)){
        Recorder.recordKey(keyCode);
    } 
}


