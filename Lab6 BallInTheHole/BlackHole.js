import Helpers from "./Helpers.js";

export default class BlackHole{


    posX
    posY
    ///////////GRAVITY TEST SETTINGS////////////////
    //lesser the value the easier it is to get out

    maxAttractionValue = 0.3; // <1.5

    ////////////////////////////////////////////////
    radius = 15;
    effectRadius = 200;

    constructor(){       

        this.posX = Helpers.getRandomInt(50,window.innerWidth*0.9-50)
        this.posY = Helpers.getRandomInt(50,window.innerHeight*0.9-50)
    }


    render = (context,ball)=>{
   
        //Attraction field indicator

        // context.beginPath();
        // context.arc(this.posX, this.posY, this.effectRadius,0, 4 * Math.PI);
        // context.fillStyle = "cyan";
        //     context.fill();
        // context.stroke();
     
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius,0, 4 * Math.PI);
        context.fillStyle = "blue";
            context.fill();
        context.stroke();

        this.checkForEffectRadius(ball)
    }


    checkForEffectRadius = ball =>{
        const xDif = this.posX - ball.currPosX
        const yDif = this.posY - ball.currPosY

       
            const distance = Math.sqrt(Math.pow(xDif,2)+Math.pow(yDif,2)) - this.effectRadius
            
            if(distance < 0){
                this.attraction(ball,distance,xDif,yDif)
            }
    }
  

    attraction = (ball,distance,xDif,yDif) =>{
       
        const attractionVector = {
            x:(Math.abs(distance)* (xDif >0 ? 1 : -1)
                )*0.01,
            y:(Math.abs(distance)* (yDif > 0 ? 1 : -1)
                )*0.01,
        }       

        if(attractionVector.x >this.maxAttractionValue){
            attractionVector.x = this.maxAttractionValue;
        }
        else if(attractionVector.x <-this.maxAttractionValue){
            attractionVector.x = -this.maxAttractionValue
        }

        if(attractionVector.y >this.maxAttractionValue){
            attractionVector.y = this.maxAttractionValue;
        }
        else if(attractionVector.y <-this.maxAttractionValue){
            attractionVector.y = -this.maxAttractionValue
        }
        

        ball.accelerationModifier.x += attractionVector.x;
        ball.accelerationModifier.y += attractionVector.y;
    }







}