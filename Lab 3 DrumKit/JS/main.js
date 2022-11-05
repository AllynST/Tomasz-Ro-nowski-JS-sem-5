"use strict"


const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
    const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));
        
    let temp = 6;
    pianoKeysWhite.forEach((elem) =>{
        elem.id = `W${temp}`
       
        elem.addEventListener("click",(event)=>{
            
            conductor.playSound(elem.id)
            event.target.style.opacity ="0.5"
            setTimeout(()=>{
                event.target.style.opacity ="1"
            },100)
    
        }); 
        temp++     
       
    })
    temp = 4
    pianoKeysBlack.forEach((elem) =>{
        elem.id = `B${temp}`
        
        elem.addEventListener("click",(event)=>{
            
            conductor.playSound(elem.id)
            event.target.style.backgroundColor ="#222422"
            setTimeout(()=>{
                event.target.style.backgroundColor ="black"
            },100)
        });       
        temp++
    })

import {conductor} from "./conductor.js"
//TODO MOVE TO STARTUP function

document.addEventListener("keypress",event =>{     
    const key = event.key.toLocaleUpperCase();    
 
    if(key =="Q"){
        conductor.recordHandler();          
    }
    else if(key == "1"){
        //TODO METRONOME FUNCTIONALITY
        conductor.metronomeHandler(60);
    }
    else{
         conductor.playSound(key);
    }
    
})



