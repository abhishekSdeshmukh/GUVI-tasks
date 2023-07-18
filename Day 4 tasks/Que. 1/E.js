// Return all the palindromes in an array.

// Using anonymous function.
// const arr = ["racecar", "hello", "level", "world", "madam"];

// const palindromes = arr.filter(function(str){
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// })
// console.log(palindromes);

// Using IIFE
const arr = ["level", "hello", "racecar", "world", "madam"];

const palindromes = (function(arr) {
  let palindromeArr = [];
  arr.forEach(function(str) {
    if (str === str.split("").reverse().join("")) {
      palindromeArr.push(str);
    }
  });
  return palindromeArr;
})(arr);

console.log(palindromes); 
