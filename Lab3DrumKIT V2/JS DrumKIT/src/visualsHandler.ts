
const octaves: Element[] = Array.from(document.querySelectorAll("div.octave"));

const visualiserKeysWhite:Element[] = Array.from(document.querySelectorAll("div.visualiserKeyWhite"));
const visualiserKeysBlack:Element[] = Array.from(document.querySelectorAll("div.visualiserKeyBlack"));

export function keyboardClickVisual(keyCode: string, color: string): void {

    let key = document.getElementById(keyCode);
    console.log(key)
    key!.style.backgroundColor = color;
    key!.style.opacity = "0.8";

    setTimeout(() => {
        if(keyCode[1] != "#"){
            key!.style.backgroundColor = "white";
        }
        else{
            key!.style.backgroundColor = "black";
        }        
        key!.style.opacity = "1";
    }, 100);
}

export function menuBubbleVisual(targetPosition: number): void {
    let menuBubble = document.getElementById("menuBubble");

    menuBubble!.style.top = targetPosition - 12 + "px";
    menuBubble!.style.borderRadius = "50%";

    setTimeout(() => {
        menuBubble!.style.borderRadius = "15px 0px 0px 15px";
    }, 200);
}

export function deleteTrackCard(id: number): void {
    let trackCards: HTMLElement[] = Array.from(
        document.querySelectorAll(".trackLabel")
    );
    let removalTarget: HTMLElement = trackCards.find(
        (x) => parseInt(x.id) == id
    )!;

    removalTarget.remove();
}

export function moveKeyboard(octaveNr: number): void {
    const keyboard: HTMLDivElement = document.querySelector("#keyboard")!;
    if (octaveNr == 0) {
        keyboard.style.left = "0%";
        return;
    }

    keyboard.style.left = `-97%`;
}

export function octaveHoverHandler(octaveNr: number) {
    let prev = null;

    if (prev != octaveNr) {
        octaves.forEach((octave: Element) => {
            octave.classList.remove("octaveHovered");
        });
        octaves[octaveNr].classList.add("octaveHovered");
        prev = octaveNr;
    }
}


export function visualiserKeyboardClickVisual(keyCode: string, color: string):void {
    let target: HTMLElement;
    if(keyCode[1] == "#"){
        target = visualiserKeysBlack.find((x) => x.innerHTML == keyCode)! as HTMLElement;
        
    }
    else{
        target = visualiserKeysWhite.find((x) => x.innerHTML == keyCode)! as HTMLElement;
        
    }
    target!.style.backgroundColor = color;
    target!.style.opacity = "0.8";

    setTimeout(() => {
        if(keyCode[1] != "#"){
            target!.style.backgroundColor = "white";
        }
        else{
            target!.style.backgroundColor = "black";
        }        
        target!.style.opacity = "1";
    }, 100);
}
