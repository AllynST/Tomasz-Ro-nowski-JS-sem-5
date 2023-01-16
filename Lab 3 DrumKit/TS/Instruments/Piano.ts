

import { Tone } from "../../node_modules/tone/build/esm/core/Tone";
import { Note } from "../Note.js";
import KeyboardValues from "../keyboardValues.js";
import { keyboardClickVisual } from "../visualsHandler.js";

export interface Piano{
    playSound(note:Note):void;
}
export class Piano {    

    static async playSound(note:Note,color:string){
        
        if(note.keyCode === undefined){
            return;
        }
       
        const synth = new Tone.PolySynth(Tone.Synth, {
			oscillator: {
				partials: [0, 2, 3, 4],
			}
		}).toDestination();

        synth.triggerAttackRelease(KeyboardValues[note.keyCode],"8n");
		

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
