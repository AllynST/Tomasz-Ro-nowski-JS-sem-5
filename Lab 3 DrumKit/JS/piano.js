import { keyboardClickVisual } from "./visualsHandler.js";
export class Piano {
    static async playSound(note, color) {
        if (note.keyCode === undefined) {
            return;
        }
        console.log(color);
        if (note.startTime === undefined) {
            note.startTime = 0;
        }
        let context = new AudioContext();
        const primaryGainControl = context.createGain();
        primaryGainControl.gain.setValueAtTime(0.1, 0);
        primaryGainControl.connect(context.destination);
        try {
            await fetch(`./PianoSounds/${note.keyCode}.wav`).then(
            //TODO maybe add echo to sounds possible option later?
            async (data) => {
                const soundBuffer = await data.arrayBuffer();
                const pianoBuffer = await context.decodeAudioData(soundBuffer);
                const pianoSource = await context.createBufferSource();
                pianoSource.buffer = pianoBuffer;
                pianoSource.connect(primaryGainControl);
                pianoSource.start(context.currentTime + note.startTime);
                keyboardClickVisual(note.keyCode, color, note.startTime);
            });
        }
        catch (err) {
        }
    }
}
export default Piano;
