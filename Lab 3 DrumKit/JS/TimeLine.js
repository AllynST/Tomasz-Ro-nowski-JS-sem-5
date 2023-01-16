var _a;
import { Track } from "./track.js";
import { createTrackElem } from "./ElementGenerator.js";
import { deleteTrackCard } from "./visualsHandler.js";
class TimeLine {
    static addNoteToTrack(Note) {
        TimeLine.tracks[TimeLine.selectedTrack].addNote(Note);
    }
}
_a = TimeLine;
TimeLine.tracks = [new Track(0, "Track 0", "red")];
TimeLine.timeLineDuration = 20;
TimeLine.selectedTrack = 0;
TimeLine.addTrack = (Track) => {
    TimeLine.tracks.push(Track);
    createTrackElem(Track);
};
TimeLine.deleteTrack = (id) => {
    _a.tracks.splice(id, 1);
    deleteTrackCard(id);
};
TimeLine.clearTrack = (id) => {
    _a.tracks[id].clearNotes();
};
export default TimeLine;
