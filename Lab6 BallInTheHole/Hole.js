import Helpers from "./Helpers.js";

export default class Hole{

    posX
    posY
    radius = 40;

    constructor(){
         this.posX = Helpers.getRandomInt(0+this.radius,window.innerWidth)
         this.posY = Helpers.getRandomInt(0+this.radius,window.innerHeight)
            // this.posX = 100
            // this.posY = 100

    }

    render(context){
        
        
     
        let chickenImg = new Image();
        chickenImg.src = "./images/chicken.webp";

        context.drawImage(
            chickenImg,
            this.posX,
            this.posY,
            this.radius,
            this.radius
        );
      
    }


}