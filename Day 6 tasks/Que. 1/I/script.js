// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// Solution

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :  '';

console.log(message);