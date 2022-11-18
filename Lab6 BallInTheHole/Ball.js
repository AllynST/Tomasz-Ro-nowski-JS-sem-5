import Helpers from "./Helpers.js";

export default class Ball{

    radius = 20

    accelerationX = 0;
    accelerationY = 0;



    //TODO deacceleration

    currPosX  = 140
    currPosY = 140

    constructor(){
        // this.currPosX = Helpers.getRandomInt(0+this.radius,window.innerWidth)
        // this.currPosY = Helpers.getRandomInt(0+this.radius,window.innerHeight)
       
    
    }
    render(context){
       
       
        this.currPosX += this.accelerationX
        this.currPosY += this.accelerationY
     
        context.beginPath();
        context.arc(this.currPosX, this.currPosY, this.radius,0, 4 * Math.PI);
        context.stroke();
        this.movementConstrains();
        return this
        
    }


    accelerationHandler(X,Y,planeTilt){
        
        
        this.accelerationX = (X+planeTilt.X)*0.1;
        this.accelerationY = (Y+planeTilt.Y)*0.1;
    }

    movementConstrains = ()=>{
        if(this.currPosX + this.radius >window.innerWidth){
            this.currPosX = window.innerWidth - this.radius
        }
        if(this.currPosX -this.radius < 0){
            this.currPosX = 0 + this.radius
        }

        if(this.currPosY - this.radius < 0){
            this.currPosY = 0+this.radius
        }
        

        if(this.currPosY + this.radius > window.innerHeight){
            this.currPosY = window.innerHeight-this.radius
        }
    }


}