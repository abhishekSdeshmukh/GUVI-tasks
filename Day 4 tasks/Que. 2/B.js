//  Convert all the strings to title caps in a string array using arrow function.

const strings = ["hello world", "how are you", "javascript is awesome"];

const titleCasedStrings = strings.map(str=> {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
});

console.log(titleCasedStrings);
