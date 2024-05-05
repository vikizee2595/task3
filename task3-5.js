let words = ["level", "hello", "radar", "world", "noon"];

let getPalindromes = function(arr) {
    let palindromes = [];
    for (let word of arr) {
        if (word === word.split("").reverse().join("")) {
            palindromes.push(word);
        }
    }
    return palindromes;
};

console.log(getPalindromes(words));


let words2 = ["level", "hello", "radar", "world", "noon"];

let palindromes2 = (function(arr) {
    let palindromes2 = [];
    for (let word2 of arr) {
        if (word2 === word2.split("").reverse().join("")) {
            palindromes2.push(word2);
        }
    }
    return palindromes2;
})(words2);

console.log(palindromes2);


const words3 = ["level", "hello", "radar", "world", "noon"];

const isPalindrome = word3 => {
    const reversedWord = word3.split("").reverse().join("");
    return word3 === reversedWord;
};

const palindromes3 = words3.filter(isPalindrome);

console.log(palindromes3); // Output: ["level", "radar", "noon"]

