import {conductor} from "./conductor.js"
import {Piano} from "./piano.js"

import {selectedInstrument,selectedColor} from './main.js'


export function loadAddTrackBtn(){
    
const addTrackBtn = document.querySelector("#addTrackBtn");

let createTrackBtn = document.querySelector("#createTrackBtn");


createTrackBtn.addEventListener("click",()=>{
    document.querySelector('#addTrackModalContainer').style.display = "block"
})


let TrackCounter = 0;


addTrackBtn.addEventListener("click", () =>{
    let addTrackModal = document.querySelector('#addTrackModalContainer')
    console.log(selectedColor)
    console.log(selectedInstrument)

    if(selectedInstrument == "Piano"){
        conductor.addTrack(new Piano(),`Track ${TrackCounter}`,selectedColor)
    }
    else if(selectedInstrument == "Drum"){{
        conductor.addTrack(new Drum(),`Track ${TrackCounter}`,selectedColor)
    }}


    TrackCounter++
    addTrackModal.style.display = "none"
})

}