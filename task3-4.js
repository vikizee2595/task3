let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let getPrimeNumbers = function(arr) {
    let primes = [];
    for (let num of arr) {
        let isPrime = true;
        if (num === 1) {
            continue;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
};

console.log(getPrimeNumbers(numbers));


let numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = (function(arr) {
    let primes = [];
    for (let num of arr) {
        let isPrime = true;
        if (num === 1) {
            continue;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
})(numbers2);

console.log(primes);


const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = numbers3.filter(isPrime);

console.log(primeNumbers);