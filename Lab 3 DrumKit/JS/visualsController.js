class visualsController{
    //TODO
    notes

    startTimeLineIndicator = () =>{

    }

    enableTrackModal = () =>{
        let trackModal = document.querySelector("#addTrackModalContainer");
        trackModal.style.display="block";
    }


    addTrack = (index,instrument) =>{
        const trackContainer = document.querySelector("#trackContainer")
        
        const elem = document.createElement("div");
        elem.className = "trackRow";
        elem.id = index;

        const track = document.createElement("div");        
        track.className="track";  
        const img = document.createElement("img");     
        img.id = index;
        img.className = "trackLabel";

        const muteBtn = document.createElement("img"); 
        muteBtn.className = "controls";
        muteBtn.src = "./images/pause.png"
        muteBtn.id = index;
               
        const deleteBtn = document.createElement("img");        
        deleteBtn.className = "controls";
        deleteBtn.src = "./images/Delete-Transparent.png";
        deleteBtn.id = index;
        
        
        if(instrument instanceof Piano){
            img.src = `./images/piano.png`;           
        }
        else if(instrument instanceof Drum){
            
            img.src = `./images/drum.png`;
        }

        
        const labelElem = elem.appendChild(img);
        
        const muteElem = elem.appendChild(muteBtn);
        const deleteElem = elem.appendChild(deleteBtn); 
        
        
        
        
        elem.appendChild(img);
        elem.appendChild(track);
        elem.appendChild(muteBtn);
        elem.appendChild(deleteBtn);

        let instrumentsDiv = document.querySelector("#instrumentsInner");

        labelElem.addEventListener("click",(e)=>{       
            this.chosenTrack = e.target.id;

            if(this.track[e.target.id].instrument instanceof Piano){
                instrumentsDiv.style.top ="0%";
            }
            else if(this.track[e.target.id].instrument instanceof Drum){
                instrumentsDiv.style.top = "-100%";
            }
            else{
                console.log("something went wrong");
            }
            

        })
        muteElem.addEventListener("click",(e)=>{            
            console.log(`${e.target.id} has been muted`);
        })
        deleteElem.addEventListener("click" , (e)=>{
            console.log(e.target.id+" has been deleted");
        })

        
        
       
        trackContainer.prepend(elem);

    }

        drawCanvas = () =>{

        }

        drawNoteOnTimeLine = (Note,color) =>{
            
            let canvas = document.querySelector('#trackVisualiser');

            if(canvas === undefined){

                //TODO DELETE CONSOLE LOG
                console.log("Cannot perform canvas operation now");
                return;
            }
            const ctx = canvas.getContext("2d");
            ctx.height = "200px";
            ctx.width = "200px";
            let coordinates = Note.keyCode.substring(1,3);
            
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.rect(10*coordinates,50,25,50);
            ctx.fill();

            ctx.stroke();
            



            //TODO CANVAS KIEDYŚ
        }

        

    
}

export default new visualsController();