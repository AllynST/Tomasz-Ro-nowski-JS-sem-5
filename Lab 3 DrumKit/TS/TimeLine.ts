import { Track } from "./track.js";
import { Note } from "./Note.js";

interface TimeLine{
    tracks:Track[];
    timeLineDuration:number;
    selectedTrack:number;

    selectTrack(TrackNum:number):void;
    addTrack(Track:Track):void;
}


class TimeLine{

    static tracks:Track[] = [new Track("piano","red","track1")]
    static timeLineDuration = 20;
    static selectedTrack:number = 0;



    static selectTrack  = (TrackNum:number):void =>{

    }

    static addNoteToTrack(Note:Note):void{
        TimeLine.tracks[TimeLine.selectedTrack].addNote(Note);
    }

    static addTrack = (Track:Track):void =>{
        TimeLine.tracks.push(Track);
    }



}



export default TimeLine;