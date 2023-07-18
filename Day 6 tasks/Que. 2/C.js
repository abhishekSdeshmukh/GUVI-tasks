// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// var new_string = “”;
 
// for (var i = 11; i > 0; i — ) {
//  new_string += numsArr[i] + “ “ 
// }
// console.log(new_string);

// Solution
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = numsArr.length - 1; i >= 0; i--) {
  new_string += numsArr[i];
  if (i > 0) {
    new_string += " ";
  }
}

console.log(new_string);
