import Observer from './Observer.js'
import { Subscriber } from "./Subscriber.js";
class Logger {
    static log(data) {
        console.log(data);
    }
}

     Observer.addSubscriber(new Subscriber(saveHandler));
     Observer.addSubscriber(new Subscriber(discoverPowerBallNumber));

     setTimeout(()=>{
        Observer.removeObserver(saveHandler)
     },5000)

function interval() {

    let timer = 1;
    setInterval(() => {

        Observer.notify(timer)
        
        timer++;
    }, 2000);
}

function saveHandler(data){

let output = saveCToSessionStorage(data);        
Logger.log(`[Log from C] ${output}`);
}


function saveCToSessionStorage(data) {
    console.log("[reader C]", data);
    const storageData = { data };
    sessionStorage.setItem("C", JSON.stringify(storageData));
    return data;
    
}

function discoverPowerBallNumber(data) {
    const number = Math.floor(Math.random() * data * 100);
    console.log("[powerball number]", number);
}

interval();
