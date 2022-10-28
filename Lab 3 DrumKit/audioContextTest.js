


const context = new AudioContext();

const buffer = context.createBuffer(
    1,
    context.sampleRate*1,
    context.sampleRate
)


const channelData = buffer.getChannelData(0)

for(let i = 0;i<buffer.length;i++){
    channelData[i] = Math.random() *2 -1;
}


const whiteNoiseSource = context.createBufferSource();

whiteNoiseSource.buffer = buffer;

const primaryGainControl = context.createGain();
primaryGainControl.gain.setValueAtTime(1,0);

whiteNoiseSource.connect(primaryGainControl);
primaryGainControl.connect(context.destination)



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


