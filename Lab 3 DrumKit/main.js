
const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));

//TODO MOVE TO STARTUP function

const PianoSoundsContainer = document.querySelector("#PianoSounds")


let temp = 6;
pianoKeysWhite.forEach((elem) =>{
    elem.id = `W${temp}`
    elem.addEventListener("click",()=>{
        
        conductor.playSound(elem.id)
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
    elem.addEventListener("click",()=>{
        
        conductor.playSound(elem.id)
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
    //TODO Shift przedłuża dźwięk
    const shift = event.shiftKey;
   
    
    const key = event.key.toLocaleUpperCase();
    console.log(key)
    recordingHelper(key);
    if(key !="Q"){
        conductor.playSound(key)
    }
    
})

const changeTrack=(track) =>{
    conductor.chosenTrack = track;
    console.log(track)
}

//TODO might be useless
const recordingHelper = (key) => {
  
 
    if(key == 'Q'){
        conductor.recordHandler()
        return;
    }
    

    if(conductor.recordState == true){
        
    }
}



