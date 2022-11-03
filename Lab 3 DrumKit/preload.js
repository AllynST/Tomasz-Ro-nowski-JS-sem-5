const preLoadedPianoWhite = []
const preLoadedPianoBlack = []

const ElementsCount = 75;
let ElementCurr = 0;

const load = async () =>{
    for(let i =1;i<=44;i++){
        preLoadedPianoWhite.push( await fetch(
            `./PianoSounds/W${i}`
        ).then(()=>{
            ElementCurr++
            updateLoader();
        }))
    }
    for(let i =1;i<=31;i++){
        preLoadedPianoBlack.push( await fetch(
            `./PianoSounds/B${i}`
        ).then(()=>{

        }))
    }
}

//TODO This feature will be available later down the development process

//TODO UPDATE LOADING