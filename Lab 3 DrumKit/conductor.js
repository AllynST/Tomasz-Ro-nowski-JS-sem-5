class Conductor {
    track = [];
    

    //Lenght of all the tracks measured in tacts
    timelane = 300;
    //Duration of one tact in miliseconds
    tactLenght = 20;
    //array of arrays first element contain an instrument
    chosenTrack = 1;    

    recordState = false;
    //tackCounter has to start at 1 because [0] contains the instrument
    tactCounter = 2;

    timeLineState;
    

    constructor(){
      
       
    }
    

    recordHandler = (event) => {
        let interval;
        this.timeLineHandler();
                

        if (this.recordState == true) {
            clearInterval(interval);
            // this.Track.push(...this.chosenTrack)
            this.recordState = !this.recordState;
            this.tactCounter = 1;
            document.querySelector("#timeLineIndicator").style.left = "0px"
            return;
        }
    
        this.recordState = !this.recordState;

        interval = setInterval(() => { 
               
            this.track.forEach((t) => {
                
              
                t.playSoundByIndex(this.tactCounter);
            });

            this.tactCounter++;

            if (this.tactCounter > this.timelane) {
                this.tactCounter = 1;
            }
        }, this.tactLenght);
    };
    //TODO MOVE TIMELINE TO ANOTHER CLASS?

    timeLineHandler = () =>{
        if(this.timeLineState != null){
            clearInterval(this.timeLineState);
            return;
        }
        const marker = document.querySelector("#timeLineIndicator");
        marker.style.display = 'block';
        console.log(document.querySelector(".track").offsetWidth)
        //TODO FIX ISSUE WITH CHANGING SCREEN WIDTH
        //const markerMaxOffset = document.querySelector(".track").offsetWidth+150;
        const markerMaxOffset = 1555;
        const markerMovement = (markerMaxOffset-150)/this.timelane;
        let markerMovementHelper = 150;
        marker.style.left = `${markerMovementHelper}px`;

        this.timeLineState = setInterval(()=>{
            marker.style.left = `${markerMovementHelper}px`
            markerMovementHelper +=markerMovement;
            if(markerMovementHelper > markerMaxOffset){
                markerMovementHelper = 150;
            }

        },20)

    }

    selectTrack = (trackNum) =>{
        this.chosenTrack = trackNum;
    }
  

    playRecording = (track) => {};

    addTrack = (instrument) => {
        let newTrack;
        const index = this.track.length
        const trackContainer = document.querySelector("#trackContainer")
        const elem = document.createElement("div");
        elem.className = "trackRow";
        elem.id = index;

        const track = document.createElement("div") ;        
        track.className="track";  
        const img = document.createElement("img")   ;     
        img.id = index;
        img.className = "trackLabel";

        const muteBtn = document.createElement("img"); 
        muteBtn.className = "controls";
        muteBtn.src = "./images/pause.png"
        muteBtn.id = index;
               
        const deleteBtn = document.createElement("img");        
        deleteBtn.className = "controls";
        deleteBtn.src = "./images/Delete-Transparent.png"
        deleteBtn.id = index;
        
        
        if(instrument instanceof Piano){
            img.src = `./images/piano.png`;
            newTrack = new Track(new Piano());
        }
        else if(instrument instanceof Drum){
            newTrack = new Track(new Drum());
            img.src = `./images/drum.png`;
        }


        elem.appendChild(img);
        elem.appendChild(track);
        elem.appendChild(muteBtn);
        elem.appendChild(deleteBtn);
        
        const labelElem = elem.appendChild(img);
        elem.appendChild(track);
        const muteElem = elem.appendChild(muteBtn);
        const deleteElem = elem.appendChild(deleteBtn);
        
        
       
        trackContainer.prepend(elem);
        let instrumentsDiv = document.querySelector("#instrumentsInner")

        labelElem.addEventListener("click",(e)=>{       
            this.chosenTrack = e.target.id;

            if(this.track[e.target.id].instrument instanceof Piano){
                instrumentsDiv.style.top ="0%"
            }
            else if(this.track[e.target.id].instrument instanceof Drum){
                instrumentsDiv.style.top = "-100%"
            }
            else{
                console.log("something went wrong")
            }
            

        })
        muteElem.addEventListener("click",(e)=>{
            
            console.log(`${e.target.id} has been muted`)
        })
        deleteElem.addEventListener("click" , (e)=>{
            console.log(e.target.id+" has been deleted")
        })

        
        this.track.push(newTrack);
    };
    //TODO REMOVE TRACK

    playSound = (key) => {
        
       
        if (this.recordState == true) {
            this.track[this.chosenTrack].addNote(key,this.tactCounter);
        }
        this.track[this.chosenTrack].playSoundByKey(key);
    };
}
