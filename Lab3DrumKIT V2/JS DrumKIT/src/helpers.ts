import Piano from "./Instruments/Piano"
import {Note} from "./Note"

/** 
    * This function allows to create custom elements with props like in react
    * @param element - element to be created(HTML element or string)
    * @param props - props to be added to the element(they have to exist on given element)
 */
export function createCustomElement(element:any,props:any){
    if(typeof(element) === "string"){
        element = document.createElement(element) 
    }
           

    for(const [key,value] of Object.entries(props)){
        if(value instanceof Array){
            if(key == "children"){
                value.forEach((prop)=>{
                    element.append(prop)
                })
            }               
            return element
        }            
        element[key] = value;          
        
    }      
    return element      
}


/**This function allows to schedule notes over a period of time to avoid performance drops during timeline reset*/
export function playTrackOptimalisation(notes:Note[],color:string):void{

 
    notes.forEach((note,index)=>{
        setTimeout(()=>{
            
            Piano.playSound(note,color)
        },index * 10)
    })

}