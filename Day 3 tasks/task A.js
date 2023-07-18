// let obj1 = { name:"Person1",age:5};
// let obj2 = { age:5, name:"Person1"};
// //  The code to compare these two goes here
// let str1 = JSON.stringify(obj1);
// let str2 = JSON.stringify(obj2);

// if(str1 === str2){
//     console.log("The two objects are equal.");
// }else {
//     console.log("The two objects are not equal.")
// };


var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var obj1Str = JSON.stringify(obj1, Object.keys(obj1).sort());
var obj2Str = JSON.stringify(obj2, Object.keys(obj2).sort());

if(obj1Str === obj2Str) {
    console.log("The two objects are  equal.")
} else {
    console.log("The two objects are not equal.")
};
