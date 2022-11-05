export class Drum{   
        soundTags = [];
    
        constructor(){
            this.soundTags = Array.from(document.querySelectorAll(".DrumKey"))         
            console.log("drums added")
        }
        //TODO Fix drum to work with audio context
    
        playSound(key){
                const sound = this.soundTags.find(x=>x.id==key)
                
                if(sound != undefined){
                    
                    console.log(`${key} has been played`)
                    sound.currentTime = 0;
                    sound.play();
                }        
                
        }
    
}