import Particle from "./particle.js";

let canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector("#root").append(canvas);

let n = 500; // number of particles
let particles = [];
let ctx = canvas.getContext("2d");

for (let i = 0; i < n; i++) {
    particles.push(new Particle());
}

let mouseX;
let mouseY;
let eatSpeed= 0.1;
let eatDistance = 100;

animate();

function animate() {

    ctx.beginPath();
    ctx.fillStyle = "white";

    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fill();
    ctx.stroke();

    particles.forEach((particle) => {
        particle.render(ctx);

        particles.forEach((elem) => {
            if (particle != elem) {
                const xDif = elem.position.x - particle.position.x;
                const yDif = elem.position.y - particle.position.y;

                const distance = Math.sqrt(
                    Math.pow(xDif, 2) + Math.pow(yDif, 2)
                );

                if (distance < 200) {
                    if(elem.radius >particle.radius){
                        elem.radius +=eatSpeed;
                        particle.radius-=eatSpeed
                        
                    }
                    else if(elem.radius <particle.radius){
                        elem.radius -= eatSpeed;
                        particle.radius += eatSpeed;
                        
                    }
                    if(elem.radius <=1){
                        particles.splice(particles.indexOf(elem), 1);
                    }
                    if(particle.radius <=1){
                        particles.splice(particles.indexOf(particle), 1);
                    }
                    ctx.globalAlpha = (200 - distance) / 200;
                    ctx.beginPath();
                    ctx.moveTo(elem.position.x, elem.position.y);
                    ctx.lineTo(particle.position.x, particle.position.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        });
    });
    particles.forEach((particle) => {
        const xDif = particle.position.x - mouseX;
        const yDif = particle.position.y - mouseY;

        const distance = Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2));

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 300, 0, 2 * Math.PI);
        ctx.stroke();

        if (distance < eatDistance) {
            const xModifier = ((eatDistance - distance) * (xDif > 0 ? 1  : -1))*0.05 + particle.velocity.x*-1;
            const yModifier = ((eatDistance - distance) * (yDif > 0 ? 1  : -1))*0.05 + particle.velocity.y*-1;
               
                

                 particle.velocityModif.x = xModifier;
                 particle.velocityModif.y = yModifier;
                
        } else {
            particle.velocityModif.x = 0;
            particle.velocityModif.y = 0;
        }
    });
   
    requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (e) => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
});
