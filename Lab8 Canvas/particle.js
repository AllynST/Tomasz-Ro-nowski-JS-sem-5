import { colorPallete,removeBall } from "./main.js";

export default class Particle {
    
    color = colorPallete[getRandomInt(colorPallete.length-1)]

    connectedIndexes = []

    position = {
        x: 0,
        y: 0,
    };

    velocityModif = {
        x:0,
        y:0
    }

    radius = 50;
    velocity = {
        x: 2,
        y: 1,
    };

    conDistance;

    constructor() {        
       
        this.radius = getRandomInt(15) + 5;
        this.velocity.x = getRandomInt(10)-5;
        this.velocity.y = getRandomInt(10)-5;

        //   this.velocity.x = 0;
        //   this.velocity.y = 0;
  
        this.position.x = getRandomInt(window.innerWidth);
        this.position.y = getRandomInt(window.innerHeight);

    }

    velocityHandler() {
        this.position.x += (this.velocity.x/(this.radius*0.1)) +this.velocityModif.x ;
        this.position.y +=( this.velocity.y / (this.radius * 0.1)) + this.velocityModif.y;

    }

    checkConnections = () => {        
        
    }

    isConnected = (ball) =>{        
        return this.connectedIndexes.includes(ball)
    }

    checkForRemoval = () =>{
        if(this.radius < 1){
            removeBall(this)
        }
        
    }
    

    bounce() {
        if (this.position.x < 0+this.radius) {
            this.position.x = 0 + this.radius;
            this.velocity.x = this.velocity.x *-1;
    
        }
        if (this.position.x > window.innerWidth - this.radius) {
            this.position.x = window.innerWidth - this.radius;
            this.velocity.x = this.velocity.x *-1;
        }
        if (this.position.y < 0+this.radius ) {
            this.position.y = 0+this.radius;
            this.velocity.y = this.velocity.y *-1;
        }
        if(this.position.y > window.innerHeight - this.radius){
            this.position.y = window.innerHeight - this.radius;
            this.velocity.y = this.velocity.y *-1;
        }
    }

    render(context) {
        context.beginPath();
        this.checkForRemoval();   
             
        context.fillStyle = `${this.color}`;

        if(this.radius>0){
            context.arc(
                this.position.x,
                this.position.y,
                this.radius,
                0,
                2 * Math.PI
            );
        }
             
        
        
        context.fill();
        context.stroke();
        this.bounce();
        this.velocityHandler();
        
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
