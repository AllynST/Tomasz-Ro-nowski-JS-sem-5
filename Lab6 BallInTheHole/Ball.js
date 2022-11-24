import Helpers from "./Helpers.js";

export default class Ball{

    radius = 20

    traces = []


    accelerationX = 0;
    accelerationY = 0;

   




    //TODO deacceleration

    currPosX  = 140
    currPosY = 140

    constructor(){
        // this.currPosX = Helpers.getRandomInt(0+this.radius,window.innerWidth)
        // this.currPosY = Helpers.getRandomInt(0+this.radius,window.innerHeight)
       
    
    }
    render(context,planeTilt){

        this.trace(this.currPosX,this.currPosY,context)
       
       
        this.currPosX += this.accelerationX +planeTilt.X
        this.currPosY += this.accelerationY +planeTilt.Y
     
        context.beginPath();
        context.arc(this.currPosX, this.currPosY, this.radius,0, 4 * Math.PI);
        
        this.movementConstrains();
        return this
        
    }

    trace = (posX,posY,context)=>{
        if(this.traces.length>5){
            this.traces.shift()
        }

        this.traces.push({x:posX,y:posY})
        this.traces.forEach((trace,index)=>{
            context.beginPath();
            
            //Imitacja mężczyzny idzie tam gdzie go "zawodnik" poprowadzi
            // context.arc(trace.x, trace.y, (this.radius+index)/index,0, 4 * Math.PI);
            // context.fillStyle = "red";
            // context.fill();
            context.globalAlpha = index/5;

            context.arc(trace.x, trace.y, this.radius-(5-index)*2,0, 4 * Math.PI);
            context.fillStyle = "red";
            context.fill();
            
        })

        

        
    }

    accelerationHandler(X,Y){
        
        
        this.accelerationX = X*0.1;
        this.accelerationY = Y*0.1;
    }

    movementConstrains = ()=>{
        if(this.currPosX + this.radius >window.innerWidth){
            this.currPosX = window.innerWidth*0.9 - this.radius
        }
        if(this.currPosX -this.radius < 0){
            this.currPosX = 0 + this.radius
        }

        if(this.currPosY - this.radius < 0){
            this.currPosY = 0+this.radius
        }
        

        if(this.currPosY + this.radius > window.innerHeight){
            this.currPosY = window.innerHeight*0.9-this.radius
        }
    }


}