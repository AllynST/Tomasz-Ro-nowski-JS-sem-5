import * as Tone from "tone";

const pianoSampler = new Tone.Sampler({
    urls: {
        C1: "./piano-mp3/C1.mp3",
        C2: "./piano-mp3/C2.mp3",
        C3: "./piano-mp3/C3.mp3",
        C4: "./piano-mp3/C4.mp3",
        C5: "./piano-mp3/C5.mp3",
        C6: "./piano-mp3/C6.mp3",
        C7: "./piano-mp3/C7.mp3",
        C8: "./piano-mp3/C8.mp3",

        D1: "./piano-mp3/D1.mp3",
        D2: "./piano-mp3/D2.mp3",
        D3: "./piano-mp3/D3.mp3",
        D4: "./piano-mp3/D4.mp3",
        D5: "./piano-mp3/D5.mp3",
        D6: "./piano-mp3/D6.mp3",
        D7: "./piano-mp3/D7.mp3",

        E1: "./piano-mp3/E1.mp3",
        E2: "./piano-mp3/E2.mp3",
        E3: "./piano-mp3/E3.mp3",
        E4: "./piano-mp3/E4.mp3",
        E5: "./piano-mp3/E5.mp3",
        E6: "./piano-mp3/E6.mp3",
        E7: "./piano-mp3/E7.mp3",

        F1: "./piano-mp3/F1.mp3",
        F2: "./piano-mp3/F2.mp3",
        F3: "./piano-mp3/F3.mp3",
        F4: "./piano-mp3/F4.mp3",
        F5: "./piano-mp3/F5.mp3",
        F6: "./piano-mp3/F6.mp3",
        F7: "./piano-mp3/F7.mp3",

        G1: "./piano-mp3/G1.mp3",
        G2: "./piano-mp3/G2.mp3",
        G3: "./piano-mp3/G3.mp3",
        G4: "./piano-mp3/G4.mp3",
        G5: "./piano-mp3/G5.mp3",
        G6: "./piano-mp3/G6.mp3",
        G7: "./piano-mp3/G7.mp3",

        A1: "./piano-mp3/A1.mp3",
        A2: "./piano-mp3/A2.mp3",
        A3: "./piano-mp3/A3.mp3",
        A4: "./piano-mp3/A4.mp3",
        A5: "./piano-mp3/A5.mp3",
        A6: "./piano-mp3/A6.mp3",
        A7: "./piano-mp3/A7.mp3",

        B1: "./piano-mp3/B1.mp3",
        B2: "./piano-mp3/B2.mp3",
        B3: "./piano-mp3/B3.mp3",
        B4: "./piano-mp3/B4.mp3",
        B5: "./piano-mp3/B5.mp3",
        B6: "./piano-mp3/B6.mp3",
        B7: "./piano-mp3/B7.mp3",
        


    },
}).toDestination();

export default pianoSampler