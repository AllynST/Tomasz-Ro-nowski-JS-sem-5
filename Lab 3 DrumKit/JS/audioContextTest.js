





const playSound = async() =>{
    let i = 1;
   
    setInterval(async() =>{
        const test = await fetch(`./PianoSounds/W${i}.wav`).then(async (data)=>{
            const soundBuffer = await data.arrayBuffer();
            const hihatBuffer = await context.decodeAudioData(soundBuffer)
            
            const hihatSource = await context.createBufferSource();
            hihatSource.buffer = hihatBuffer;
            
            hihatSource.connect(primaryGainControl);
            
            hihatSource.start();
            i++
            if(i > 14){
                i = 1;
            } 
            
        });
       
       
    },200)
   
}

const btn = document.querySelector("#addTrackBtn")

btn.addEventListener("click", async ()=>{

    playSound();
   
});


