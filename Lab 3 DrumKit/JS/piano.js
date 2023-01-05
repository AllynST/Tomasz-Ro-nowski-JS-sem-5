export class Piano {
    static async playSound(note) {
        //I have no idea whats going on in here
        if (note.startTime == undefined) {
            note.startTime = 0;
        }
        //Following code and synchronization 
        //took 3 cups of coffee to make(edit 4)
        let context = new AudioContext();
        const primaryGainControl = context.createGain();
        primaryGainControl.gain.setValueAtTime(1, 0);
        primaryGainControl.connect(context.destination);
        await fetch(`./PianoSounds/${note.keyCode}.wav`).then(
        //TODO maybe add echo to sounds possible option later?
        async (data) => {
            const soundBuffer = await data.arrayBuffer();
            const pianoBuffer = await context.decodeAudioData(soundBuffer);
            const pianoSource = await context.createBufferSource();
            pianoSource.buffer = pianoBuffer;
            pianoSource.connect(primaryGainControl);
            pianoSource.start(context.currentTime + note.startTime);
        });
    }
}
export default Piano;
