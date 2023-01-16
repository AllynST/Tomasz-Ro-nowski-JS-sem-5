

import * as Tone from 'tone'
import { Note } from "../Note.js";
import KeyboardValues from "../keyboardValues.js";
// import { keyboardClickVisual } from "../visualsHandler.js";

export interface Piano{
    playSound(note:Note):void;
}
export class Piano {    

    static async playSound(note:Note,color:string){
        
        if(note.keyCode === undefined){
            return;
        }

       

        const synth = new Tone.MonoSynth(
            {
                "volume": -12,
                "detune": 0,
                "portamento": 21,
                "envelope": {
                    "attack": 0.05,
                    "attackCurve": "linear",
                    "decay": 0.3,
                    "decayCurve": "exponential",
                    "release": 0.5,
                    "releaseCurve": "exponential",
                    "sustain": 0.4
                },
                "filter": {
                    "Q": 1,
                    "detune": 15,
                    "frequency": 0,
                    "gain": 0,
                    "rolloff": -12,
                    "type": "lowpass"
                },
                "filterEnvelope": {
                    "attack": 0.001,
                    "attackCurve": "linear",
                    "decay": 0.7,
                    "decayCurve": "exponential",
                    "release": 0.8,
                    "releaseCurve": "exponential",
                    "sustain": 0.1,
                    "baseFrequency": 300,
                    "exponent": 2,
                    "octaves": 4
                },
                "oscillator": {
                    
		
		"partialCount": 0,
	
		"phase": 0,
		"type": "triangle"
                }
            })
		
        .toDestination()
        
        if(note.startTime === 0){
            synth.triggerAttackRelease(note.keyCode,"8n");
            return;
        }

        synth.triggerAttackRelease(note.keyCode,"8n",`+${note.startTime}`);
		console.log(note.startTime);

        // console.log(note.keyCode)
        
        // console.log(color)
    
        // if(note.startTime === undefined){
        //     note.startTime = 0;
        // }

        // let context = new AudioContext();
     
        // const primaryGainControl = context.createGain();
        // primaryGainControl.gain.setValueAtTime(0.1, 0);
        // primaryGainControl.connect(context.destination);
        // try{
        //     await fetch(`./PianoSounds/${note.keyCode}.wav`).then(
        //         //TODO maybe add echo to sounds possible option later?
        //         async (data) => {
                    
        //             const soundBuffer = await data.arrayBuffer();
        //             const pianoBuffer = await context.decodeAudioData(soundBuffer);
        //             const pianoSource = await context.createBufferSource();
    
        //             pianoSource.buffer = pianoBuffer;
        //             pianoSource.connect(primaryGainControl);                
        //             pianoSource.start(context.currentTime+note.startTime);
        //             keyboardClickVisual(note.keyCode,color,note.startTime)
        //         }
        //     );  
        // }
        // catch(err){
            
        // }


    }
}


export default Piano;
