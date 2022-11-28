import Helpers from "./Helpers.js";

export default class Ball{

    radius = 20

    traces = []

    sensorAcceleration = {
        x:0,
        y:0
    }

    accelerationModifier = {
        x:0,
        y:0
    }

    maxVelocity = 10;

   




    //TODO deacceleration

    //TODO delete temp values
    currPosX  = 140
    currPosY = 140

    constructor(){
        // this.currPosX = Helpers.getRandomInt(0+this.radius,window.innerWidth*0.9)
        // this.currPosY = Helpers.getRandomInt(0+this.radius,window.innerHeight*0.9)
       
       
    
    }

    deacceleration = () =>{

        if(this.accelerationModifier.x > this.maxVelocity){
            this.accelerationModifier.x = this.maxVelocity
        }
        if(this.accelerationModifier.x < -this.maxVelocity){
            this.accelerationModifier.x = -this.maxVelocity
        }

        if(this.accelerationModifier.y > this.maxVelocity){
            this.accelerationModifier.y = this.maxVelocity
        }
        if(this.accelerationModifier.y < -this.maxVelocity){
            this.accelerationModifier.y = -this.maxVelocity
        }
        


            if(this.accelerationModifier.y <0.01 && this.accelerationModifier.y >-0.01){
                this.accelerationModifier.y = 0; 
            }
            this.accelerationModifier.y += this.accelerationModifier.y >0 ? -0.07 : 0.07;

            if(this.accelerationModifier.x <0.01 && this.accelerationModifier.x >-0.01){
                this.accelerationModifier.x = 0; 
            }
            this.accelerationModifier.x += this.accelerationModifier.x >0 ? -0.07 : 0.07;
            

        // console.log(this.accelerationModifier.y)

    }

    render(context,planeTilt){

        this.trace(this.currPosX,this.currPosY,context);
       
        // this.currPosX += this.sensorAcceleration.x +planeTilt.X + this.accelerationModifier.x
        // this.currPosY += this.sensorAcceleration.y +planeTilt.Y +this.accelerationModifier.y

        this.currPosX += this.sensorAcceleration.x + this.accelerationModifier.x
        this.currPosY += this.sensorAcceleration.y +this.accelerationModifier.y
     
        context.beginPath();
        context.arc(this.currPosX, this.currPosY, this.radius,0, 4 * Math.PI);
        
        this.movementConstrains();
        this.deacceleration();


        // console.log(`BallX: ${this.currPosX} BallY: ${this.currPosY}`)
        // console.log(`Acceleration ${this.accelerationModifier.y}`)
 
        
    }

    trace = (posX,posY,context)=>{
        if(this.traces.length>5){
            this.traces.shift()
        }

        this.traces.push({x:posX,y:posY})
        this.traces.forEach((trace,index)=>{
            context.beginPath();
            
            context.globalAlpha = index/5;

            context.arc(trace.x, trace.y, this.radius-(5-index)*2,0, 4 * Math.PI);
            context.fillStyle = "yellow";
            context.fill();
            
        })

        

        
    }

    accelerationHandler(X,Y){
        
        this.sensorAcceleration = {
            x: X*0.1,
            y: Y*0.1
        }
       
    }
    //TODO acceleration BUG if sensor speed is lower then sensor acceleration

    movementConstrains = ()=>{

        //Bounce right
        if(this.currPosX + this.radius >window.innerWidth*0.9){
            this.currPosX = window.innerWidth*0.9 -this.radius -1
           
            this.accelerationModifier.x = Math.abs(this.accelerationModifier.x + this.sensorAcceleration.x) *-1.5
            
            
        }
        //Bounce left
        if(this.currPosX -this.radius < 0){
            this.currPosX = 1+this.radius;
            this.accelerationModifier.x =  Math.abs(this.accelerationModifier.x + this.sensorAcceleration.x) *1.5
        }
        //Bounce top
        if(this.currPosY - this.radius < 0){
         
            this.currPosY = 1+this.radius;
            this.accelerationModifier.y = Math.abs(this.accelerationModifier.y + this.sensorAcceleration.y) *1.5
            
        }
        
        //Bounce bottom
        if(this.currPosY + this.radius > window.innerHeight*0.9){

            this.currPosY = window.innerHeight*0.9 -this.radius -1
            this.accelerationModifier.y = Math.abs(this.accelerationModifier.y + this.sensorAcceleration.y) *-1.5
           
       
        }
    }


}