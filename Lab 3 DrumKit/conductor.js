class Conductor {
    track = [];
    AudioContext = null;

    visualsController = new visualsController();

    //Duration of the track in seconds
    timeLineDuration = 20;

    //array of arrays first element contain an instrument
    chosenTrack = 1;

    recordState = false;
    //tackCounter has to start at 1 because [0] contains the instrument

    timeLineState;
    metronomeState = false;

    constructor() {
        this.addContext();
    }

    recordHandler = (event) => {
        let interval;
        this.timeLineHandler();
        this.AudioContext = new AudioContext();

        if (this.recordState == true) {
            clearInterval(interval);
            // this.Track.push(...this.chosenTrack)

            this.recordState = !this.recordState;
            document.querySelector("#timeLineIndicator").style.left = "0px";
            return;
        }

        this.recordState = !this.recordState;

        const test = setInterval(() => {
            if (this.AudioContext.currentTime > this.timeLineDuration) {
                this.AudioContext = new AudioContext();
            }

            this.track.forEach((t) => {
                t.playTrack();
            });
        }, this.timeLineDuration * 1001);
    };

    
    //TODO MOVE TIMELINE TO ANOTHER CLASS?

    metronomeHandler = (bpm) => {

        if (this.metronomeState == false) {
            const primaryGainControl = this.AudioContext.createGain();
            primaryGainControl.gain.setValueAtTime(1, 0);
            primaryGainControl.connect(this.AudioContext.destination);

            this.metronomeState = setInterval(async () => {
                await fetch(`./HelperSounds/metronome.wav`).then(
                    //TODO maybe add echo to sounds possible option later?
                    async (data) => {
                        const soundBuffer = await data.arrayBuffer();
                        const pianoBuffer =
                            await this.AudioContext.decodeAudioData(
                                soundBuffer
                            );

                        const pianoSource =
                            await this.AudioContext.createBufferSource();
                        pianoSource.buffer = pianoBuffer;

                        pianoSource.connect(primaryGainControl);

                        pianoSource.start(this.AudioContext.currentTime);
                    }
                );
            },60000/bpm);
        } else {
            //Unoptimal
            clearInterval(this.metronomeState);
            this.metronomeState = false;
        }
    };

    timeLineHandler = () => {
        if (this.timeLineState != null) {
            clearInterval(this.timeLineState);
            return;
        }
        const marker = document.querySelector("#timeLineIndicator");
        marker.style.display = "block";
        //TODO FIX ISSUE WITH CHANGING SCREEN WIDTH
        //const markerMaxOffset = document.querySelector(".track").offsetWidth+150;
        const markerMaxOffset = 1555;
        const markerMovement = (markerMaxOffset - 150) / this.timelane;
        let markerMovementHelper = 150;
        marker.style.left = `${markerMovementHelper}px`;

        this.timeLineState = setInterval(() => {
            marker.style.left = `${markerMovementHelper}px`;
            markerMovementHelper += markerMovement;
            if (markerMovementHelper > markerMaxOffset) {
                markerMovementHelper = 150;
            }
        }, 20);
    };

    selectTrack = (trackNum) => {
        this.chosenTrack = trackNum;
    };

    playRecording = (track) => {
        this.addContext();
    };

    addTrack = (instrument) => {
        console.log("track added");
        //TODO create class tasked with dom Manipulation
        this.addContext();

        let newTrack;
        const index = this.track.length;
        const trackContainer = document.querySelector("#trackContainer");
        const elem = document.createElement("div");
        elem.className = "trackRow";
        elem.id = index;

        const track = document.createElement("div");
        track.className = "track";
        const img = document.createElement("img");
        img.id = index;
        img.className = "trackLabel";

        const muteBtn = document.createElement("img");
        muteBtn.className = "controls";
        muteBtn.src = "./images/pause.png";
        muteBtn.id = index;

        const deleteBtn = document.createElement("img");
        deleteBtn.className = "controls";
        deleteBtn.src = "./images/Delete-Transparent.png";
        deleteBtn.id = index;

        if (instrument instanceof Piano) {
            img.src = `./images/piano.png`;
            newTrack = new Track(new Piano(), this.AudioContext);
        } else if (instrument instanceof Drum) {
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
        let instrumentsDiv = document.querySelector("#instrumentsInner");

        labelElem.addEventListener("click", (e) => {
            this.chosenTrack = e.target.id;

            if (this.track[e.target.id].instrument instanceof Piano) {
                instrumentsDiv.style.top = "0%";
            } else if (this.track[e.target.id].instrument instanceof Drum) {
                instrumentsDiv.style.top = "-100%";
            } else {
                console.log("something went wrong");
            }
        });
        muteElem.addEventListener("click", (e) => {
            console.log(`${e.target.id} has been muted`);
        });
        deleteElem.addEventListener("click", (e) => {
            console.log(e.target.id + " has been deleted");
        });

        this.track.push(newTrack);
    };

    addContext = () => {
        if (this.AudioContext === null) {
            this.AudioContext = new AudioContext();
        }
    };
    //TODO REMOVE TRACK
    //TODO Update settings (filters,gain etc...)

    playSound = (key) => {
        if (this.recordState == true) {
            console.log(this.AudioContext.currentTime);

            let note = new Note(this.AudioContext.currentTime, key, 1);
            this.track[this.chosenTrack].addNote(note);
        }
        this.track[this.chosenTrack].playSoundByKey(key);
    };
}
