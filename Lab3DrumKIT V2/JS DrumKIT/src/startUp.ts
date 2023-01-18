import TimeLine from "./TimeLine.js";
import { Visualiser } from "./Visualiser.js";
import { handleKeyboardClick, handleMouseClick } from "./keyboardHandler.js";
import KeyboardValues from "./keyboardValues.js";
import { connectAsideBtns } from "./layoutHandler.js";
import { Track } from "./track.js";
import { moveKeyboard, octaveHoverHandler } from "./visualsHandler.js";

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
    connectAsideBulletBtn();
    connectOctaveInteraction();
    visualiserContextGetter();
}

let modal: HTMLElement = document.querySelector("#addTrackModalContainer")!;
//Function used to connect the mouseClicks on the piano
function connectMouseKeys(): void {
    const pianoKeysWhite = Array.from(document.querySelectorAll(".keyWhite"));
    const pianoKeysBlack = Array.from(document.querySelectorAll(".keyBlack"));
    
    pianoKeysWhite.forEach((elem: any) => {
        elem.innerHTML = elem.id;

        elem.addEventListener("click", (event: any) => {
            handleMouseClick(event.target.id);
        });
    });

    pianoKeysBlack.forEach((elem: HTMLElement) => {
        elem.addEventListener("click", (event: any) => {
            handleMouseClick(event.target.id);
        });
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
    const modalBtn: HTMLElement = document.querySelector("#createTrackBtn")!;
    modalBtn.style.display = "block";

    modalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });
}

//Function used to connect the buttons in the modal
function connectModalBtns(): void {
    //default values for trackSettings
    let trackSettings: TrackSettings = {
        index: TimeLine.tracks.length,
        name: `Track ${TimeLine.tracks.length}`,
        color: "white",
    };

    let trackInput: HTMLInputElement =
        document.querySelector("#trackNameInput")!;
    // let instrumentCards: Element[] = Array.from(
    //     document.querySelectorAll(".instrumentCard")!
    // );
    let colorPickerColors: Element[] = Array.from(
        document.querySelector("#colorPicker")!.children
    );
    let addTrackBtn: HTMLElement = document.querySelector("#addTrackBtn")!;

    colorPickerColors.forEach((color: Element) => {
        //FIXME replace any with correct type
        color.addEventListener("click", (e: any) => {
            trackSettings.color = e.target.style.backgroundColor;
            const chosenColorBox: HTMLElement =
                document.querySelector("#chosenColorBox")!;
            chosenColorBox.style.backgroundColor = trackSettings.color;
        });
    });

    trackInput.addEventListener("input", (e) => {
        trackSettings.name = trackInput.value;
    });

    // instrumentCards.forEach((card: HTMLElement) => {
    //     card.addEventListener("click", (e) => {
    //         //TODO add instrument interface
    //         //trackSettings.instrument = card.id;
    //     });
    // });

    addTrackBtn.addEventListener("click", (e) => {
        trackSettings.index = TimeLine.tracks.length;
        let createdTrack = new Track(
            trackSettings.index,
            trackSettings.name,
            trackSettings.color
        );
        TimeLine.addTrack(createdTrack);

        modal.style.display = "none";
    });
}

function connectAsideBulletBtn(): void {
    const asideBulletBtn: HTMLElement = document.querySelector(
        "aside #bulletButton"
    )!;
    const contentWrapper: HTMLElement = document.querySelector("#contentWrapper")!;
    const asideContainer: HTMLElement = document.querySelector("aside")!;
    let asideState: boolean = true;
    //TODO move to visual handler
    asideBulletBtn.addEventListener("click", () => {
        asideContainer.style.left = asideState ? "-13%" : "0%";
        // contentWrapper.style.right = asideState ? "0" : "15%";
        asideBulletBtn.style.transform = asideState
            ? "rotate(0deg)"
            : "rotate(180deg)";
        asideState = !asideState;
    });
}

function connectOctaveInteraction(): void {
    let octaves: Element[] = Array.from(
        document.querySelectorAll("div.octave")
    );
    const octaveSelector: HTMLElement = document.querySelector("div#octaveSelector")!;

    let chosenOctave = 0;

    octaves.forEach((octaveElem: Element) => {
        octaveElem.addEventListener("click", (event) => {
            const target: HTMLElement = event.target as HTMLElement;
            moveKeyboard(parseInt(target.id));
            chosenOctave = parseInt(target.id);
        });

        octaveElem.addEventListener("mouseenter", (event) => {
            const target: HTMLElement = event.target as HTMLElement;
            octaveHoverHandler(parseInt(target.id));
        });
    });

    octaveSelector.addEventListener("mouseleave", () => {
        octaveHoverHandler(chosenOctave);
    });

    
}

export function setVisualiserHeight() {
    //template
    //FIXME no dynamic track lenght yet
}

function visualiserContextGetter() {
    const visualiser: HTMLCanvasElement =
        document.querySelector("#trackVisualiser")!;
        visualiser.width = 1400;
        visualiser.height = 800;
    Visualiser.ctx = visualiser.getContext("2d")!;
  
}
