// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// Solution
// The reason the code is displaying "Code is Blasted" is because the comparison operator > is used to compare the string values "2" and "12". 
// In JavaScript, when you compare two strings using the > operator, the comparison is done based on the lexicographic order of the characters in the strings.
// In lexicographic order, the character "1" comes before the character "2". So, when you compare the strings "2" and "12" using the > operator, 
// the string "2" is considered greater than the string "12". This is because the first character in "2" (which is "2") comes after 
// the first character in "12" (which is "1") in the ASCII character set.
var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}