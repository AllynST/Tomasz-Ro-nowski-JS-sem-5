import { createCustomElement } from "./helpers.js";

export function createTrackElem(name,color,index):HTMLElement{

        const trackNameP = createCustomElement("p",{
                innerText:name
        })

        const colorNameP = createCustomElement("p",{
                innerText:color,                
        })        
        colorNameP.style.color = color; 
        
        const label = createCustomElement("div",{
                id:index,
                className:"trackLabel",
                children:[
                        trackNameP,
                        colorNameP
                ]
        }) 

        const trackRow = createCustomElement("div",{
                classname:"trackRow",
                id:index,
                children:[label]
        }) 

        return trackRow;
        

       
}