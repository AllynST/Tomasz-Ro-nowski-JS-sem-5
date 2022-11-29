import Helpers from "./Helpers.js";

export default class Ball {
    radius = 50;

    traces = [];
    maxTracesCount = 20;

    rotation = 1;

    sensorAcceleration = {
        x: 0,
        y: 0,
    };

    accelerationModifier = {
        x: 0,
        y: 0,
    };

    maxVelocity = 10;

    //TODO deacceleration

    //TODO delete temp values
    currPosX = 140;
    currPosY = 140;

    constructor() {
        // this.currPosX = Helpers.getRandomInt(0+this.radius,window.innerWidth*0.9)
        // this.currPosY = Helpers.getRandomInt(0+this.radius,window.innerHeight*0.9)
    }

    deacceleration = () => {
        // this.rotation++
        if (this.accelerationModifier.x > this.maxVelocity) {
            this.accelerationModifier.x = this.maxVelocity;
        }
        if (this.accelerationModifier.x < -this.maxVelocity) {
            this.accelerationModifier.x = -this.maxVelocity;
        }

        if (this.accelerationModifier.y > this.maxVelocity) {
            this.accelerationModifier.y = this.maxVelocity;
        }
        if (this.accelerationModifier.y < -this.maxVelocity) {
            this.accelerationModifier.y = -this.maxVelocity;
        }

        if (
            this.accelerationModifier.y < 0.01 &&
            this.accelerationModifier.y > -0.01
        ) {
            this.accelerationModifier.y = 0;
        }
        this.accelerationModifier.y +=
            this.accelerationModifier.y > 0 ? -0.07 : 0.07;

        if (
            this.accelerationModifier.x < 0.01 &&
            this.accelerationModifier.x > -0.01
        ) {
            this.accelerationModifier.x = 0;
        }
        this.accelerationModifier.x +=
            this.accelerationModifier.x > 0 ? -0.07 : 0.07;

        // console.log(this.accelerationModifier.y)
    };

    render(context, planeTilt) {
        this.trace(this.currPosX,this.currPosY,context);

        // this.currPosX += this.sensorAcceleration.x +planeTilt.X + this.accelerationModifier.x
        // this.currPosY += this.sensorAcceleration.y +planeTilt.Y +this.accelerationModifier.y

        this.currPosX +=
            this.sensorAcceleration.x + this.accelerationModifier.x;
        this.currPosY +=
            this.sensorAcceleration.y + this.accelerationModifier.y;

        // context.beginPath();
        // context.arc(this.currPosX, this.currPosY, this.radius,0, 4 * Math.PI);

        //TODO delete hitbox marker
        
        
        
      
        context.save();   

        context.translate(this.currPosX-this.radius/2,this.currPosY-this.radius/2)        
        context.rotate(this.rotation*Math.PI/180);
        
        context.beginPath();
        
        //  context.rect(0,0,window.innerWidth,window.innerHeight)
        context.arc(0, 0, 3,0, 4 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        let shipImg = new Image();
        shipImg.src = "./images/ship.png";
           
        context.drawImage(
            shipImg,
            0-this.radius/2,
            0-this.radius/2,
            this.radius,
            this.radius
        );
        
        context.restore();
        // setTimeout(()=>{
        //     
        // },2000)
        

        this.tiltToDirection();
        this.movementConstrains();
        this.deacceleration();

        
        // console.log(`BallX: ${this.currPosX} BallY: ${this.currPosY}`)
        // console.log(`Acceleration ${this.accelerationModifier.y}`)
    }

    trace = (posX, posY, context) => {
        if (this.traces.length > this.maxTracesCount) {
            this.traces.shift();
        }

        this.traces.push({ x: posX, y: posY });
        this.traces.forEach((trace, index) => {
            context.beginPath();

            context.globalAlpha = index / 5;

            context.arc(
                trace.x-this.radius/2,
                trace.y-this.radius/2,
                this.radius/5 - index /5,
                0,
                4 * Math.PI
            );
            context.fillStyle = "yellow";
            context.fill();
        });
    };

    tiltToDirection = () => {
   
        
        let rotationValue = 1
        
        //first quarter
        if (this.sensorAcceleration.x > 0 && this.sensorAcceleration.y < 0) {
            console.log("first quarter");
            const temp = Math.sqrt(Math.pow(this.sensorAcceleration.x,2) + Math.pow(this.sensorAcceleration.y,2))
            console.log("temp: " + temp)
          
            rotationValue =90- Math.sin(this.sensorAcceleration.x / temp)* 180 /Math.PI;
     
            
            
        }
        //second quarter
        else if (this.sensorAcceleration.x <= 0 && this.sensorAcceleration.y <= 0) {
            console.log("second quarter");
            const temp = Math.sqrt(Math.pow(this.sensorAcceleration.x,2) + Math.pow(this.sensorAcceleration.y,2))

            rotationValue = 360 - Math.abs(Math.sin(this.sensorAcceleration.x / temp)* 180 /Math.PI);
          
            
        }
        //third quarter
        else if (this.sensorAcceleration.x <= 0 && this.sensorAcceleration.y >= 0) {
            console.log("third quarter");
            
            const temp = Math.sqrt(Math.pow(this.sensorAcceleration.x,2) + Math.pow(this.sensorAcceleration.y,2))

            rotationValue = 270 - Math.abs(Math.sin(this.sensorAcceleration.y / temp)* 180 /Math.PI);

        }
        //fourth quarter
        else if (this.sensorAcceleration.x >= 0 && this.sensorAcceleration.y >= 0) {
            console.log("fourth quarter");
            const temp = Math.sqrt(Math.pow(this.sensorAcceleration.x,2) + Math.pow(this.sensorAcceleration.y,2))
            console.log("temp: "+temp)
            rotationValue = 180 - Math.abs(Math.sin(this.sensorAcceleration.y / temp)* 180 /Math.PI);
            
            
        }
        
        if(isNaN(this.rotation)){
            this.rotation = 1;
        }
        if(isNaN(rotationValue)){
            rotationValue = 1;
        }
        
        this.rotation = rotationValue*0.4 + this.rotation*0.6
        console.log(this.rotation)
        
        

    };

    accelerationHandler(X, Y) {
        this.sensorAcceleration = {
            x: X * 0.1,
            y: Y * 0.1,
        };
    }
    //TODO acceleration BUG if sensor speed is lower then sensor acceleration(fixed)

    movementConstrains = () => {
        //Bounce right
        if (this.currPosX + this.radius > window.innerWidth) {
            this.currPosX = window.innerWidth - this.radius - 1;

            this.accelerationModifier.x =
                Math.abs(
                    this.accelerationModifier.x + this.sensorAcceleration.x
                ) * -1.5;
        }
        //Bounce left
        if (this.currPosX - this.radius < 0) {
            this.currPosX = 1 + this.radius;
            this.accelerationModifier.x =
                Math.abs(
                    this.accelerationModifier.x + this.sensorAcceleration.x
                ) * 1.5;
        }
        //Bounce top
        if (this.currPosY - this.radius < 0) {
            this.currPosY = 1 + this.radius;
            this.accelerationModifier.y =
                Math.abs(
                    this.accelerationModifier.y + this.sensorAcceleration.y
                ) * 1.5;
        }

        //Bounce bottom
        if (this.currPosY + this.radius > window.innerHeight) {
            this.currPosY = window.innerHeight - this.radius - 1;
            this.accelerationModifier.y =
                Math.abs(
                    this.accelerationModifier.y + this.sensorAcceleration.y
                ) * -1.5;
        }
    };
}
