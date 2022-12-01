import Particle from './particle.js'

let canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector("#root").append(canvas);

let n = 50 // number of particles
let particles = []
let ctx = canvas.getContext("2d");

for(let i = 0 ;i<n;i++){
    particles.push(new Particle())
}

animate();

function animate(){
    ctx.beginPath();
    ctx.fillStyle = "white";
    
    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fill();
    ctx.stroke();

    particles.forEach((particle)=>{
        particle.render(ctx);

        particles.forEach(elem =>{
            if(particle !=elem){

                const xDif = elem.position.x - particle.position.x;
                const yDif = elem.position.y - particle.position.y;

                const distance = Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2))                  

                if (distance < 300) {

                    ctx.globalAlpha = (300-distance)/300
                    ctx.beginPath();
                    ctx.moveTo(elem.position.x, elem.position.y);
                    ctx.lineTo(particle.position.x, particle.position.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
                
            }
            
        })
    })   

    requestAnimationFrame(animate);
}


canvas.addEventListener("mousemove", (e)=>{

    const x = e.offsetX
    const y = e.offsetY

    console.log("X: "+x+" Y: "+y)

})


        