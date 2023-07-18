// Simple Programs todo for Condition , Looping and Arrays
// 1) Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
//Soln 
// for (let line = "#"; line.length <= 7; line += "#"){
// console.log(line);
// ___________________________________________________________________________________________________________________
// }

// ___________________________________________________________________________________________________________________

// 2)Iterate through the string array and print it contents
// var strArray= ["<option>Jazz</option>",
// ,"<option>Blues</option>",
// ,"<option>New Age</option>",
// ,"<option>Classical</option>",
// ,"<option>Opera</option>"]
// Soln
// var strArray= ["<option>Jazz</option>",
// "<option>Blues</option>",
// "<option>New Age</option>",
// "<option>Classical</option>",
// "<option>Opera</option>"];
// for (let i = 0; i < strArray.length; i++){
//     console.log(strArray[i]);
// }

// ___________________________________________________________________________________________________________________

// ARRAYS

                    
// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
// Declare an empty array;
// Soln
// var myArray = [11,22,33,44,55];
// var count = 0;
// for (var i in myArray){
//     count ++;
// }
// console.log("Number of elements in the array: " + count);


// ___________________________________________________________________________________________________________________

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
// let foods=[]
// Soln
// let foods = [
//     "Pizza","Sushi", "Burger","Pasta", "Ice Cream", "Tacos", "Steak",  "Chocolate",
//     "Curry", "Ramen",  "Chicken Wings",  "Salmon",  "Nachos",  "Donuts",    "Fried Rice",
//     "Cupcakes",   "Lasagna",   "Caramel Popcorn",   "Cheesecake",   "Pad Thai"
//   ];
  
//   console.log(foods);
  

// ___________________________________________________________________________________________________________________

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. 
// let foods=[]
// How can you find your fifth favorite food?
// Find the length of your foods array
// Soln
// let foods = [
//      "Pizza","Sushi", "Burger","Pasta", "Ice Cream", "Tacos", "Steak",  "Chocolate",
//      "Curry", "Ramen",  "Chicken Wings",  "Salmon",  "Nachos",  "Donuts",    "Fried Rice",
//      "Cupcakes",   "Lasagna",   "Caramel Popcorn",   "Cheesecake",   "Pad Thai"
//       ];
//       console.log("Fifth favorite food: "+ foods[4]);              
//       console.log("Length of foods array: "+ foods.length);

// ___________________________________________________________________________________________________________________

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
// let friends = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”];
//     function dataHandling(input){
//     for (var i = 0; i < input.length; i++) {
//     }
//     }
//     dataHandling(friends);
// Soln
// let friends = ["Mari","MaryJane","CaptainAmerica","Munnabhai","Jeff","AAK chandran"];
// function dataHandling(input){
//     for (var i = 0; i < input.length; i ++){
//         if(input[i] === "Mari" ){
//             input[i] = "Munnabhai";
//             break; // exit the loop once change is made
//         }
//     }
//     console.log("Updated friends array: " + input);
// }
// dataHandling(friends);

// ___________________________________________________________________________________________________________________

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
// const friends = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”];
// function dataHandling(input){
// for (var i = 0; i < input.length; i++) {
// }
// }
// dataHandling(friends);

// Soln
// let friends = ["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK chandran"];
// function dataHandling(input){
//     for (var i = 0; i < input.length; i++){
//         console.log(input[i]);
//      if (input[i]=== "CaptainAmerica"){
//         break;// exit the loop once captain america is found
//   }   
//  }
// }
// dataHandling(friends);

// ___________________________________________________________________________________________________________________

// Find the person is ur friend or not.
// const friends = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”];
// function dataHandling(input, name){
// for (var i = 0; i < input.length; i++) {
// }
// }
// let found = dataHandling(friends,”Jeff”);
// console.log(found);

// Soln
// const friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// function dataHandling(input,name){
//     for (var i = 0; i < input.length; i++){
//         if (input[i]=== mame){
//             return true; // Return true if the name is found in the array
//         }
//     }
//     return false;// Return false if the name is found in the array
// };

// ___________________________________________________________________________________________________________________

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
// var friends1 = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”];
// var friends2 = [“Gabbar”,“Rajinikanth”,“Mass”,“Spiderman”,“Jeff”,“ET”];
// function dataHandling(input){
// Your code goes here
// }
// dataHandling(friends);

// Soln
// var friends1 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
// function dataHandling(input){
//Your code goes here
// var combinedArray = input[0].concat(input[1]);
// var sortedArray = combinedArray.sort();
// return sortedArray;
// }
// var friends = dataHandling([friends1,friends2]);
// console.log(friends);


// ___________________________________________________________________________________________________________________

// 1) Get the first item, the middle item and the last item of the array
// var array = [1, 2, 3, 4, 5];
// var firstItem = array[0]; // Get the first item (index 0)
// var middleItem = array[Math.floor(array.length / 2)]; // Get the middle item
// var lastItem = array[array.length - 1]; // Get the last item

// console.log("First Item:", firstItem);
// console.log("Middle Item:", middleItem);
// console.log("Last Item:", lastItem);
// ___________________________________________________________________________________________________________________


// 2) Add your name to the end of the friends array, and add another name to beginning.
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// friends.push("Abhishek");
// friends.unshift("Deshmukh");
// console.log(friends);
// ___________________________________________________________________________________________________________________


