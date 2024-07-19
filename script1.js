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

// Objects -- one of the data types in JS
// objects are always in key value pair
// we can store multiple datas inside an object -- that data may be of any data types

// array of objects

let learners = [
  {
    name: "Saujal",
    country: "Nepal",
    age: 21,
  },
  {
    name: "Naresh",
    country: "Japan",
    age: 23,
  },
  {
    name: "Bidhusha",
    country: "Nepal",
    age: 22,
  },
  {
    name: "Ila",
    country: "Nepal",
    age: 22,
  },
];

console.log(learners);
console.log(learners[0]);
console.log(learners[1]);
console.log(learners[2]);
console.log(learners[3]);

console.log(learners[2].country);

console.log(learners[3].name); // Ila
learners[3].name = "Tarjan";
console.log(learners[3].name); // Tarjan

// Syntax
// let objectName = {
//   key: "pair",
//   key: 1,
//   key: true,
// };

let saujalPerDel = {
  name: "Saulaj",
  caste: "Karki",
  nationality: "Nepali",
  age: 21,
  married: false,
  favSports: ["Basketball", "Football", "Badminton"],
  sum: function (a, b) {
    return a + b;
  },
  professionalD: {
    role: "MERN dev",
    exp: 1,
    job: false,
    technology: ["JS", "React", "Node", "Express"],
  },
};

console.log(saujalPerDel);

saujalPerDel.name = "Saujal";

console.log(saujalPerDel);

saujalPerDel.married = 25;

console.log(saujalPerDel);

console.log(saujalPerDel.favSports);

saujalPerDel.favSports[2] = "Futsal";

console.log(saujalPerDel.favSports);

console.log(saujalPerDel.professionalD.technology);

saujalPerDel.professionalD.technology.unshift("HTML5");

console.log(saujalPerDel.professionalD.technology);

saujalPerDel.professionalD.technology.push("CSS3");

console.log(saujalPerDel.professionalD.technology);

// fetching data from objects
console.log(saujalPerDel.name); // returns object_key value
console.log(saujalPerDel["name"]); // returns object_key value

console.log(saujalPerDel.caste);
console.log(saujalPerDel.nationality);
console.log(saujalPerDel.age);
console.log(saujalPerDel.married);
console.log(saujalPerDel.favSports);
console.log(saujalPerDel.favSports[1]); // Football
console.log(saujalPerDel.sum(2, 6)); // 29

console.log(saujalPerDel.professionalD);
console.log(saujalPerDel["professionalD"]);

console.log(saujalPerDel.professionalD.role);
console.log(saujalPerDel.professionalD["role"]);
console.log(saujalPerDel["professionalD"].role);
console.log(saujalPerDel.professionalD.technology);
console.log(saujalPerDel.professionalD.technology[0]);

// BASICS -- every programming language

// Nothing --

// JS===DOM Manipulation
// DOM Manipulation
// DOM- Document Object Model

const tryV = document.querySelector(".div1");

console.log(document.querySelector("h5"));
console.log(tryV);
console.log(document.querySelector("#section1"));

console.log(document.querySelector("h1"));
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("h1")[4]);

console.log(document.getElementById("section1"));
console.log(document.getElementsByClassName("div1")[0]);
console.log(document.getElementsByTagName("div")[0]);
// document.getElementsByName();

// document.addEventListener("click", function () {
//   tryV.textContent = "Hello World";
// });

console.clear();

document;

console.log(document);

// document.querySelector();
console.log(document.querySelector("h1"));
console.log(document.querySelector("h2"));
console.log(document.querySelector(".nepali"));
console.log(document.querySelector("#japanese"));

// document.querySelectorAll();
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("h1")[2]);
console.log(document.querySelectorAll("h5"));
console.log(document.querySelectorAll("h5")[0]);

// document.getElementById();
console.log(document.getElementById("DOM"));

// document.getElementsByClassName();
console.log(document.getElementsByClassName("apple"));
console.log(document.getElementsByClassName("apple")[0]);

// document.getElementsByTagName();
console.log(document.getElementsByTagName("body"));
console.log(document.getElementsByTagName("body")[0]);

// document.getElementsByName();

// Event Listeners
let aple = document.querySelector("img");
aple.addEventListener("click", function () {
  console.log("CLICKED JUST NOW");
});

// khatra.addEventListener("click", function () {
//   khatra.textContent = "Bidusha is a good girl";
// });

// khatra.addEventListener("dblclick", function () {
//   khatra.textContent = "Bidusha is a good girl12";
// });

