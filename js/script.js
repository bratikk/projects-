"use strict";
const category = "toys";
console.log(`https://someurl.com/${category}/5`);
const user = "Ivan";
alert(`Привіт, ${user}`);

let incr = 10,
  decr = 10;

//Постфіксні
// incr++;
// decr--;

//Префексні
// ++incr;
// --decr;

//Не правильно
// console.log(incr++);
// console.log(decr--);

// console.log(++incr);
// console.log(--decr);

// console.log(10 % 2);

// console.log(2 * 4 == 8);

const isChecked = false,
  isClose = false;

console.log(isChecked || !isClose);
