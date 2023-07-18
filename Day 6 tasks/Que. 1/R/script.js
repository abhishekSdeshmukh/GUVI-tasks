// Whats the msg printed and why?

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

// Solution

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

// In the code, the variable lemein is assigned a string value of "0", which is a truthy value in JavaScript. So, when the code checks the
//  truthiness of lemein in the first if statement, it evaluates to true and executes the statement inside the block which is to concatenate 
//  the string "hi" to the msg variable.
//                                   However, the variable lemeout is assigned a value of 0, which is a falsy value in JavaScript. 
// So, when the code checks the truthiness of lemeout in the second if statement, it evaluates to false and doesn't execute the statement
//  inside the block which is to concatenate the string "Hello" to the msg variable.

// Therefore, at the end of the code, the value of msg is "hi".