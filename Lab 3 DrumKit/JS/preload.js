// const preLoadedPianoWhite = []
// const preLoadedPianoBlack = []

// const ElementsCount = 75;
// let ElementCurr = 0;


// const progressBar = 


// const load = async () =>{
//     for(let i =1;i<=44;i++){
//         preLoadedPianoWhite.push( await fetch(
//             `./PianoSounds/W${i}`
//         ).then(()=>{
//             ElementCurr++
//             updateLoader();
//         }))
//     }
//     for(let i =1;i<=31;i++){
//         preLoadedPianoBlack.push( await fetch(
//             `./PianoSounds/B${i}`
//         ).then(()=>{

//         }))
//     }
// }


let progressBar = document.querySelector("#bar");
let h = document.querySelector("#test");

h.style.display="none"

let i = 0;
let interval;

let promise = new Promise((resolve, reject) => {
    interval = setInterval(() => {
        progressBar.value = i;
        i++;
        if (i == 100) {
            resolve("test");
        }
    }, 20);
}).then(() => {
    progressBar.style.display = "none";
    h.style.display="block"
});
if(await promise){
clearInterval(interval)
}


//TODO This feature will be available later down the development process

//TODO UPDATE LOADING