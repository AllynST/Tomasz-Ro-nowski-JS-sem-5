import { handleKeyboardClick, handleMouseClick } from "./keyboardHandler.js";
import KeyboardValues from "./keyboardValues.js";
import { connectAsideBtns } from "./layoutHandler.js";


export function startUP():void{
    connectMouseKeys();
    connectKeyboardKeys();
    connectAsideBtns();
}


function connectMouseKeys():void{
    const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
    const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));
        
    let i = 6;
    pianoKeysWhite.forEach((elem:HTMLElement) =>{
        elem.id = `W${i}`
       
        elem.addEventListener("click",(event)=>{           
          
            handleMouseClick(elem.id)

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
            
            handleMouseClick(elem.id)
            // event.target.style.backgroundColor ="#222422"
            // setTimeout(()=>{
            //     event.target.style.backgroundColor ="black"
            // },100)
        });       
        i++
    })
}


function connectKeyboardKeys():void{
    document.addEventListener("keydown",(event)=>{
        if(event.code.toLocaleUpperCase() == "SPACE"){
            handleKeyboardClick("SPACE")
            return;
        }

        let keyboardValue = KeyboardValues[event.key.toUpperCase() as keyof typeof KeyboardValues]         
        handleKeyboardClick(keyboardValue)
        
    })
    
}
