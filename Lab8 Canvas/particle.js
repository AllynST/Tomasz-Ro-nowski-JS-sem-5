export default class Particle {
    position = {
        x: 0,
        y: 0,
    };

    velocityModif = {
        x:0,
        y:0
    }

    radius = 5;
    velocity = {
        x: 2,
        y: 1,
    };

    constructor() {
        this.radius = getRandomInt(15) + 5;
        this.velocity.x = getRandomInt(10)-5;
        this.velocity.y = getRandomInt(10)-5;
  
        this.position.x = getRandomInt(window.innerWidth);
        this.position.y = getRandomInt(window.innerHeight);

        //TODO GET RANDOMISED VALUES
    }

    velocityHandler() {
        this.position.x += (this.velocity.x +this.velocityModif.x)/(this.radius*0.1)  ;
        this.position.y += (this.velocity.y +this.velocityModif.y)/(this.radius*0.1);

        
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
        context.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            2 * Math.PI
        );
        context.stroke();
this.bounce();
        this.velocityHandler();
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
