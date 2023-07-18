// Return all the prime numbers in an array

// Using anonymous function
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primes = arr.filter(function(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// });

// console.log(primes); 

// Using IIFE

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = (function(arr) {
    return arr.filter(function(num){
        for(let i = 2;i < num;i++){
            if(num % i === 0){
              return false;
            }
        }
        return num > 1;
    });
 })(arr);

    console.log(primes);
