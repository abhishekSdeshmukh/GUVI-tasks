// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);

// Solution

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    numsArr[i] = "even";
  }
}

console.log(numsArr);

