// Remove duplicates from an array

// Using anonymous function
// const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// const uniqueArr = arr.filter(function(value, index, self) {
//     return self.indexOf(value) === index;
//   });
//   console.log(uniqueArr);

// Using IIFE
const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueArr = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })(arr);
  
  console.log(uniqueArr);