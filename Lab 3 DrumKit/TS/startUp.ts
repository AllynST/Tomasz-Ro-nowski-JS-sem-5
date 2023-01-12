import TimeLine from "./TimeLine.js";
import { handleKeyboardClick, handleMouseClick } from "./keyboardHandler.js";
import KeyboardValues from "./keyboardValues.js";
import { connectAsideBtns } from "./layoutHandler.js";
import { Track } from "./track.js";

interface TrackSettings {
    index: number;
    name: string;
    color: string;
    //TODO add instrument interface
    //instrument:Instrument;
}

export function startUP(): void {
    connectMouseKeys();
    connectKeyboardKeys();
    connectAsideBtns();
    connectCreateTrackBtn();
    connectModalBtns();    
    connectAsideBtns();
    connectAsideBulletBtn()
}

let modal: HTMLElement = document.querySelector("#addTrackModalContainer");
//Function used to connect the mouseClicks on the piano
function connectMouseKeys(): void {
    const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
    const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));

    let i = 6;
    pianoKeysWhite.forEach((elem: HTMLElement) => {
        elem.id = `W${i}`;

        elem.addEventListener("click", (event) => {
            handleMouseClick(elem.id);

            // event.target.style.opacity ="0.5"
            // setTimeout(()=>{
            //     event.target.style.opacity ="1"
            // },100)
        });
        i++;
    });
    i = 4;
    pianoKeysBlack.forEach((elem: HTMLElement) => {
        elem.id = `B${i}`;

        elem.addEventListener("click", (event) => {
            handleMouseClick(elem.id);
            // event.target.style.backgroundColor ="#222422"
            // setTimeout(()=>{
            //     event.target.style.backgroundColor ="black"
            // },100)
        });
        i++;
    });
}
//Function used to connect the keyboard keys
function connectKeyboardKeys(): void {
    document.addEventListener("keydown", (event) => {
        if (event.code.toLocaleUpperCase() == "SPACE") {
            handleKeyboardClick("SPACE");
            return;
        }

        let keyboardValue =
            KeyboardValues[
                event.key.toUpperCase() as keyof typeof KeyboardValues
            ];
        handleKeyboardClick(keyboardValue);
    });
}
//Function used to connect the create track button
function connectCreateTrackBtn(): void {
    const modalBtn: HTMLElement = document.querySelector("#createTrackBtn");
    modalBtn.style.display = "block";

    modalBtn.addEventListener("click", (event) => {
        console.log("modal shoudld open");
        
        modal.style.display = "block";
    });
}

//Function used to connect the buttons in the modal
function connectModalBtns(): void {

    //default values for trackSettings
    let trackSettings: TrackSettings ={
        index: TimeLine.tracks.length,
        name: `Track ${TimeLine.tracks.length}`,
        color: "white",
    };

    let trackInput: HTMLInputElement =
        document.querySelector("#trackNameInput");
    let instrumentCards: Element[] = Array.from(
        document.querySelectorAll(".instrumentCard")
    );
    let colorPickerColors: Element[] = Array.from(
        document.querySelector("#colorPicker").children
    );
    let addTrackBtn: HTMLElement = document.querySelector("#addTrackBtn");

    colorPickerColors.forEach((color: Element) => {
        //FIXME replace any with correct type
        color.addEventListener("click", (e:any) => {
            trackSettings.color = e.target.style.backgroundColor;
            const chosenColorBox: HTMLElement = document.querySelector("#chosenColorBox");
            chosenColorBox.style.backgroundColor = trackSettings.color;
        });
    });

    trackInput.addEventListener("input", (e) => {
        trackSettings.name = trackInput.value;
    });

    instrumentCards.forEach((card: HTMLElement) => {
        card.addEventListener("click", (e) => {
            //TODO add instrument interface
            //trackSettings.instrument = card.id;
        });
    });

    addTrackBtn.addEventListener("click", (e) => {
        trackSettings.index = TimeLine.tracks.length;
        let createdTrack = new Track(
            trackSettings.index,
            trackSettings.name,
            trackSettings.color
        );
        console.log("track created" + createdTrack)
        TimeLine.addTrack(createdTrack);

        modal.style.display = "none";

    });
}

function connectAsideBulletBtn(): void{
    const asideBulletBtn: HTMLElement = document.querySelector("aside #bulletButton");
    const asideContainer: HTMLElement = document.querySelector("aside");
    let asideState: boolean = true;
    //TODO move to visual handler
    asideBulletBtn.addEventListener('click', (event) => {
        asideContainer.style.left = asideState ? "-13%" : "0%";
        asideBulletBtn.style.transform = asideState ? "rotate(0deg)" : "rotate(180deg)";
        asideState = !asideState;
    });

        
}

