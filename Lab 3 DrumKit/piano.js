class Piano{
    soundTags = [];

    constructor(){
        this.soundTags = Array.from(document.querySelectorAll(".PianoKey"))
    }

    playSound(key){
            const sound = this.soundTags.find(x=>x.id==key)        
            sound.currentTime = 0;
            sound.play();
    }
}