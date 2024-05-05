let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers(numbers);

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Arrow Function
let printOddNumbers3 = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(numbers);

