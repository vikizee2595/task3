let nums = [1, 2, 3, 4, 5];

let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(nums));


let nums2 = [1, 2, 3, 4, 5];

let sum2 = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(nums2);

console.log(sum2);



const array = [1, 2, 3, 4, 5];

const sum3 = array.reduce((total, current) => total + current, 0);

console.log(sum3);

