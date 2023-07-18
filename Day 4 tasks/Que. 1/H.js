// Rotates the array by K times

// Using anonymous function
// const arr = [1, 2, 3, 4, 5];
// const k = 2;

// const rotatedArr = arr.map(function(value, index, self) {
//   return self[(index + k) % self.length];
// });

// console.log(rotatedArr); 

// Using IIFE
const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotateArray = (function(arr, k) {
    k = k % arr.length;
    let rotatedArr = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArr;
  })(arr, k);

  console.log(rotateArray)