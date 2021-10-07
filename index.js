const readlineSync = require("readline-sync");
//arvo numerot
const rightNumber = []
const userNumber =  []
let num = 0;
for (let i = 0; i < 10; i++){
 num = Math.floor(Math.random() * 99) + 1
rightNumber.push(num)
}

//Pyydä käyttäjältä numerot numerot
//validoi inputti ja ota vastaan vain teitty määrä

console.log('anna 10 numeroa: ')
for (let i = 0; i < 10; i++){
const input= readlineSync.questionInt('');
userNumber.push(input);
}

/* if (userNumber.count == 10){
    console.log(userNumber);
  }


*/
console.log(userNumber);
//ilmoita montako oikein

//ilmoita monesko kierros
