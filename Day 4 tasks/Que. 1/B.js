//  Convert all the strings to title caps in a string array:

// Usinng Anonymous Function
const strings = ["hello world", "how are you", "javascript is awesome"];

const titleCasedStrings = strings.map(function(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
});

console.log(titleCasedStrings);

// Using IIFE


// const titleCasedStrings = ((arr) => arr.map((str) => 
//   str.split(' ')
//      .map((word) => 
//        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//      .join(' ')
// ))(strings);

// console.log(titleCasedStrings);
