import { Track } from "./track.js";
class TimeLine {
    static addNoteToTrack(Note) {
        TimeLine.tracks[TimeLine.selectedTrack].addNote(Note);
    }
}
TimeLine.tracks = [new Track("piano", "red", "track1")];
TimeLine.timeLineDuration = 20;
TimeLine.selectedTrack = 0;
TimeLine.selectTrack = (TrackNum) => {
};
TimeLine.addTrack = (Track) => {
    TimeLine.tracks.push(Track);
};
export default TimeLine;
