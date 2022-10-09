// 0.38 = half empty empty empty empty
// 4.5 = full full full full half






const NumToScore = score =>{

    let resultString ="";

    while(score != 0){
        if(score%1 == 0){
            score-=1;
            resultString +="Full "

        }
        else if(score +0.5>=1){
            
            resultString+="half"
        }
        else{
            resultString +="empty"

        }
        console.log(score)
    }
return resultString;

}

const testNum = 3;

console.log(NumToScore(3));

console.log(NumToScore(3.8));

console.log(NumToScore(4.5));