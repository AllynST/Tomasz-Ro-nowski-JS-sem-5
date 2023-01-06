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
    //TEMP COLOR CHANGE FOR CLICKED KEY
}
export function menuBubbleVisual(targetPosition) {
    console.log("bubble moved to: " + targetPosition);
    let menuBubble = document.getElementById("menuBubble");
    menuBubble.style.top = targetPosition - 12 + "px";
    menuBubble.style.borderRadius = "50%";
    setTimeout(() => {
        menuBubble.style.borderRadius = "15px 0px 0px 15px";
    }, 200);
}
