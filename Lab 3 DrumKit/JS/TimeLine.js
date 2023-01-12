import { Track } from "./track.js";
import { createTrackElem } from "./ElementGenerator.js";
class TimeLine {
    static addNoteToTrack(Note) {
        TimeLine.tracks[TimeLine.selectedTrack].addNote(Note);
    }
}
TimeLine.tracks = [new Track(0, "Track 0", "red")];
TimeLine.timeLineDuration = 20;
TimeLine.selectedTrack = 0;
TimeLine.addTrack = (Track) => {
    TimeLine.tracks.push(Track);
    createTrackElem(Track);
};
export default TimeLine;
