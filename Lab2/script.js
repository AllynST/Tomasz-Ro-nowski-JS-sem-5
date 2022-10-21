let imagesSRC = [
    "https://source.unsplash.com/Z8dtTatMVMw",
"https://source.unsplash.com/9dmycbFE7mQ",
"https://source.unsplash.com/m7K4KzL5aQ8"
]

let slides = Array.from(document.querySelectorAll(".slideCard"));


slides.forEach(elem =>{
    elem.addEventListener("mousemove", (event) => {
        console.log(event.offsetX);

        let relMousePos = scale(event.offsetX,0,elem.offsetWidth,-15,15);

        if(relMousePos>-10 && relMousePos<10 ){
            relMousePos = 0;
        }
        console.log(relMousePos)

        elem.style.transform=`rotateY(${relMousePos}deg)`;
    });
})

let currentSlideIndex = 1;

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}