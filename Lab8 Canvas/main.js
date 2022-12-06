import Particle from "./particle.js";
import {drawBesier} from './helpers.js'

let quantitySlider = document.querySelector("#ballsQ");
let rangeSlider = document.querySelector("#conRangeValue");

let eatStrengthSlider = document.querySelector("#eatStrength");
let mousePushSlider = document.querySelector("#mousePush");
export const colorPallete =[
    '#219EBC',
    '#023047',
    '#FFB703',
    '#FB8500',
    '#06d6a0'
]


document.querySelector("#resetBtn").addEventListener("click",()=>{
    reset();
})

let mouseX;
let mouseY;
let eatSpeed= 0.05;
let mousePushDistance = 100;
let connectRadius = 200;

let canvas;

let ctx;
let n;
let particles = [];

reset();

function reset(){

    if(canvas != undefined){
        canvas.remove();
    }
    canvas = document.createElement("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.querySelector("#root").append(canvas);

     n = quantitySlider.value;
    // n=2;
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
    

    for(let i =0; i<particles.length;i++){
        let bezierColor;
        //particles[i].render(ctx);
        
        for(let j = i+1;j<particles.length;j++){            
            
            const xDif = particles[j].position.x - particles[i].position.x;
            const yDif = particles[j].position.y - particles[i].position.y;

            const distance = Math.sqrt(
                Math.pow(xDif, 2) + Math.pow(yDif, 2)
            );

            if (distance < connectRadius) {
                bezierColor = shrink(i,j); 
                bezierColor = "black";

                ctx.globalAlpha = ((connectRadius - distance) / distance);
                    
                drawBesier(particles[i],particles[j],ctx,bezierColor)
                    
                ctx.globalAlpha = 1;
            }
        }
         particles[i].render(ctx);
        
    }
   

                        
                    
                    

                    

                    

                   
    
        
        // const xDif = particles[i].position.x - mouseX;
        // const yDif = particles[i].position.y - mouseY;

        // const distance = Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2));

        // if (distance < mousePushDistance) {
        //     const xModifier = ((mousePushDistance - distance) * (xDif > 0 ? 1  : -1))*0.05 + particles[i].velocity.x*-1;
        //     const yModifier = ((mousePushDistance - distance) * (yDif > 0 ? 1  : -1))*0.05 + particles[i].velocity.y*-1;
               
                

        //          particles[i].velocityModif.x = xModifier;
        //          particles[i].velocityModif.y = yModifier;
                
        // } else {
        //     particles[i].velocityModif.x = 0;
        //     particles[i].velocityModif.y = 0;
        // }
        
   
    
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
