import Player from "./Player.js";
import TimeLine from "./TimeLine.js";
import { createCustomElement } from "./helpers.js";
import {Track} from "./track.js"

export function createTrackElem(Track:Track):void{

        let trackContainer = document.getElementById("TrackList");

        const trackNameP = createCustomElement("p",{
                innerText:Track.name,
                id:Track.index
        });
        trackNameP.style.color = Track.color           
        

        const muteBtn:HTMLElement = createCustomElement("div",{
                id:Track.index,
                className:"labelIcon muteBtn",
                
        })
       
        const deleteBtn:HTMLElement = createCustomElement("div",{
                id:Track.index,
                className:"labelIcon deleteBtn"
        })
        const clearBtn:HTMLElement = createCustomElement("div",{
                id:Track.index,
                className:"labelIcon clearBtn"
        })        
        
        const label:HTMLElement = createCustomElement("div",{
                id:Track.index,
                className:"trackLabel",
                children:[
                        trackNameP,
                        muteBtn,
                        deleteBtn,
                        clearBtn                        
                ]
        })

        connectTrackListeners(label,muteBtn,deleteBtn,clearBtn)       

        trackContainer!.prepend(label);
       

       
}

function connectTrackListeners(
        label:HTMLElement,muteBtn:HTMLElement,deleteBtn:HTMLElement,clearBtn:HTMLElement
        ):void{
        //TODO CHANGE ANY add logic
        label.addEventListener("click",(e:any)=>{
                console.log("Switched to track: "+e.target.id);
                TimeLine.selectedTrack = e.target.id;
        });
        muteBtn.addEventListener("click",(e:any)=>{
                console.log("Track muted: "+e.target.id);
                e.target.classList.toggle("muted")
                Player.muteTrack(e.target.id)
                
                
        });
        deleteBtn.addEventListener("click",(e:any)=>{
                console.log("TrackDeleted: "+e.target.id);
                TimeLine.deleteTrack(e.target.id)
                
        });
        clearBtn.addEventListener("click",(e:any)=>{
                console.log("Track: "+e.target.id +" cleared");

                TimeLine.clearTrack(e.target.id)
                
        });

        
}