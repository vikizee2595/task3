let strings = ["hello", "world", "javascript"];

let titleCapsArray = (function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return result;
})(strings);

console.log(titleCapsArray);

let strings2 = ["hello", "world", "javascript"];

let convertToTitleCaps = function(arr) {
    let titleCapsArray = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        titleCapsArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return titleCapsArray;
};

console.log(convertToTitleCaps(strings2));


let strings3 = ["hello", "world", "javascript"];

// Arrow Function
let convertToTitleCaps2 = (arr) => {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
};

console.log(convertToTitleCaps2(strings3));


