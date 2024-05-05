let arr = [1, 2, 3, 4, 1, 2, 5, 6, 3];

let removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates(arr));


let arr2 = [1, 2, 3, 4, 1, 2, 5, 6, 3];

let uniqueArray = (function(arr) {
    return arr2.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
})(arr2);

console.log(uniqueArray);
