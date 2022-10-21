class Conductor{
    currentInstrument = null;


    //array of arrays first element contain an instrument

    track = []

    


    constructor(){
        //temp
        this.currentInstrument = new Piano();
    }

    addTrack(instument){
        let newTrack = [instument];
        this.track.add(newTrack);
    }

    playSound(key){
        this.currentInstrument.playSound(key);
    }
    
}