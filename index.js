const readlineSync = require("readline-sync");

for (let z = 1; ; z++) {
    var rightNumber = []
    var userNumber = []
    //arvo numerot
    let num = 0;
    for (; rightNumber.length < 10;) {
        num = Math.floor(Math.random() * 99) + 1
        if (rightNumber.includes(num) === false) {
            rightNumber.push(num);
        }
    }
    //Pyydä käyttäjältä numerot numerot
    //validoi inputti ja ota vastaan vain teitty määrä

    console.log('give 10 numbers: ')
    for (let i = 0; i < 10; i++) {
        const input = readlineSync.questionInt('');
        if (userNumber.includes(input) === false & input < 99) {
            userNumber.push(input);
        }
        else if (input > 99 | input < 1) {
            console.log('give numbers betwean 1-99');
            i--
        }
        else {
            console.log('do not use the same numbers');
            i--
        }
    }
    console.log('right numbers:\n' + rightNumber.toString() + '\n');
    console.log('your numbers:\n' + userNumber.toString() + '\n');
    //ilmoita monesko kierros
    //ilmoita montako oikein
    const total = rightNumber.filter(element => userNumber.indexOf(element) !== -1);


    if (total.length == 5) {
        console.log('JACkPOT!! it was your ' + z + ' try.');
    } else {
        console.log('you got ' + total.length + ' right! it was your ' + z + ' try.');
    }

}

