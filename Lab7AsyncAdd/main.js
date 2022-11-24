const asyncAdd = async (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Argumenty muszą mieć typ number!");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 100);
    });
};

class PerfMon {
    static measure = async (callback,...args) => {
        

        performance.mark("start");
        await callback(args);
        performance.mark("end")


        let timeElapsed =performance.measure("result","start","end").duration
        console.log(`Time elapsed in ms: ${timeElapsed}`);

        return timeElapsed;
    };
}
const sumOfArgs = async (nums) => {
    let arr = []

    if (nums.length == 1) {
        console.log(nums[0])
        return nums[0];
    }

    if(nums.length%2 != 0 && nums.length !=1){
        const test = nums.splice(nums.length - 1, 1);
        arr.push(...test)
    }

    let state = []; 

    for (let i = 0; i <= nums.length -2; i= i+2) {        
        console.log(`pair: ${nums[i]} + ${nums[i+1]}`)
        state.push(
            new Promise(async (resolve, reject) => {
                const branchResult = await asyncAdd(
                    nums[i],
                    nums[i+1]
                );
                resolve(branchResult);
            })
        );
    }
    Promise.all(state).then((data) => {
        arr.unshift(...data)      
        console.log(arr)
       return sumOfArgs(arr);
    });

};


let testArr = []
let quantity = 1000;

for(let i =1;i<quantity;i++){
    testArr.push(i)
}



console.log(
    await PerfMon.measure(sumOfArgs,...testArr)
);

