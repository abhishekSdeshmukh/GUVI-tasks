// Fix the code to remove duplicates.
// var res = function(arr){
//     for(var i=0; i < arr.length; i++){
//     newArr = [];
//     if(newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i]);
//     } }
//     console.log(newArr)
//    }

// Solution

var res = function(arr){
    newArr = [];
    for(var i=0; i < arr.length; i++){
      if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])