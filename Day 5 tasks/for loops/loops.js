// this below json object will be used to iterate all for loops

const person = {
    "name": "John",
    "age": 30,
    "occupation": "Software Engineer"
 };
//  this is the iteration for for loop
// for(let i=0;i=person.length;i++);
// console.log(person)
// ________________________________________
// this is the iteration for for in loop
// for (const key in person){
//    console.log(key +':'+person[key]);
// };
// ________________________________________

// this is the iteration for for of loop
// for (let[key,value] of Object.entries(person)){
//     console.log(key +':' +value)
// }
// ________________________________________

//this is the iteration for forEach loop
// Object.entries(person).forEach(([key,value])=> {   
//      console.log(key+':'+value);
// })
// ________________________________________
