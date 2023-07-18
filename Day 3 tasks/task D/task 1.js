// 1) Declare four variables without assigning values and print them in console
// Soln
// var variable1, variable2, variable3, variable4, variable5;
// console.log(variable1, variable2, variable3, variable4, variable5);

// ___________________________________________________________________________________________________________________
// 2) How to get value of the variable myvar as output.
// var myvar= 1;
// console.log("myvar");

// Soln
// var myvar= 1;
// console.log(myvar);
// ___________________________________________________________________________________________________________________

// 3) Declare variables to store your first name, last name, marital status, country, and age in multiple lines:

// Soln
// var firstName = "John";
// var lastName = "Doe";
// var maritalStatus = "Single";
// var country = "United States";
// var age = 25;
// ___________________________________________________________________________________________________________________

// 4) Declare variables to store your first name, last name, marital status, country and age in a single line.

// Soln
// const [firstName, lastName, maritalStatus, country, age] = ["John", "Doe", "Single", "USA", 30];
// console.log(firstName,lastName,maritalStatus,country,age)
// ___________________________________________________________________________________________________________________

// 5) Declare variables and assign string, boolean, undefined and null data types
// Soln
// String variable
// let name = "John";

// // Boolean variable
// let isStudent = true;

// // Undefined variable
// let age;

// // Null variable
// let address = null;

// ___________________________________________________________________________________________________________________

// 6). Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)

// Soln
// let myAgeString = "25";
// let yourAgeString = "30";

// // Using parseInt()
// let myAge = parseInt(myAgeString);
// let yourAge = parseInt(yourAgeString);

// console.log(myAge);   
// console.log(yourAge); 

// // Using Number()
// myAge = Number(myAgeString);
// yourAge = Number(yourAgeString);

// console.log(myAge);   
// console.log(yourAge); 

// // Using the plus sign (+)
// myAge = +myAgeString;
// yourAge = +yourAgeString;

// console.log(myAge);   
// console.log(yourAge);  

// ___________________________________________________________________________________________________________________

// 7) Write 6 statement which provide truthy & falsey values.
// Soln
// Truthy values:

// let value1 = !!true; - The double negation of true results in a truthy value.
// let value2 = !!5; - The double negation of a non-zero number (e.g., 5) is truthy.
// let value3 = !! "Hello"; - The double negation of a non-empty string (e.g., "Hello") is truthy.
// let value4 = !![1, 2, 3]; - The double negation of an array with elements is truthy.
// let value5 = !!{ name: "John" }; - The double negation of an object is truthy.
// let value6 = !!function() { return true; }; - The double negation of a function that returns true is truthy.

// Falsey values:

// let value1 = !!false; - The double negation of false results in a falsey value.
// let value2 = !!0; - The double negation of 0 is falsey.
// let value3 = !!""; - The double negation of an empty string ("") is falsey.
// let value4 = !!null; - The double negation of null is falsey.
// let value5 = !!undefined; - The double negation of undefined is falsey.
// let value6 = !!NaN; - The double negation of NaN is falsey.

// ___________________________________________________________________________________________________________________