// khatra.addEventListener("keydown", function () {
//   khatra.textContent = "Bidusha is a good girl12";
// });

// khatra.addEventListener("keypress", function () {
//   khatra.textContent = "Bidusha is a good girl12";
// });

// khatra.addEventListener("keyup", function () {
//   khatra.textContent = "Bidusha is a good girl12";
// });

// khatra.addEventListener("mouseenter", function () {
//   khatra.textContent = "Bidusha is a good girl123";
// });

// Guess the number
// Todo List

// Before React and Node js

// js advance topics

// Functions => Definition, Declaration, Arrow
// Array => objects =>
// Template Literals =>
// REST, SPREAD operators =>
// Synchronous and Asynchronous =>
// callback functions =>
// fetch
// Promises => handling Promises => .then(), async and await
// Error Handling in JavaScript => try Catch
// JSON format in JS=>
// Higher Order Functions => Map, forEach, filter, reduce

// Object in javaScript
// Key value pair

const abObj = {
  name: "Saujal",
  caste: "Karki",
  age: 24,
};

// JSON-JavaScript Object Notation
// key value pair

// {
//   "name":"Saujal",
//   "caste": "Karki",
//   "age": "24",
// }

console.log("abObj", abObj);
console.log("JSON", JSON.stringify(abObj));

// Backend bata aako savai datas mostly in JSON format

async function fetched() {
  const fetched = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/itahari?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8"
  );

  return fetched.message;
}

console.log(fetched());

console.clear();

// REST operator --> ...
function sum(a, b, c, d) {
  console.log([a, b, c, d]);
}

sum(1, 2, 3); // [1,2,3,undefined]

// console.log("without rest operator", sum(1, 2, 3));
// console.log("without rest operator", sum(2, 3, 4, 5));
// console.log("without rest operator", sum(1));

function sum2(...args) {
  let a = [];
  args.map((arg) => {
    a.push(arg + 1);
  });
  console.log(a);
}

// console.log("with rest operator", sum2(1, 2, 3));
// console.log("with rest operator", sum2(2, 3, 4, 5));

sum2(2, 3, 4, 5);
sum2(1);

// SPREAD operator --> ...
// 1.spreading elements in array
const arr20 = [2, 3, 4];
const arr21 = [5, 6, 7];

const arr22 = [arr20[0], arr20[1], arr20[2], arr21[0], arr21[1], arr21[2]];
console.log(arr22);

const arr23 = [...arr20, ...arr21];
console.log(arr23);

const arr24 = [arr20, arr21];
console.log(arr24);

// 2.spreading elements in function call
sum2(2, 3, 4, 5, 6, 7);

const arr56 = [2, 3, 4, 5, 6, 7];

sum2(...arr56);

// 3.spreading elements in objects
const obj21 = {
  firstName: "Saujal",
  lastName: "Karki",
  age: 20,
};

const obj22 = {
  ...obj21,
  married: false,
  grade: 14,
};

const obj23 = {
  ...obj22,
  firstName: "Naresh",
  grade: 15,
  friends: ["Nischal", "Nirmal"],
};

console.log(obj22);
console.log(obj23);

// callback functions
// Higher Order Functions --> forEach, map, filter, reduce

// fucntion that is passed to another function as an arguments and called at some point of that function
function abc(a, b, callback) {
  console.log(callback()); // --> fucntion bcd that is passed as callback is known as callback function
}

function bcd() {
  return "bcd";
}

abc("a", "b", bcd);

let khatra = document.getElementById("japanese");

khatra.addEventListener("click", function () {
  khatra.textContent = "Bidusha is a good girl1234";
  khatra.style.color = "red";
});

// js inbuilt function --> setTimtout

// setTimeout(function () {
//   console.log("Saujal");
// }, 5000);

// HOF --> Higher Order Functions
// The function that takes another function as an argument is known as Higher Order function
// The fucntion that is passed to another function as an arguments  is callback function

function greet(cb, name) {
  return `${cb()} ${name}`;
}

function welcome() {
  return "Welcome!";
}

console.log(greet(welcome, "Naresh"));

// Here in the above code snippet
// cb is a callback function
// greet is a higher order function

function tip(cbFunc, tipP, total) {
  // let tip;
  // tip = cbFunc(tipP, total);
  // return tip;

  return `The tip given by the customer is ${cbFunc(tipP, total)}%.`;
}

function tipCalc(per, billAmt) {
  return (billAmt * per) / 100; //--> 100*5==500/100=5
}

