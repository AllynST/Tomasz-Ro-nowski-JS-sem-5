import TimeLine from "./TimeLine.js";
import { Recorder } from "./Recorder.js";
const trackVisualiser = document.querySelector("#trackVisualiser");
trackVisualiser.height = 1000;
trackVisualiser.width = 1600;
const context = trackVisualiser.getContext("2d");
export function keyboardClickVisual(keyCode, color, delay) {
    setTimeout(() => {
        let key = document.getElementById(keyCode);
        let prevColor = key.style.backgroundColor;
        key.style.backgroundColor = color;
        key.style.opacity = "0.8";
        setTimeout(() => {
            key.style.backgroundColor = prevColor;
            key.style.opacity = "1";
        }, 100);
    }, delay * 1000);
}
export function menuBubbleVisual(targetPosition) {
    let menuBubble = document.getElementById("menuBubble");
    menuBubble.style.top = targetPosition - 12 + "px";
    menuBubble.style.borderRadius = "50%";
    setTimeout(() => {
        menuBubble.style.borderRadius = "15px 0px 0px 15px";
    }, 200);
}
export function deleteTrackCard(id) {
    let trackCards = Array.from(document.querySelectorAll('.trackLabel'));
    console.log(id);
    console.log(trackCards[0].id);
    let removalTarget = trackCards.find(x => parseInt(x.id) == id);
    console.log("DO wyjebania: " + removalTarget);
    removalTarget.remove();
}
export function addTrackVisual(track) {
}
//TODO
export function updateVisualiserState() {
    const time = Recorder.Context.currentTime / TimeLine.timeLineDuration;
    let progressBar = document.querySelector(".trackCurrentTime");
    progressBar.style.width = `${time * 100}%`;
    const canvasHeight = trackVisualiser.offsetHeight;
    trackVisualiser.style.bottom = `-${time * canvasHeight}px`;
    requestAnimationFrame(updateVisualiserState);
}
//TODO DELETE TEMPLATE INFO
//full scale keyboard has 88 keys
export function VisualiserPlaceNotes(notes, color) {
    notes.forEach((note) => {
        const posXHelper = parseInt(note.keyCode.slice(1));
        const positionX = posXHelper * 20;
        const positionY = trackVisualiser.height - (note.startTime / 20 * trackVisualiser.height) - 110;
        context.beginPath();
        context.fillStyle = color;
        context.rect(positionX, positionY, 20, 25);
        context.fill();
        context.stroke();
    });
}
export function VisualiserClear() {
    context.clearRect(0, 0, 2000, 2000);
}
function visualiserMovement() {
    //TODO MOVE THE CANVAS
}
