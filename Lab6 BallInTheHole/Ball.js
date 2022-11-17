export default class Ball{

    radius = 25

    accelerationX = 0;
    accelerationY = 0;



    //TODO deacceleration

    currPosX  = 50
    currPosY = 50

    constructor(X,Y){

        console.log("ball created")
    
    }
    renderCurrentPos(context){
       
        this.currPosX += this.accelerationX
        this.currPosY += this.accelerationY
        
        
        // context.fillStyle = " #f5f5f5";
        // context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        context.beginPath();
        context.arc(this.currPosX, this.currPosY, this.radius,0, 4 * Math.PI);
        context.stroke();
        this.movementConstrains();
        return this
        
    }


    accelerationHandler(X,Y,Z){
        console.log(`acceleration X : ${this.accelerationX}`)
        console.log(`acceleration Y : ${this.accelerationY}`)
        this.accelerationX = X*0.04;
        this.accelerationY = Y*0.1;
    }

    movementConstrains = ()=>{
        if(this.currPosX >window.innerWidth){
            this.currPosX = window.innerWidth
        }
        if(this.currPosX < 0){
            this.currPosX = 0;
        }

        if(this.currPosY<0){
            this.currPosY = 0
        }
        

        if(this.currPosY > window.innerHeight){
            this.currPosY = window.innerHeight
        }
    }


}