console.log(tip(tipCalc, 5, 100));

// function tip(cbFunc, tipP, total) {
//   let tip;
//   tip = total(tipP, cbFunc);
//   return tip;
// }

// function tipCalc(per, billAmt) {
//   return (billAmt * per) / 100; //--> 100*5==500/100=5
// }

// console.log(tip(1000, 10, tipCalc));

// callback function-->
// Higher Order function-->

// Js inbuilt higher Order Functions --> map, filter, reduce, forEach

// map --> manipulating an array --> always returns an array
const a = [1, 2, 3, 4, 5, 6, 7, 8]; // [1,3,5,7,9,11,13,15]

const returnedArray = a.map(function (element, index) {
  return element + index;
});

console.log(returnedArray);

const returnedArray1 = returnedArray.map((data, index) => {
  return `This is the ${index} index of the array and it's value is ${data}.`;
});

console.log(returnedArray1);

// filter --> manipulating an array --> always returns an array

// [1, 2, 3, 4, 5, 6, 7, 8]

const filteredArray = a.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray);

const populations = [
  { name: "Saujal Karki", age: 21, married: false },
  { name: "Nischal Karki", age: 25, married: true },
  { name: "Naresh", age: 31, married: true },
  { name: "Bidusha", age: 19, married: false },
];

const marriedPopulation = populations.filter((element) => {
  return element.married === true;
});

const unMarriedPopulation = populations.filter((element) => {
  return element.married === false;
});

console.log(marriedPopulation);
console.log(unMarriedPopulation);

// reduce --> manipulating array --> returns single value

// [1, 2, 3, 4, 5, 6, 7, 8] --> reduced to a single value

const singleValue = a.reduce((accumulator, data) => {
  return accumulator + data;
}, 0); // 36

console.log(singleValue);

// forEach --> manipulating array --> doesn't returns an array --> instead returns single value for each of the element

// [1, 2, 3, 4, 5, 6, 7, 8]

const returnedArray2 = [];

a.forEach((data, index) => {
  returnedArray2.push(data + index);
});

console.log(returnedArray2);

// synchronous and asynchrounous nature

// synchrounous --> This code wait for everyline to be executed

console.log("saujal"); // takes 0.1 sec
console.log("Karki"); // takes 6 sec
console.log("Karki1"); // takes 0.1 sec

// asynchronous --> This code doesn't waits everyline to be executed

console.log("saujal"); // takes 0.1 sec
console.log("Karki"); // takes 6 sec
console.log("Karki1"); // takes 1 sec
console.log("Karki2"); // takes 1 sec
console.log("Karki3"); // takes 1 sec
console.log("Karki4"); // takes 1 sec
console.log("Karki5"); // takes 1 sec
console.log("Karki6"); // takes 1 sec

// synchronous code

// console.log("Start");

// function wait1(time) {
//   const start = Date.now();

//   let now = start;

//   while (now - start < time) {
//     now = Date.now();
//   }

//   return now;
// }

// wait1(20000); // holds for 2 sec

// console.log("End");

// asynchronous code
// handling promises
// 1. .then()
// 2. .async await

// .then
console.log("Start");

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

wait(5000)
  .then(function () {
    console.log("This is Loading");
  })
  .catch((err) => console.log(err))
  .finally(console.log("This promise is resovled at the best."));

console.log("End");

// async await

console.log("Start");

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function Japan() {
  await wait(6000);
  console.log("This is Loading");
}

Japan();

console.log("End");

// fetch , try catch

// .then
// fetch("facebook.com")
//   .then(data)
//   .catch((err) => console.log(err));

// try {
//   async function abcdefg() {
//     const data = await fetch("facebook.com");
//     console.log(data);
//   }
// } catch (err) {
//   console.log(err);
// }

let myHeaders = new Headers();
myHeaders.append("apikey", "cO2sykjxcHwP2FjeIH2NCEGnHlTHuVbr");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// http Verbs
// GET POST PATCH DELETE UPDATE --> CRUD operations

// fetch(
//   "https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR",
//   requestOptions
// )
//   .then((currency) => currency.text())
//   .then((currencies) => console.log(currencies))
//   .catch((err) => console.log(err));

// console.log("Data fetched successfully.");

async function currencyExchange() {
  try {
    const currency = await fetch(
      "https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR",
      requestOptions
    );

    const currency1 = await currency.text();
    console.log(currency1);
  } catch (err) {
    console.log(err);
  }
}

currencyExchange();
