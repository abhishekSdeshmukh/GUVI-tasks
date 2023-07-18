// Fix the code to give the below output:

// Swap the odd and even digits

// aa = data=>{
//  var a=data;
// for(i=0;i<a.length-1;i++){
//  var l=’’;
//  var s=a[i+1]
//  var b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(l);
// }
// aa(“1234”);

// Solution

function swapDigits(data) {
    var a = data.toString();
    var swapped = '';
    for (var i = 0; i < a.length - 1; i += 2) {
      swapped += a[i + 1] + a[i];
    }
    if (a.length % 2 != 0) {
      swapped += a[a.length - 1];
    }
    console.log(swapped);
  }
  
  swapDigits("1234"); // Output: "2143"
  



