const arr = ["level", "hello", "racecar", "world", "madam"];

const palindromes = ((arr)=> {
  let palindromeArr = [];
  arr.forEach((str)=> {
    if (str === str.split("").reverse().join("")) {
      palindromeArr.push(str);
    }
  });
  return palindromeArr;
})(arr);

console.log(palindromes); 
