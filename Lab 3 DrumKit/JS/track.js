export class Track{
    

    //Tuple with name of the sound and time from the start of the track
    notes = []
    muted = false;


    instrument

    color


    constructor(instrument,color,name){   
        this.color = color;
        this.name = name;
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
            setTimeout(()=>{
                let keyElem = document.querySelector(`#${note.keyCode}`)            
           
                keyElem.style.backgroundColor = this.color;
                setTimeout(()=>{
                    if(note.keyCode[0] == "W"){
                        keyElem.style.backgroundColor = "white"
                    }
                    else{
                        keyElem.style.backgroundColor = "black"
                    }
                    
                },100)
            },note.startTime*1000)
           
             
            this.instrument.playSound(note.keyCode,note.startTime)
        });
        
    }

    muteTrack = () =>{
        console.log("trackMuted")
        this.muted = !this.muted
    }

}