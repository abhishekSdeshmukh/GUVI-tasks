//  Print odd numbers in an array using arrow function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach(num => {
    if(num % 2 !== 0) {
      console.log(num);
    }
  });