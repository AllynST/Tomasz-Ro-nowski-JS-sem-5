class Track{

    notes = []
    muted = false;
    instrument


    constructor(instrument){       
        this.instrument = instrument;
    }

    addNote = (note,position) =>{
        this.notes[position-1] = note
    }
    playSoundByKey = (key) =>{
    
        this.instrument.playSound(key)
    }
    playSoundByIndex = (index) =>{     
        if(!this.muted){
            this.instrument.playSound(this.notes[index])
        }        
        
    }

    playTrack = () =>{
        
    }

    muteTrack = () =>{
        console.log("trackMuted")
        this.muted = !this.muted
    }

}