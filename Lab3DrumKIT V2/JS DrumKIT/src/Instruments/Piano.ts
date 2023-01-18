

import * as Tone from 'tone'
import { Note } from "../Note.js";

import pianoSampler from './pianoSampler.js';
import { Visualiser } from '../Visualiser.js';
import { keyboardClickVisual, visualiserKeyboardClickVisual } from '../visualsHandler.js';
// import { keyboardClickVisual } from "../visualsHandler.js";

export interface Piano{
    playSound(note:Note):void;
}
export class Piano {    

    static async playSound(note:Note,color:string){
        
        if(note.keyCode === undefined){
            return;
        }

        const now = Tone.now();
        if(note.startTime === 0){
            
            pianoSampler.triggerAttackRelease(note.keyCode,"4n",now);
            Visualiser.addNoteToVisualiser(note,color);
            keyboardClickVisual(note.keyCode,color);
            visualiserKeyboardClickVisual(note.keyCode,color);
            return;
        }

        setTimeout(()=>{
            Visualiser.addNoteToVisualiser(note,color);
            keyboardClickVisual(note.keyCode,color);
            visualiserKeyboardClickVisual(note.keyCode,color);
        },note.startTime*1000)

        

        pianoSampler.triggerAttackRelease(note.keyCode,"4n",`${now+note.startTime}`);
		



        // Comented out code is for playing sounds with the web audio api withour Tone.js
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
