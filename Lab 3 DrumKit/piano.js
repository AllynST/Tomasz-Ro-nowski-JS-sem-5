class Piano {
    soundTags = [];

    constructor() {}

    async playSound(key) {
        //I have no idea whats going on in here
        //Following code took 3 cups of coffe to make
        
        const context = new AudioContext();

        const buffer = context.createBuffer(
            1,
            context.sampleRate * 1,
            context.sampleRate
        );


        const primaryGainControl = context.createGain();
        primaryGainControl.gain.setValueAtTime(1, 0);
        primaryGainControl.connect(context.destination);

        const test = await fetch(`./PianoSounds/${key}.wav`).then(
            //TODO maybe add echo to sounds possible option later?
            async (data) => {
                const soundBuffer = await data.arrayBuffer();
                const pianoBuffer = await context.decodeAudioData(soundBuffer);

                const pianoSource = await context.createBufferSource();
                pianoSource.buffer = pianoBuffer;

                pianoSource.connect(primaryGainControl);

                pianoSource.start();
            }
        );
    }
}
