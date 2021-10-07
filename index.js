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

console.log('give 10 numbers: ')
for (let i = 0; i < 10; i++){
const input= readlineSync.questionInt('');
    if (userNumber.includes(input) === false & input <99){ 
    userNumber.push(input);
    }
    else if (input > 99){
        console.log('give numbers betwean 1-99');
        i--
    }
    else {
        console.log('do not use the same numbers');
        i--
    }
}

console.log(rightNumber);
console.log(userNumber);
//ilmoita montako oikein

//ilmoita monesko kierros
