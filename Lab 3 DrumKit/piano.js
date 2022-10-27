class Piano{
    soundTags = [];

    constructor(){
        this.soundTags = Array.from(document.getElementsByClassName("PianoKey"))
      
    }

    playSound(key){
        
            const sound = this.soundTags.find(x=>x.id==key)        
            
            if(sound != undefined){
                
                //console.log(`${key} has been played`)
                sound.currentTime = 0;
                sound.play();
            }        
            
    }
}