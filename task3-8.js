const rotateArray = function(arr, k) {
    const len = arr.length;
    const rotations = k % len;

    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
    return rotatedArray;
};

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);

console.log(rotatedArray); 

const rotatedArray2 = (function(arr, k) {
    const len = arr.length;
    const rotations = k % len;

    const rotatedArray2 = [...arr.slice(rotations), ...arr.slice(0, rotations)];
    return rotatedArray2;
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray2); // Output: [3, 4, 5, 1, 2]



