import { Note } from "./Note.js";
import Piano from "./Piano.js";
import { Recorder } from "./Recorder.js";
export function handleMouseClick(keyCode) {
    recordStateChecker(keyCode);
    Piano.playSound(new Note(0, keyCode, 1));
}
export function handleKeyboardClick(keyCode) {
    console.log(keyCode);
    if (keyCode == "SPACE") {
        Recorder.handleRecordState();
        return;
    }
    recordStateChecker(keyCode);
    Piano.playSound(new Note(0, keyCode, 1));
}
function recordStateChecker(keyCode) {
    if ((Recorder.recordState == true)) {
        Recorder.recordKey(keyCode);
    }
}
