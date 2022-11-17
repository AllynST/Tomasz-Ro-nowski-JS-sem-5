import Ball from './Ball.js'
import Plane from './Plane.js'


const plane = new Plane()

window.alpha

const ball = new Ball();

const orientationHandler = (e) =>{

  const alpha = (e.alpha-180)*-1;
  const beta = e.beta;
  const gamma = e.gamma;
  console.log(alpha)
    
    ball.accelerationHandler(
        alpha,
        beta
    )
    
}


const animate = ()=>{

    ball.renderCurrentPos(plane.context);
    requestAnimationFrame(animate)
}


requestAnimationFrame(animate)
window.addEventListener("deviceorientation", orientationHandler);
