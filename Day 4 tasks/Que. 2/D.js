const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = ((arr)=> {
    return arr.filter((num)=>{
        for(let i = 2;i < num;i++){
            if(num % i === 0){
              return false;
            }
        }
        return num > 1;
    });
 })(arr);

    console.log(primes);