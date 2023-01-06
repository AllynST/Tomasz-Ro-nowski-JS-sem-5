var _a, _Recorder_test;
import { Note } from "./Note.js";
import Player from "./Player.js";
import TimeLine from "./TimeLine.js";
//this class saves inputs while recording flag is active and outputs notes to tracks
export class Recorder {
    constructor() {
        _Recorder_test.set(this, () => {
        });
    }
}
_a = Recorder, _Recorder_test = new WeakMap();
Recorder.recordState = false;
Recorder.Context = new AudioContext();
Recorder.recordKey = (keyCode) => {
    let note = new Note(_a.Context.currentTime, keyCode, 1);
    console.log("Note start time: " + note.startTime);
    TimeLine.addNoteToTrack(note);
};
Recorder.handleRecordState = () => {
    Recorder.recordState = !Recorder.recordState;
    if (Recorder.recordState === false) {
        _a.Context.suspend();
    }
    else {
        _a.Context.resume();
        Player.playTrack();
    }
};
Recorder.resetContextTime = () => {
    setTimeout(() => {
        _a.Context = new AudioContext();
        Recorder.resetContextTime();
        console.log("Context reset");
    }, (TimeLine.timeLineDuration * 1000) - 100);
};
