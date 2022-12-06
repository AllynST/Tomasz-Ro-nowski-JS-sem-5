
export function drawBesier(ball1,ball2,ctx,besierColor){
    
            let modif = getQuarter(ball1,ball2)
            console.log(modif)
            
            ctx.moveTo(
                ball1.position.x + (modif.x == 1 ? ball1.radius :0),
                ball1.position.y + (modif.y == 1 ? ball1.radius :0)
               
            );
            ctx.beginPath();
           
               
            ctx.bezierCurveTo(
                ball1.position.x + (modif.x == 1 ? ball1.radius :0),
                ball1.position.y + (modif.y == 1 ? ball1.radius :0),

                ((ball1.position.x+ball2.position.x)/2)+1,
                ((ball1.position.y+ball2.position.y)/2)+1,

                ball2.position.x + (modif.x == 1 ? ball2.radius :0),
                ball2.position.y + (modif.y == 1 ? ball2.radius :0),
            
            );
           
            
            ctx.lineTo(
                 ball2.position.x + (modif.x == 1 ? -ball2.radius :0),
                 ball2.position.y + (modif.y == 1 ? -ball2.radius :0),
            );

            ctx.bezierCurveTo(
                ball2.position.x + (modif.x == 1 ? -ball2.radius :0),
                ball2.position.y + (modif.y == 1 ? -ball2.radius :0),

                ((ball1.position.x+ball2.position.x)/2)+1,
                ((ball1.position.y+ball2.position.y)/2)+1,

                
                ball1.position.x + (modif.x == 1 ? -ball1.radius :0),
                ball1.position.y + (modif.y == 1 ? -ball1.radius :0)
            
            );

            ctx.lineTo(
                 ball1.position.x + (modif.x == 1 ? -ball1.radius :0),
                 ball1.position.y + (modif.y == 1 ? -ball1.radius :0)
            );

            ctx.fillStyle=besierColor
            ctx.fill();
            ctx.stroke();
}

//returns object with added modifiers needed to determine latch points
function getQuarter(ball1,ball2){

    const xDif = Math.abs(ball1.position.x - ball2.position.x);
    const yDif = Math.abs(ball1.position.y - ball2.position.y);

    let modif = {
        x:0,
        y:0
    }

    if(xDif > yDif){
        modif.y = 1;        
    }
    else{
        modif.x = 1;
    }


    return modif
    

}


//TODO DELETE WHEN DONE
const drawHelper = (point1,point2,ctx)=>{
    ctx.beginPath();
    ctx.arc(
        point1,
        point2,
        3,
        0,
        2 * Math.PI
    );
    
    ctx.stroke();
}




