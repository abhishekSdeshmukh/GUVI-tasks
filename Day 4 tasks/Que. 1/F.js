// Return median of two sorted arrays of the same size.

// Using anonymous function
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const medianOfArrays = function(arr1, arr2) {
  const mergedArr = arr1.concat(arr2).sort(function(a, b) {
    return a - b;
  });
  const len = mergedArr.length;
  if (len % 2 === 0) {
    return (mergedArr[len / 2 - 1] + mergedArr[len / 2]) / 2;
  } else {
    return mergedArr[Math.floor(len / 2)];
  }
};

console.log(medianOfArrays(arr1, arr2));



// Using IIFE
// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [2, 4, 6, 8, 10];

// const median = (function(a1, a2) {
//   const merged = a1.concat(a2);
//   merged.sort(function(a, b) {
//     return a - b;
//   });
  
//   const mid = Math.floor(merged.length / 2);
  
//   if (merged.length % 2 === 0) {
//     return (merged[mid - 1] + merged[mid]) / 2;
//   } else {
//     return merged[mid];
//   }
// })(arr1, arr2);

// console.log(median); 
