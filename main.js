let inputContainerElem = document.querySelector("#inputContainer");
let inputsArr = [];
let deleteBtnArr = [];

let MaxSpan = document.querySelector("#MaxSpan");
let MinSpan = document.querySelector("#MinSpan");
let AvgSpan = document.querySelector("#AvgSpan");
let SumSpan = document.querySelector("#SumSpan");

const addEventListeners = () => {
    inputsArr.forEach((elem) => {
        elem.addEventListener("input", () => {

            MaxSpan.innerHTML = `Max= ${getMaxNum(inputsArr)}`;
            MinSpan.innerHTML = `Min= ${getMinNum(inputsArr)}`; 
            AvgSpan.innerHTML = `Avg=${getAvg(inputsArr)}`;
            SumSpan.innerHTML = `Sum=${getSum(inputsArr)}`;
        


        });
    });
    deleteBtnArr.forEach(elem =>{
        elem.addEventListener("click", ()=>{
            removeInput(+elem.value);
        })
    })
};

const removeInput = index =>{   

    inputContainerElem.removeChild(deleteBtnArr[index]);
    inputContainerElem.removeChild(inputsArr[index]);
 
}

const addField = () => {
    let input = document.createElement("input");
    let deleteBtn = document.createElement("button");
    deleteBtn.value = inputsArr.length
    console.log(deleteBtn.value);
    deleteBtn.innerText="X"
    deleteBtn.className = 'deleteBtn';
    inputContainerElem.appendChild(input);
    inputContainerElem.appendChild(deleteBtn);
    

    inputsArr = Array.from(document.querySelectorAll("input"));
    deleteBtnArr = Array.from(document.querySelectorAll(".deleteBtn"))
    addEventListeners();
};
const addFieldBtn = document.getElementById("addFieldBtn");
const maxBtn = document.querySelector("MaxBtn");

const getMaxNum = (inputsArr) => {
     inputsArr = getValueFromInput(inputsArr);

    return Math.max(...inputsArr);
};
//

const getAvg = inputsArr =>{
    inputsArr = getValueFromInput(inputsArr);
    return inputsArr.reduce((a, b) => a + b, 0) / inputsArr.length;
}

const getSum = inputsArr =>{
    inputsArr = getValueFromInput(inputsArr);

    return inputsArr.reduce((a, b) => a + b, 0);
 
}

const getMinNum = inputsArr =>{
   
   inputsArr = getValueFromInput(inputsArr);
   return Math.min(...inputsArr);
}

const getValueFromInput = inputArr =>{
    
    const targetArr = inputsArr.map(elem=>{
    return +elem.value ?? 0;
   })

   return targetArr;
}


addFieldBtn.addEventListener("click", () => {
    addField();
});
