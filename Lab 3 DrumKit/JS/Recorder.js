var _a;
import { Note } from "./Note.js";
import Player from "./Player.js";
import TimeLine from "./TimeLine.js";
//this class saves inputs while recording flag is active and outputs notes to tracks
export class Recorder {
}
_a = Recorder;
Recorder.recordState = false;
Recorder.Context = new AudioContext();
Recorder.recordKey = (keyCode) => {
    let note = new Note(_a.Context.currentTime, keyCode, 1);
    TimeLine.addNoteToTrack(note);
};
Recorder.handleRecordState = () => {
    Recorder.recordState = !Recorder.recordState;
    console.log(Recorder.recordState);
    if (Recorder.recordState === false) {
        _a.Context.suspend();
    }
    else {
        _a.Context.resume();
        Player.playTrack();
    }
};
Recorder.resetContextTime = () => {
    //FIXME pausing mid track causes the track to timeout to reset the track after specified track time
    setTimeout(() => {
        _a.Context = new AudioContext();
        Recorder.resetContextTime();
    }, (TimeLine.timeLineDuration * 1000) - 50);
};
