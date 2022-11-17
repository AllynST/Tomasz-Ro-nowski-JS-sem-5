import Ball from './Ball.js'
import Plane from './Plane.js'


const orientationHandler = (e) =>{

  const alpha = (e.alpha-180)*-1;
  const beta = (e.beta);
  const gamma = e.gamma;
  console.log(alpha)
    
    ball.accelerationHandler(
        gamma,
        beta
    )
    
}



const plane = new Plane();
 
const ball = new Ball();




const animate = ()=>{

    ball.renderCurrentPos(plane.context);
    requestAnimationFrame(animate)
}


requestAnimationFrame(animate)
window.addEventListener("deviceorientation", orientationHandler);
