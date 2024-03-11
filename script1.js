"use strict";
// strict mode
// helps to tackle with errors by throwing error message

// let var const
let country = "Nepal";

console.log(country);

// looping --
// Entry control loop -- for , while -- ek choti matra print na hune case pani aaunna sakxa
// Exit control loop -- do while -- ek choti chai print vayeraai xadxa

// 1. for loop -- Entry control loop

console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");
console.log("I love programming");

// syntax
// for(variable decleration; condition; increament/decreament){
//     logic
// }

for (let i = 0; i < 4; i++) {
  console.log("I love programming - for loop");
}

// i = 0, 0 < 4, 1 --- print 1
// i = 1, 1 < 4, 2 --- print 2
// i = 2, 2 < 4, 3 --- print 3
// i = 3, 3 < 4, 4 --- print 4
// i = 4, 4 < 4 -- false

// 2. while loop -- Entry control loop
// syntax
// while (condition) {
//   logic;
//   increament / decreament;
// }

let j = 10;

while (j < 20) {
  console.log("I love programming -- while loop");
  j++;
}

// 3. Do while loop -- exit control loop -- this loop will run atleast once a time
// syntax
// do {
//   logic;
// } while (condition);

let z = 20;

do {
  console.log("I love programming -- do while loop");
  z++;
} while (z < 30);

// Arrays
// Arrays Methods
// Objects
// object methods

// group of datas that may be of same or different data types, but is mostly of same data types
// denoted by big brackets []

let ages = [12, 14, 16, 17, 19, 10, 20, 15]; // array of number
let names = ["Saujal", "Naresh", "Ila", "Bidhusa"]; // array of strings

let mix = ["Saujal", 21, false, null, undefined]; // array of different data types

let arr2 = new Array("Nepal", "china", "Japan", "India", "USA"); // another way of creating an array
let arr3 = ["Nepal", "china", "Japan", "India", "USA"];

console.log(arr2);
console.log(arr3);

console.log(ages);
console.log(names);
console.log(mix);

// Array are always 0 indexed
console.log(ages.length); // 8
console.log(ages[0]); //12
console.log(ages[4]); //19
console.log(ages[ages.length - 1]); //15

/*
array methods:
unshift, shift, push, pop, join, concat, indexOf, includes, lastIndexOf, slice, splice, toString
*/

// unshift -- array ko aagadi given elements thapne kaam garxa
names.unshift("Yudeen");
console.log("unshift", names);

// shift -- array ko aagadi bata euta elements remove dinu
names.shift();
console.log("shift", names);

// push -- array ko paxadi elements thapne kaam garxa
names.push("KP oli");
console.log("psuh", names);

// pop -- array ko paxadi bata euta elements hatai dinxa
names.pop();
console.log("pop", names);

// join -- join function ko  parameter use garera array ko elemetns lai join garxa ra string banauxa
// let ages = [12, 14, 16, 17, 19, 10, 20, 15];
console.log(ages.join(" ")); // 12and14and16and17

// concat -- kunai pani 2 ta waa 2 ta vanda badhi array lai jodera euta array banauxa
let arr4 = ages.concat(names).concat(arr3).concat(mix);
console.log("arr4", arr4);

// indexOf -- array ko elements deyera kati index ma xa vanne kura patta lauxa
// let ages = [12, 14, 16, 17, 19, 10, 20, 15];
// let names = ["Saujal", "Naresh", "Ila", "Bidhusa"];
console.log(ages.indexOf(19)); // 4
console.log(names.indexOf("Naresh")); // 1

// includes -- elements vaneko array ma xa ki xaina vanera check garxa - boolean value -- true false
// let ages = [12, 14, 16, 17, 19, 10, 20, 15];
console.log("55", ages.includes(55)); // false
console.log("17", ages.includes(17)); // true
console.log(names.includes("Baburam"));

// lastIndexOf -- given element ko last index return garxa
let tryAr = [2, 4, 6, 8, 9, 1, 2, 6, 3, 4, 7, 8, 2, 9, 3, 5];
console.log(tryAr.indexOf(2)); // 0
console.log(tryAr.lastIndexOf(2)); // 12

// slice -- duita parameters linxa -- tyo parameters chai indexes haru ho
// (1st parameter-tya bata suru garera, 2nd parameter -1  samma print garxa)
console.log(tryAr.slice(2, 10)); // [6,8,9,1,2,6,3,4]

// splice -- 1st parameter dekhi 2nd parameter ota jhikera rakhne
console.log(tryAr.splice(5, 6)); // 1,2,6,3,4,7

// toString -- string ma lagne kaam garo
console.log(tryAr.toString());
let tryAr1 = ["Saujal", "Naresh", "Nepal", "Japan"];
console.log(tryAr1);
console.log(typeof tryAr1);

console.log(tryAr1.toString());
console.log(typeof tryAr1.toString());
