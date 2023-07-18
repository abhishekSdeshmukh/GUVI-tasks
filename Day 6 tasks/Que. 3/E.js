// Fix the code to return the Prime numbers
// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);

// Solution

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
  if(num === 1) {
    return false;
  }
  for(let i=2;i<num;i++){
    if(num%i===0) {
      return false;
    }
  }
  return true;
});
console.log(myPrime);
