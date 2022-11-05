export class Track{
    

    //Tuple with name of the sound and time from the start of the track
    notes = []
    muted = false;
    instrument


    constructor(instrument){       
        this.instrument = instrument;
    }

    addNote = (Note) =>{

        this.notes.push(Note);
        
    }
    playSoundByKey = (key) =>{
    
        this.instrument.playSound(key)
    }
    playSoundByIndex = (index) =>{     
        
        // if(!this.muted){
        //     this.instrument.playSound(this.notes[index])
        // }        
        
    }

    playTrack = () =>{

        this.notes.forEach(note => {
             console.log(note)
            this.instrument.playSound(note.keyCode,note.startTime)
        });
        
    }

    muteTrack = () =>{
        console.log("trackMuted")
        this.muted = !this.muted
    }

}