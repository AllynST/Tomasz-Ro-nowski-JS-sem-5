var _Recorder_test;
import { Note } from "./Note.js";
import TimeLine from "./TimeLine.js";
//this class saves inputs while recording flag is active and outputs notes to tracks
export class Recorder {
    constructor() {
        _Recorder_test.set(this, () => {
        });
    }
}
_Recorder_test = new WeakMap();
Recorder.recordState = false;
Recorder.Context = new AudioContext();
Recorder.recordKey = (keyCode) => {
    let note = new Note(Recorder.Context.currentTime, keyCode, 1);
    console.log(`note added to track ${note.startTime}`);
    TimeLine.addNoteToTrack(note);
};
