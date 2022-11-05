import {conductor} from "./conductor.js"
import {Piano} from "./piano.js"


export function loadAddTrackBtn(){
    
const addTrackBtn = document.querySelector("#addTrackBtn");
const dummyInstrumentsContainer = document.querySelector("#dummyInstrumentSelectionDiv");

let dummyState = false;
addTrackBtn.addEventListener("click", () =>{
    
    if(dummyState){
        dummyInstrumentsContainer.style.height = "200px";
        addTrackBtn.innerHTML = "-"
    }
    else{
        dummyInstrumentsContainer.style.height = "0px";
        addTrackBtn.innerHTML = "+"
    }
    dummyState = !dummyState
    
})

const instrumentButton = Array.from(dummyInstrumentsContainer.children)

instrumentButton.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.id == "pianoInst"){
            conductor.addTrack(new Piano())
            return
        }
        if(e.id == "drumInst"){
            conductor.addTrack(new Drum());
        }
        
    })
})

}