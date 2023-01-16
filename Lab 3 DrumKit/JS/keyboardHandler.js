import { Note } from "./Note.js";
import Piano from "./Instruments/Piano.js";
import { Recorder } from "./Recorder.js";
import TimeLine from "./TimeLine.js";
export function handleMouseClick(keyCode) {
    recordStateChecker(keyCode);
    Piano.playSound(new Note(0, keyCode, 1), TimeLine.tracks[TimeLine.selectedTrack].color);
}
export function handleKeyboardClick(keyCode) {
    console.log(keyCode);
    if (keyCode == "SPACE") {
        Recorder.handleRecordState();
        return;
    }
    recordStateChecker(keyCode);
    Piano.playSound(new Note(0, keyCode, 1), TimeLine.tracks[TimeLine.selectedTrack].color);
}
function recordStateChecker(keyCode) {
    if ((Recorder.recordState == true)) {
        Recorder.recordKey(keyCode);
    }
}
