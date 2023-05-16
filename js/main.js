"use strict";

// Task 1
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2
let secInMinutes = 60;
let minInHours = 60;
let hoursInDay = 24;
let daysInYear = 365;
let age = +prompt("Write your age (number)");
let myAgeInSeconds = secInMinutes * minInHours * hoursInDay * daysInYear * age;

console.log(myAgeInSeconds);


// Task 3
let count = 42;
let userName = "42";

// First example how to convert number to string
console.log(count.toString());

// Second example how to convert number to string
console.log(`теперь значение ${count} как текст `)

// Third example how to convert number to string
console.log(count + "");

// Fourth example how to convert number to string
console.log(String(count));

// First example how to convert string to number
console.log(Number(userName));

// Second example how to convert string to number
console.log(parseInt(userName));

// Third example how to convert string to number
console.log(+userName);


// Task 4
let a = 1
let b = 2
let c = "белых медведей"

console.log(`${a}${b} ${c}`);


// Task 5
let access = "доступ";
let marine = "морпех";
let frost = "наледь";
let reproach = "попрек";
let handAx = "рубило";
let lengthWords = access.length + marine.length + frost.length + reproach.length + handAx.length;

console.log(lengthWords);


// Task 6
let userLogin = "qwerty";
let userPassword = 1234567890;
let isSmart = false;

console.log(`Variable: ${Object.keys({userLogin})[0]} have type: ${typeof(userLogin)}`);
console.log(`Variable: ${Object.keys({userPassword})[0]} have type: ${typeof(userPassword)}`);
console.log(`Variable: ${Object.keys({isSmart})[0]} type: ${typeof(isSmart)}`);


// Task 7
let userName7 = prompt("Write your name");
let age7 = +prompt("Write your age");

console.log(`Your name is ${userName7} and you are ${age7} years old`);


// Advanced Task 1

let e = 4;
let f = 3;

e = e + f;
f = e - f;
e = e - f;

console.log(`e was 4 but now it is ${e}, f was 3 but now it is ${f}`);


// Advanced Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
