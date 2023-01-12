const trackVisualiser = document.querySelector("#trackVisualiser");
const context = trackVisualiser.getContext("2d");
export function keyboardClickVisual(keyCode, color, delay) {
    setTimeout(() => {
        let key = document.getElementById(keyCode);
        let prevColor = key.style.backgroundColor;
        key.style.backgroundColor = color;
        key.style.opacity = "0.5";
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
export function addTrackVisual(track) {
}
//TODO DELETE TEMPLATE INFO
//full scale keyboard has 88 keys
function renderVisualizer() {
}
