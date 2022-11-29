import Hole from "./Hole.js";

export default class Plane{


    width
    height  

    
    
    render(context){
        let background = new Image();
        background.src = './images/background.jpg'
        background.width = "1000px"
        context.drawImage(background,0,0,window.innerWidth,window.innerHeight)
       


      
    }
}