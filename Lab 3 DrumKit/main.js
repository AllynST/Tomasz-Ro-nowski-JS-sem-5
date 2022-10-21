const conductor = new Conductor();


document.addEventListener("keypress",event =>{
    //TODO Shift przedłuża dźwięk
    const shift = event.shiftKey;   
    
    const key = event.key;
    conductor.playSound(event.key)
})


