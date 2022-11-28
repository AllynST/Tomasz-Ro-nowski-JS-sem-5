import Hole from "./Hole.js";

export default class Plane{


    width
    height  

    
    
    render(context){
        let background = new Image();
        background.src = './images/background.jpg'
        background.width = "100px"
        context.drawImage(background,0,0,window.innerWidth*0.9,window.innerHeight*0.9)
       


      
    }
}