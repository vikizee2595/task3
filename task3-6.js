let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let findMedian = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
};

console.log(findMedian(arr1, arr2));




let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
})(arr1, arr2);

console.log(median);
