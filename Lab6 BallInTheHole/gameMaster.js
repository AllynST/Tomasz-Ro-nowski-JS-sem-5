import Ball from "./Ball.js"
import Hole from "./Hole.js"
import Plane from "./Plane.js"

export default class GameMaster{

    score
    context

    plane = new Plane()
    ball = new Ball()
    holes = []

    planeTiltEffect = {
        X:0,
        Y:0
    }



    constructor(holeCount){

        let canvas = document.createElement("canvas");
       
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight

        document.querySelector("#root").append(canvas);
        this.context = canvas.getContext("2d");
        console.log(this.context)

        this.startGame(holeCount);
        this.setBallMovement(0,0);
        
        
    }

    startGame = (holeCount)=>{       
       

        for(let i  = 0 ;i<holeCount;i++){
            this.holes.push(new Hole())
        }
        this.renderFrame(this.context)
        
    }

    setBallMovement = (vectorX,vectorY)=>{
        this.ball.accelerationHandler(vectorX,vectorY,this.planeTiltEffect)
    }

    checkForCollisions = () =>{
        this.holes.forEach(hole =>{            

            // this.context.beginPath();
            // this.context.moveTo(this.ball.currPosX, this.ball.currPosY);
            // this.context.lineTo(hole.posX, hole.posY);
            // this.context.stroke();
            const xDif = hole.posX - this.ball.currPosX
            const yDif = hole.posY - this.ball.currPosY

            const distance = Math.sqrt(Math.pow(xDif,2)+Math.pow(yDif,2)) -this.ball.radius - hole.radius
            
            if(distance < 0){
                const index = this.holes.indexOf(hole)
                this.holes.splice(index,1)
            }
            
        })
    }

    renderFrame = () =>{
         this.plane.render(this.context)        
         this.ball.render(this.context)
         this.holes.forEach(e =>{e.render(this.context)})
         this.checkForCollisions()
        
        requestAnimationFrame(this.renderFrame)

    }


}