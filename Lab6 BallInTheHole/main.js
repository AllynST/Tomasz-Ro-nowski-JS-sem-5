import Ball from './Ball.js'
import Plane from './Plane.js'


const orientationHandler = (e) =>{

  const alpha = (e.alpha-180)*-1;
  const beta = e.beta*-1;
  const gamma = e.gamma;
  console.log(alpha)
    
    ball.accelerationHandler(
        alpha,
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
