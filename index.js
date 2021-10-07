const readlineSync = require("readline-sync");

main();
function main() {


    for (let z = 1; ; z++) {
        var rightNumber = []
        var userNumber = []
        //arvo numerot
        let num = 0;
        for (; rightNumber.length < 5;) { //Vaihdettu viiteen
            num = Math.floor(Math.random() * 5) + 1 //vaihdettu pienenmei
            if (rightNumber.includes(num) === false) {
                rightNumber.push(num);
            }
        }
        //Pyydä käyttäjältä numerot numerot
        //validoi inputti ja ota vastaan vain teitty määrä

        console.log('give 10 numbers: ')
        for (let i = 0; i < 5; i++) {  //Vaihdettu viiteen
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
        console.log(rightNumber);
        console.log(userNumber);
        //ilmoita monesko kierros
        //ilmoita montako oikein
        const total = rightNumber.filter(element => userNumber.indexOf(element) !== -1);

        console.log('you got ' + total.length + ' right! it was your ' + z + ' try.');


    }

}

