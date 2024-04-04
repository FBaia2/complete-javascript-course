"use strict";

// let hd1 = false; 
// console.log(hd1);
// const passtest = true;

// if (passtest) {
//     hd1 = console.log(true);
// }

// if (passtest) hd1 = console.log(true);

function logger(number) {
    for(let i = 0; i < number; i++) {
        console.log("my name juan");
    }
}

logger(11);

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} organges`;
    return juice
}

const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice)

const appleOrange = fruitProcessor(1000, 1000)
console.log(appleOrange)