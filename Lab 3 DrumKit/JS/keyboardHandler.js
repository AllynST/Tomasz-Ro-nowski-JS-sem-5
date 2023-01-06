import { Note } from "./Note.js";
import Piano from "./Piano.js";
import { Recorder } from "./Recorder.js";
export function handleKeyboardClick(keyCode) {
    if (keyCode == "Q") {
        Recorder.handleRecordState();
        return;
    }
    if ((Recorder.recordState == true)) {
        Recorder.recordKey(keyCode);
    }
    Piano.playSound(new Note(0, keyCode, 1));
}
