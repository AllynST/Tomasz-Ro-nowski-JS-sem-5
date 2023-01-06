import { Note } from "./Note.js";
import Player from "./Player.js";
import TimeLine from "./TimeLine.js";

export interface Recorder{
    recordState:boolean;    
    Context:AudioContext;
    recordKey(keyCode:string);
    handleRecordState():void;
    resetContextTime():void;
}
//this class saves inputs while recording flag is active and outputs notes to tracks
export class Recorder{

    static recordState = false;
    static Context:AudioContext = new AudioContext();   
    
    static recordKey = (keyCode:string):void =>{       
       
        let note = new Note(this.Context.currentTime,keyCode,1);
       
        TimeLine.addNoteToTrack(note);       

    }

    static handleRecordState = ():void =>{
      
        Recorder.recordState = !Recorder.recordState;
        console.log(Recorder.recordState)

        if(Recorder.recordState === false){
            this.Context.suspend();
        }
        else{
            this.Context.resume();
            Player.playTrack();
        }
    }

    static resetContextTime = ():void =>{
        //FIXME pausing mid track causes the track to timeout to reset the track after specified track time
        setTimeout(() => {
            this.Context = new AudioContext();
            Recorder.resetContextTime();          

        }, (TimeLine.timeLineDuration*1000)-50);
        
    }




}
