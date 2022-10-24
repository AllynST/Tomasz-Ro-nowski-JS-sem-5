class Conductor {
    track = [[new Piano()]];
    

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
                
                
                setTimeout(() => {t[0].playSound(t[this.tactCounter]);},20)
            });

            this.tactCounter++;

            if (this.tactCounter > this.timelane) {
                this.tactCounter = 1;
                console.log("timelineENDED")
            }
        }, this.tactLenght);
    };
    //TODO MOVE TIMELINE TO ANOTHER CLASS?

    timeLineHandler = () =>{
        if(this.timeLineState != null){
            clearInterval(this.timeLineState);
            return
        }
        const marker = document.querySelector("#timeLineIndicator");
        const markerMaxOffset = document.querySelector("#trackArea").offsetWidth;
        const markerMovement = markerMaxOffset/this.timelane
        let markerMovementHelper = 0;
        marker.style.left = `${markerMovementHelper}px`;

        this.timeLineState = setInterval(()=>{
            marker.style.left = `${markerMovementHelper}px`
            markerMovementHelper +=markerMovement;
            if(markerMovementHelper > markerMaxOffset){
                markerMovementHelper = 0;
            }

        },20)

    }
  

    playRecording = (track) => {};

    addTrack = (instument) => {
        const trackContainer = document.querySelector("#trackContainer")
        const elem = document.createElement("div")
        
        elem.className = "track"
        trackContainer.prepend(elem);

        let newTrack = [instument];
        console.log(newTrack)
        this.track.push(newTrack);
    };
    //TODO REMOVE TRACK

    playSound = (key) => {
        console.log(key)
       
        if (this.recordState == true) {
            this.track[this.chosenTrack][this.tactCounter - 1] = key;
        }
        this.track[this.chosenTrack][0].playSound(key);
    };
}
