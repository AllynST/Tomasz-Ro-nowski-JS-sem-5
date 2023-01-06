import { Recorder } from "./Recorder.js";
import { startUP } from "./startUp.js";


startUP();


//
// new Promise((resolve, reject) => {
//     let interval = setInterval(() => {
//         if (document.readyState == "complete") {
//             try{
//                 Recorder.Context = new AudioContext();
//                 clearInterval(interval);
//                 console.log("Audio context ready")
//             }
//             catch(err){
//                 console.log(err)
//             }
            
//         }
//     },100)
// })