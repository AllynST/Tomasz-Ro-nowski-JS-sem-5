import { Note } from "./Note.js";
import Piano from "./Piano.js";
import Player from "./Player.js";
import {Recorder} from "./Recorder.js"


export function handleKeyboardClick(keyCode:string){
    if(keyCode == "Q"){
        Recorder.recordState = !Recorder.recordState;
        console.log(`recording: ${Recorder.recordState}`)
        Player.playTrack()
        return;
    }
    if((Recorder.recordState == true)){
        Recorder.recordKey(keyCode);
    }   
    
    
    Piano.playSound(new Note(0,keyCode,1))
}


