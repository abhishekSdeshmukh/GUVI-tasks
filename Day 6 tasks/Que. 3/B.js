// Fix the code to Sum of the digits present in the number
// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

// Solution
let n = 123;
console.log(add(n));

function add(n) {
  let sum = 0;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
