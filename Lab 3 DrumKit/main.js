"use strict"
const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));

//TODO MOVE TO STARTUP function

const PianoSoundsContainer = document.querySelector("#PianoSounds")

 
//TODO CLEAN UP UNUSED CODE

let temp = 6;
pianoKeysWhite.forEach((elem) =>{
    elem.id = `W${temp}`
    elem.addEventListener("click",(event)=>{
        
        conductor.playSound(elem.id)
        event.target.style.opacity ="0.5"
        setTimeout(()=>{
            event.target.style.opacity ="1"
        },100)

    });
    const audioTag = document.createElement("audio")
    audioTag.src = `./PianoSounds/W${temp}.wav`;
    audioTag.className="PianoKey";
    audioTag.id = `W${temp}`
    PianoSoundsContainer.appendChild(audioTag);
    temp++
   
})
temp = 4
pianoKeysBlack.forEach((elem) =>{
    elem.id = `B${temp}`
    elem.addEventListener("click",(event)=>{
        
        conductor.playSound(elem.id)
        event.target.style.backgroundColor ="#222422"
        setTimeout(()=>{
            event.target.style.backgroundColor ="black"
        },100)
    });
    const audioTag = document.createElement("audio")
    audioTag.src = `./PianoSounds/B${temp}.wav`;
    audioTag.className="PianoKey";
    audioTag.id = `B${temp}`
    PianoSoundsContainer.appendChild(audioTag);
    temp++
   
})

const conductor = new Conductor();



document.addEventListener("keypress",event =>{ 
    
    const key = event.key.toLocaleUpperCase();
    
    recordingHelper(key);
    if(key !="Q"){
        conductor.playSound(key)
    }
    else{
        conductor.recordHandler()   
    }
    
})

const changeTrack=(track) =>{
    conductor.chosenTrack = track;
    console.log(track)
}

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



