import Helpers from "./Helpers.js";

export default class Hole{

    posX
    posY
    radius = 30;

    constructor(){
         this.posX = Helpers.getRandomInt(0+this.radius,window.innerWidth)
         this.posY = Helpers.getRandomInt(0+this.radius,window.innerHeight)
            // this.posX = 100
            // this.posY = 100

    }

    render(context){
        
        
     
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius,0, 4 * Math.PI);
        context.stroke();
      
    }


}