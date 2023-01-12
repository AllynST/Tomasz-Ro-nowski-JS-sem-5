import { Track } from "./track.js";
import { Note } from "./Note.js";
import { createTrackElem } from "./ElementGenerator.js";



interface TimeLine{
    tracks:Track[];
    timeLineDuration:number;
    selectedTrack:number;

    selectTrack(TrackNum:number):void;
    addTrack(Track:Track):void;
}


class TimeLine{

    static tracks:Track[] = [new Track(0,"Track 0","red")]
    static timeLineDuration = 20;
    static selectedTrack:number = 0;
    

    static addNoteToTrack(Note:Note):void{
        TimeLine.tracks[TimeLine.selectedTrack].addNote(Note);
    }

    static addTrack = (Track:Track):void =>{
        TimeLine.tracks.push(Track);
        createTrackElem(Track);
       

    }



}



export default TimeLine;