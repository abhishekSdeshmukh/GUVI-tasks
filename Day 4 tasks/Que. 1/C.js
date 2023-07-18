// Sum of all numbers in an array.

// Using anonymous function
// let arr = ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// Using IIFE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = (function(arr){
    let sum =0;
    arr.forEach(function(num) {
        sum += num;
        });
        return sum;
})(arr);
console.log(sum);