// 3) Add Mr or Ms to the names in the friends array.
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// var newFriends = friends.map(function(name){
//     if (name === "CaptianAmerica" || name === "Jeff" || name === "Mari" || name === "AAK chandran"){
//         return "Mr. " + name
//     }else{ return "Ms. "+ name
// }
// });
// console.log(newFriends);
// ___________________________________________________________________________________________________________________


// 4) Concat all the names the friends array and return as comma “,” seperated string.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

// var concatenatedNames = "";
// for (var i = 0; i < friends.length; i++) {
//   if (i !== 0) {
//     concatenatedNames += ", ";
//   }
//   concatenatedNames += friends[i];
// }
// console.log(concatenatedNames);
// ___________________________________________________________________________________________________________________


// 5) Find the friends names who has letter ‘a’ and return the list.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// var newFriends = friends.filter(function(name){
//     return name.includes("a") || name.includes("A");
// });
// console.log(newFriends);
// ___________________________________________________________________________________________________________________


// 6) Find the avg length of all the friends names. Get the individual length of the names and do the avg.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// var totalLength = 0;
// for ( var i = 0; i < friends.length; i++){
//     totalLength += friends[i].length;
// }
// var avgLength = totalLength/friends.length;
// console.log(avgLength);
// ___________________________________________________________________________________________________________________


// 7) Find the names and return the list starting with letter M.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

// var namesStartingWithM = friends.filter(function(name) {
//   return name.startsWith('M');
// });
// console.log(namesStartingWithM);
// ___________________________________________________________________________________________________________________


// 8) Find the name with max characters and return the name.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

// var longestName = friends.reduce(function(longest, name) {
//   return name.length > longest.length ? name : longest;
// }, '');
// console.log(longestName);
// ___________________________________________________________________________________________________________________


// 9) Find the name with min characters and return the name.
// Soln
// var friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
// var shortestName = friends.reduce(function(shortest, name) {
//   return name.length < shortest.length || shortest.length === 0 ? name : shortest;
// }, '');
// console.log(shortestName);
// ___________________________________________________________________________________________________________________


// Find the average in the array below.
// Make sure you add only the numbers and do avg.
// const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];
// Soln
// const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
// Filter out the numbers from the array
// const numbers = friendsInfo.filter(item => typeof item === 'number');
// Calculate the sum of the numbers
// const sum = numbers.reduce((total, num) => total + num, 0);
// // Calculate the average
// const average = sum / numbers.length;
// console.log(average);
// ___________________________________________________________________________________________________________________


// Print the contents of the input variable
// var input = [
// [“0001”, “Roman Alamsyah”, “Bandar Lampung”, “21/05/1989”, “Membaca”],
// [“0002”, “Dika Sembiring”, “Medan”, “10/10/1992”, “Bermain Gitar”],
// [“0003”, “Winona”, “Ambon”, “25/12/1965”, “Memasak”],
// [“0004”, “Bintang Senjaya”, “Martapura”, “6/4/1970”, “Berkebun”]
// ]
// function dataHandling(input){
// for (var i = 0; i < input.length; i++) {
// //Your code goes here
// }
// }
// dataHandling(input);

// Soln
// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//   ];
//     function dataHandling(input) {
//     for (var i = 0; i < input.length; i++) {
//       var innerArray = input[i];
//       for (var j = 0; j < innerArray.length; j++) {
//         console.log(innerArray[j]);
//       }
//       console.log(""); // Print a blank line after each inner array
//     }
//   }
//     dataHandling(input);
// ___________________________________________________________________________________________________________________

// ___________________________________________________________________________________________________________________


// Objects:

// What the output
// myobject = {1:one,”11":1,”name”:”arun”}
// console.log(myobject.11); 
// console.log(myobject.name); 
// Soln
// var myobject = { 1: "one", "11": 1, "name": "arun" };
// console.log(myobject["11"]);
// console.log(myobject.name);
// ___________________________________________________________________________________________________________________


// Add a new key value pair to myobject
// key : ten
// value : ten
// myobject = {1:one,”11":1,”name”:”arun”}
// //your code goes here
// console.log(myobject);
// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.
// Soln
// var myobject = { 1: "one", "11": 1, "name": "arun" };
// myobject["ten"] = "ten";
// console.log(myobject);
// ___________________________________________________________________________________________________________________


// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Soln
// var data = {
//     name: "Guvi",
//     role: "Geek",
//     age: 6,
//     institute: "IIT-M RP",
//     city: "Chennai"
//   };
// ___________________________________________________________________________________________________________________


// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
// Soln
// var companies = [
//     {
//       name: "Guvi",
//       type: "Geek",
//       age: 6,
//       address: "IIT-M RP",
//       city: "Chennai"
//     },
//     {
//       name: "Amazon, Inc",
//       type: "Unknown",
//       age: 31,
//       address: "SP Infocity",
//       city: "Chennai"
//     },
//     {
//       name: "Google",
//       type: "Alphabet",
//       age: 34,
//       address: "Amphitheater Parkway",
//       city: "MountainView"
//     },
//     {
//       name: "Tesla, Inc",
//       type: "Unknown",
//       age: 32,
//       address: "333 Santana Row",
//       city: "San Jose"
//     }
//   ];
 // ___________________________________________________________________________________________________________________
 