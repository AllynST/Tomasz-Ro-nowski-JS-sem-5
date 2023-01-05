import { handleKeyboardClick } from "./keyboardHandler.js";


export function startUP():void{
    connectKeys();
    connectKeyboard();
}


function connectKeys():void{
    const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
    const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));
        
    let i = 6;
    pianoKeysWhite.forEach((elem:HTMLElement) =>{
        elem.id = `W${i}`
       
        elem.addEventListener("click",(event)=>{           
          
            handleKeyboardClick(elem.id)

            // event.target.style.opacity ="0.5"
            // setTimeout(()=>{
            //     event.target.style.opacity ="1"
            // },100)
    
        }); 
        i++     
       
    })
    i = 4
    pianoKeysBlack.forEach((elem:HTMLElement) =>{
        elem.id = `B${i}`
        
        elem.addEventListener("click",(event)=>{
            
            handleKeyboardClick(elem.id)
            // event.target.style.backgroundColor ="#222422"
            // setTimeout(()=>{
            //     event.target.style.backgroundColor ="black"
            // },100)
        });       
        i++
    })
}


function connectKeyboard():void{
    document.addEventListener("keydown",(event)=>{
        console.log("key pressed")
        handleKeyboardClick(event.key.toUpperCase())
    })
}