import Particle from "./particle.js";


let quantitySlider = document.querySelector("#ballsQ");
let rangeSlider = document.querySelector("#conRangeValue");

let eatStrengthSlider = document.querySelector("#eatStrength");
let mousePushSlider = document.querySelector("#mousePush")
export const colorPallete =[
    '#219EBC',
    '#023047',
    '#FFB703',
    '#FB8500',
    '#06d6a0'
]

let canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector("#root").append(canvas);

document.querySelector("#resetBtn").addEventListener("click",()=>{
    reset();
})

let mouseX;
let mouseY;
let eatSpeed= 0.05;
let mousePushDistance = 100;
let connectRadius = 200;

let ctx;
let n;
let particles = [];

reset();

function reset(){
     n = quantitySlider.value;
     //n=5;
    eatSpeed = eatStrengthSlider.value/10;
    connectRadius = rangeSlider.value;
    mousePushDistance = mousePushSlider.value;
    particles = [];
    
    ctx = canvas.getContext("2d");
    
    for (let i = 0; i < n; i++) {
        particles.push(new Particle());
    }
    animate();
}

function animate() {

    ctx.beginPath();
    ctx.fillStyle = "#8ECAE6";

    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fill();
    ctx.stroke();
    
    particles.forEach((ballOne,indexOne) => {
        ballOne.connectedIndexes = [];
         
        
        particles.forEach((ballTwo,indexTwo) => {

            let bezierColor;
            if (ballOne != ballTwo) {
                const xDif = ballTwo.position.x - ballOne.position.x;
                const yDif = ballTwo.position.y - ballOne.position.y;

                const distance = Math.sqrt(
                    Math.pow(xDif, 2) + Math.pow(yDif, 2)
                );

                if (distance < connectRadius) {
                    if(!(ballOne.isConnected(indexTwo))){

                    ballOne.connectedIndexes.push(indexTwo);

                        
                    
                    shrink(indexOne,indexTwo); 

                    ctx.globalAlpha = ((connectRadius - distance) / distance);
                    let xModif
                    let yModif
                        
                    if(xDif>yDif){                        
                        xModif = 0;
                        yModif = 1;
                    }
                    else{                        
                        xModif = 1;
                        yModif = 0;
                    }
                    
                    
                    ctx.beginPath();
                    ctx.moveTo(ballOne.position.x,
                           ballOne.position.y)

                    ctx.lineTo(ballTwo.position.x,
                    ballTwo.position.y,)

                    //  ctx.moveTo(ballOne.position.x + (xModif == 0 ? 0 : -ballOne.radius),
                    //       ballOne.position.y + (yModif == 0 ? 0 : -ballOne.radius));
                    // ctx.bezierCurveTo(
                    //     ballOne.position.x + (xModif == 0 ? 0 : -ballOne.radius),
                    //     ballOne.position.y + (yModif == 0 ? 0 : -ballOne.radius),

                    //     (ballOne.position.x + ballTwo.position.x)/2,
                    //     (ballOne.position.y + ballTwo.position.y)/2,

                    //     ballTwo.position.x + (xModif == 0 ? 0 : -ballTwo.radius),
                    //     ballTwo.position.y + (yModif == 0 ? 0 : -ballTwo.radius)
                    // );

                    // ctx.lineTo(ballOne.position.x + (xModif == 0 ? 0 : +ballOne.radius),
                    // ballOne.position.y + (yModif == 0 ? 0 : +ballOne.radius),)
                    
                    // ctx.bezierCurveTo(
                    //     ballOne.position.x + (xModif == 0 ? 0 : +ballOne.radius),
                    //     ballOne.position.y + (yModif == 0 ? 0 : +ballOne.radius),

                    //     (ballOne.position.x + ballTwo.position.x)/2,
                    //     (ballOne.position.y + ballTwo.position.y)/2,

                    //     ballTwo.position.x + (xModif == 0 ? 0 : +ballTwo.radius),
                    //     ballTwo.position.y + (yModif == 0 ? 0 : +ballTwo.radius)
                    // );

                    ctx.fillStyle = bezierColor;
                  

                    ctx.stroke();
                    ctx.fill()                    
                    
                    
                    
                    ctx.globalAlpha = 1;
                    }
                    
                }
                
                
            }
            
        });    
        
        const xDif = ballOne.position.x - mouseX;
        const yDif = ballOne.position.y - mouseY;

        const distance = Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2));

        if (distance < mousePushDistance) {
            const xModifier = ((mousePushDistance - distance) * (xDif > 0 ? 1  : -1))*0.05 + ballOne.velocity.x*-1;
            const yModifier = ((mousePushDistance - distance) * (yDif > 0 ? 1  : -1))*0.05 + ballOne.velocity.y*-1;
               
                

                 ballOne.velocityModif.x = xModifier;
                 ballOne.velocityModif.y = yModifier;
                
        } else {
            ballOne.velocityModif.x = 0;
            ballOne.velocityModif.y = 0;
        }
        ballOne.render(ctx);
    });
    
    requestAnimationFrame(animate);
}

export function removeBall(ball){
    console.log("ball removed")
    const index = particles.indexOf(ball);
    particles.splice(index,1)
}

canvas.addEventListener("mousemove", (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
});


function shrink(index1,index2){
    
    if(particles[index2].radius >particles[index1].radius){
        
        
        if(particles[index2].radius<window.innerHeight/4){
            particles[index2].radius +=eatSpeed;
            
        }
        particles[index1].radius-=eatSpeed
        
        
    }
    else if(particles[index2].radius <particles[index1].radius){
        
        if(particles[index1].radius<window.innerHeight/4){
            
            
            particles[index1].radius += eatSpeed;
        }
        particles[index2].radius -= eatSpeed;
    }

}
