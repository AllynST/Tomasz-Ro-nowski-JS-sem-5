class Conductor {
    track = [];
    

    //Lenght of all the tracks measured in tacts
    timelane = 300;
    //Duration of one tact in miliseconds
    tactLenght = 20;
    //array of arrays first element contain an instrument
    chosenTrack = 0;
    

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
        console.log(document.querySelector(".track").offsetWidth)
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
        const index = this.track.length

        const trackContainer = document.querySelector("#trackContainer")
        const elem = document.createElement("div");
        elem.className = "trackRow";
        elem.id = `TrackRow${index}`
        const track = document.createElement("div") ;
        track.id=`Track${index}`;
        track.className="track"     ;  
        const img = document.createElement("img")   ;    
        img.id=`Label${index}`; 
        img.className = "trackLabel";
        const muteBtn = document.createElement("img");
        
        const deleteBtn = document.createElement("img");
        muteBtn.className = "controls";
        muteBtn.src = "./images/pause.png"
        muteBtn.id = `Mute${index}`
        
        deleteBtn.className = "controls";
        deleteBtn.src = "./images/Delete-Transparent.png"
        deleteBtn.id=`Delete${index}`
        
        if(instrument instanceof Piano){
            img.src = `./images/piano.png`;
        }
        else if(instrument instanceof Drum){
            img.src = `./images/drum.png`;
        }


        elem.appendChild(img);
        elem.appendChild(track);
        elem.appendChild(muteBtn);
        elem.appendChild(deleteBtn);
       
        trackContainer.prepend(elem);
        
        document.querySelector(`#Label${index}`).addEventListener("click",()=>{
            console.log(`Changed track`);
            this.selectTrack(index)
        })
        document.querySelector(`#Delete${index}`).addEventListener("click",()=>{
            console.log(`Deleted Track`);
            this.track.splice(this.track,1)
        })
        document.querySelector(`#Mute${index}`).addEventListener("click",()=>{
            
            this.track[index].muteTrack();
           
        })

        this.track.push(new Track(instrument))

    };
    //TODO REMOVE TRACK

    playSound = (key) => {
        
       
        if (this.recordState == true) {
            this.track[this.chosenTrack].addNote(key,this.tactCounter);
        }
        this.track[this.chosenTrack].playSoundByKey(key);
    };
}
