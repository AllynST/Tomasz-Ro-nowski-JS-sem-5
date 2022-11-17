export default class Plane{


    context
    width
    height

    constructor(){
        this.renderPlane();
    }

    resizeHandler(){
        //TODO RESIZE HANDLER
    }

    renderPlane(){
        let canvas = document.createElement("canvas");
       
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight
        document.querySelector("#root").append(canvas);
        this.context = canvas.getContext("2d");

        this.context.fillStyle = " #0000F6";
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}