let formElem = document.querySelector("form");

let inputsArr = document.querySelectorAll("input");

const addEventListeners = () =>{
    inputsArr.forEach(elem =>{

        
elem.addEventListener("keypress",()=>{
    console.log("any input is pressed")
 getMaxNum();
});
    })
}





const addField = () =>{
    let label = document.createElement("input");
    label.className="inputLabel";
    formElem.appendChild(label);


    inputsArr = document.querySelectorAll("input");
    addEventListeners();
    
    
}
const addFieldBtn = document.getElementById("addFieldBtn");
const maxBtn = document.querySelector("MaxBtn");


const getMaxNum = inputsArr =>{
    console.log(inputsArr)
    let tempArr = []

    for(let i in inputsArr){
        tempArr.push(inputsArr[i].value ?? 0)
    }    
      return Math.max(...tempArr)
}


MaxBtn.addEventListener("click",()=>{
console.log(getMaxNum(inputsArr));
})


addFieldBtn.addEventListener("click",()=>{
addField(); 
})





