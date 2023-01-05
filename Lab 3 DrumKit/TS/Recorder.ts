import { Note } from "./Note.js";
import TimeLine from "./TimeLine.js";

export interface Recorder{
    recordState:boolean;    
    Context:AudioContext;
    handleClick(keyCode:string);
}
//this class saves inputs while recording flag is active and outputs notes to tracks
export class Recorder{

    static recordState = false;
    static Context:AudioContext = new AudioContext();
    static recordKey = (keyCode) =>{
        console.log(Recorder.Context)
        let note = new Note(Recorder.Context.currentTime,keyCode,1)
        console.log(`note added to track ${note.startTime}`)

        TimeLine.addNoteToTrack(note);       

    }
    
    #test = ()=>{

    }



}
