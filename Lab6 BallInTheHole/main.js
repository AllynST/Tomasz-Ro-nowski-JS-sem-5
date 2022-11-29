import Ball from './Ball.js'
import GameMaster from './gameMaster.js';
import Plane from './Plane.js'


const game = new GameMaster(5,0);

game.setBallMovement(0,0)

//TODO fix holes spawning space


let canvasRef = document.querySelector("canvas")


//TODO move this to plane
// setInterval(()=>{

//   let tiltDir = getRandomInt(0,4);
//   console.log(tiltDir)

//   switch(tiltDir){
//     case 0 :
//       //Plane tilt left
//       canvasRef.style.transform = "rotateY(-10deg) perspective(1000px)"
//       canvasRef.style.transformOrigin ="center left"
//       game.planeTiltEffect = {X:-3, Y:0}
//     break

//     case 1 :
//       //Plane tilt right
//       canvasRef.style.transform = "rotateY(10deg) perspective(1000px)"
//       canvasRef.style.transformOrigin ="center right"
//       game.planeTiltEffect = {X:3, Y:0}
//     break

//     case 2 :
//       //plane tilt down
//       canvasRef.style.transform = "rotateX(-10deg) perspective(1000px)"
//       canvasRef.style.transformOrigin ="center bottom"
//       game.planeTiltEffect =  {X:0, Y:3}
//     break

//     case 3 :
//       //plane tilt up
//       canvasRef.style.transform = "rotateX(10deg) perspective(1000px)"
//       canvasRef.style.transformOrigin ="center top"
//       game.planeTiltEffect =  {X:0, Y:-3}
//     break
//   }

// },5000)

//TODO generating arrows to indicate plane tilt (visual)
//TODO popup wiggle the phone to get out out of the black hole









const orientationHandler = (e) =>{

  const beta = (e.beta);
  const gamma = e.gamma;
  
    
    game.setBallMovement(
        gamma,
        beta
    )
    
}



window.addEventListener("deviceorientation", orientationHandler);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
