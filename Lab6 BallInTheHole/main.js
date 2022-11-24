import Ball from './Ball.js'
import GameMaster from './gameMaster.js';
import Plane from './Plane.js'


const game = new GameMaster(5);

game.setBallMovement(0,0)




const orientationHandler = (e) =>{

  const beta = (e.beta);
  const gamma = e.gamma;
  
    
    game.setBallMovement(
        gamma,
        beta
    )
    
}


window.addEventListener("deviceorientation", orientationHandler);
