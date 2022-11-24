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
        const t0 = performance.now();
        await callback(args);
        const t1 = performance.now();

        return t1 - t0;
    };
}
const sumOfArgs = async (nums) => {
   

    if (nums.length == 1) {
        return nums[0];
    }

    let sum = await asyncAdd(...nums.splice(0, 2));

    const arr = [sum, ...nums];
    return sumOfArgs(arr);
};

console.log(
    await PerfMon.measure(sumOfArgs,1,2,3,4,5,6,7,8,9,10)
);

