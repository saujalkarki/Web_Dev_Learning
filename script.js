"use strict";

// This code is written for learning js, coded by Saujal karki

console.log("Hello World");

// libraries framework

// WebFront -- React-- Vue -- Angular
// WebBack -- Nodejs runtime environment --express js framework
// Mobile application Development -- React native -- cross platform app developpment
// Desktop app development -- electron

// There are 2 ways of writing Js:

// Internal Javascript
// External Javascript

console.log("where are you from?");

// Day 2
// 1.values and variables
// 2.keywords in js
// 3.comments
// 4.Data types

// Dynamic typing -- JS can indetify itself which kind of data is it
// variables - value store garne thau lai
// variable decleration - var let const
// variable names - value store garne thau ko naam

var name = "Saujal";
let caste = "Karki";
const gender = "male";
// constant

console.log(name);
console.log(caste);
console.log(gender);

name = "Nischal";
caste = "Nepal";
// gender = "female";

console.log(name);
console.log(caste);
console.log(gender);
// let and var variables value's can be changed but const values cannot be

// keywords
// already used words by js
// let var const for if function do while console log
// shouldn't be used for our own purpose

// Data types---------
// 1 Number
// 2 String
// 3 Boolean
// 4 Null
// 5 Undefined
// 6 Array
// 7 Objects

let age1 = 20; //number data types
let age2 = "9815324015"; //String data types
let age3 = false; // boolean data types --- true false
let age4 = null; //null data types ---object
let age5 = undefined; // undefined data types
let age6 = [1, 2, 3, 4, 5]; // array-- object
let age7 = ["nepal", "japan", "finland"]; // array-- object
let age8 = ["nepal", 10, true]; // array-- object
let age9 = {
  name: "yudeen",
  age: 18,
  married: true,
  marks: [1, 2, 3, 4, 5, 6],
  classes: {
    nepali: 2,
    science: 6,
    maths: "eight",
    noClasses: false,
  },
}; // object

console.log("saujal", "Nischal", 15, true, null);

// The below code is for understanding data types

console.log(age1, typeof age1);
console.log(age2, typeof age2);
console.log(age3, typeof age3);
console.log(age4, typeof age4);
console.log(age5, typeof age5);
console.log(age6, typeof age6);
console.log(age7, typeof age7);
console.log(age8, typeof age8);
console.log(age9, typeof age9);

// Data types -- null Array Object

// comments in js
// They are the most important part of any programming language
// There are 2 types of comments in js
// 1 single line comment
// 2 multi line comment

// Rememberance

// console.log(Saujalkarki);
console.log("Saujal karki");

// single line comment

/* Multi line comment
akfjdklsafjlds
asdkfljlasfj
asdlfkjlakfjlka
asdfladksjf
jasfjlda
sdfj
a
*/

// statements and expressions --- theoritical part bujhnu matra parne
// Operators in js
// 1 Arithmetic operator
// 2 Assignment operator
// 3 Comparison operator
// 4 Logical operator
// 5 Ternary operator
// 6 Bitwise operator

// Statements and expressions
let name5 = "Saujal"; // statement
const sum = 2 * 5; //statement
// expression
// 2 * 5;
// 6 < 9;
// 5=6

// operators in js
// 1 Arithmetic operator --- + - * / %
let sum1 = 2 + 5;
let diff = 6 - 3;
let product = 5 * 6;
let dvd = 12 / 3;
let rmd2 = 17 % 3;

console.log(sum1);
console.log(diff);
console.log(product);
console.log(dvd);
console.log(rmd2);

let nm1 = "nepal";
let nm2 = "japan";

// string concatination
console.log("I am from " + nm1 + " and I live in " + nm2);

// tempelate literals -- most imp

// Assignment operator -- = += -= *= /= %=

let a = 2;
console.log(a);

a += 3; //a = a + 3;
console.log(a); //5

a -= 2; // a = a-2
console.log(a); //3

a *= 2; // a = a*2
console.log(a); //6

a /= 2; // a= a/2
console.log(a); //3
a = 9;

a %= 6; //a = a % 6;
console.log(a); //3

// 3 Comparison operator <  > <= >= == ===
// comparison operator always return value in boolean -- true false

console.log(5 < 9); //true
console.log(5 > 9); //false
console.log(5 <= 6); //true
console.log(5 >= 5); // true
console.log("---------------------");
console.log(5 == "5"); //true
// == equals but may not be of same data type
console.log(5 === "5"); //false
// === equals and of same data type

let typeC = "5" + 5;
console.log(typeC, typeof typeC);
console.log("5" * 5);

// operators precedence and associativity

console.log(5 + 6 - (3 * 2) / 4); //BODMAS

// logical operator AND OR NOT
// AND && -- if both the cases are true true is returned in AND operator
// OR || -- if one of  the cases is true true is returned in OR operator
// NOT ! -- if true return false and vice versa

console.log("Learning logical operator");
console.log("&&");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("||");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("!");
console.log(!true);
console.log(!false);

let ramA = 18;
let sitaA = 20;

// 5 Ternary operator
// condition ? statememnt1 : statement2;

let age17 = 25;
let result = age17 <= 20 ? "You cannot drive" : "You can drive";

if (age17 <= 20) {
  console.log("You cannot drive");
} else {
  console.log("You can drive");
}

console.log(result);

// 6 Bitwise operator --- skipped

// tempelate literals
// statements
// if  statement
// if else statement
// if else if else statement
// switch case

// template literals -- one of the most important
let middleName = "Bahadur";

let tryName = "My name is Saujal " + middleName + " Karki";

console.log(tryName);

// strings in template literals
let tryName1 = `My name is Saujal ${middleName} karki`;

console.log(tryName1);

// revising template literals
let tr1 = "Saujal";
let tr2 = "Nepal";
let agg = 21;

console.log(tr1 + " is " + agg + " years old. " + tr1 + " lives in " + tr2);

// template literals
// -- backtick      ``

console.log(`${tr1} is ${agg} years old. ${tr1} lives in ${tr2}`);

// statements
// if -- syntax
// if (condition) {
//   result;
// }

// let age = prompt("What is your age"); //string
let age = Number(console.log("What is your age")); //Number

console.log(age, typeof age);

if (age <= 10) {
  console.log("You are a child");
}

// if else -- syntax
// if(){}
// else{}

if (age <= 18) {
  console.log("You cannot drive");
} else {
  console.log("You can drive");
}

// ternary operator
// condition ? Statement1 : Statement2;

age <= 18 ? console.log("You cannot drive") : console.log("You can drive");

// if else if else -- syntax
// if(){}
// else if(){}
// else if(){}
// else{}

if (age <= 0) {
  console.log("please enter a valid age");
} else if (age <= 18) {
  console.log("You are a child");
} else if (age <= 45) {
  console.log("You are an adult");
} else if (age <= 100) {
  console.log("You are a senior citizen");
} else {
  console.log("You are an alien");
}

console.log("The statement has been terminated");

// switch case
let day = console.log("What day is today?");

// syntax
switch (day) {
  case "Saturday":
    console.log("This is weekend");
    break;
  case "Wednesday":
    console.log("This is the middle of the week");
    break;
  case "Friday":
    console.log("This is good friday");
    break;
  case "Sunday":
    console.log("This is funday");
    break;
  default:
    console.log("These are the booring days");
}

console.clear();

// nested statements
// to use any statement inside itself
// nested if
let ramAge = Number(console.log("What is the age of Ram?"));

if (ramAge > 18) {
  if (ramAge > 30) {
    if (ramAge > 50) {
      console.log("You are getting old");
    }
  }
}

// nested if else

let ab = Number(console.log("Enter the value of ab"));
let bc = Number(console.log("Enter the value of bc"));
let cd = Number(console.log("Enter the value of cd"));

console.log(ab, bc, cd);
// 59 64 89
// 89 64 59
// 64 89 59

if (ab > bc) {
  if (ab > cd) {
    console.log("ab is greatest of all");
  } else {
    console.log("cd is greatest of all");
  }
} else {
  if (bc > cd) {
    console.log("bc is greatest of all");
  } else {
    console.log("cd is greatest of all");
  }
}

// nested if else if else
// syntax------------------
/*
if(){
  if(){}
  else if(){}
  else if(){}
  else{}
}
else if(){
  if(){}
  else if(){}
  else if(){}
  else{}
}
else if(){
  if(){}
  else if(){}
  else if(){}
  else{}
}
else{
  if(){}
  else if(){}
  else if(){}
  else{}
}
*/

// functions in JavaScript

// about
// functions are the block of codes, that can be used repeateadly to produce different results according to our input
// functions are the most important part of any programming language especially in js

// example of function
function sumAdd(a, b) {
  // a, b are function parameters
  return a + b;
}

sumAdd(5, 5); //10 // function arguments
sumAdd(4, 4); //8
sumAdd(1, 10); //11
sumAdd(2, 8); //10

console.log(5 + 5);
console.log(4 + 6);
console.log(2 + 8);

// function definition
function calcAvg(num1, num2) {
  // function parameters (num1, num2)
  let avg = (num1 + num2) / 2;

  return avg; //return statement
}

// function call
console.log(calcAvg(6, 4)); // function Arguments //5

// types of functions

console.log(product1(8, 2)); //16
// console.log(product2(8, 2)); //16
// console.log(product3(8, 2)); //16

// function Decleration
function product1(x, y) {
  let prdct = x * y;
  return prdct;
}

console.log(product1(2, 4)); //8

// function Expression
let product2 = function (x, y) {
  let prdct2 = x * y;

  return prdct2;
};

console.log(product2(5, 6)); //30

// arrow function
let product3 = (x, y) => {
  let prdct3 = x * y;

  return prdct3;
};

console.log(product3(9, 6)); //54

console.log(product1(5, 2)); //decleration-- can be called before decleration

console.log(product2(6, 3)); //expression-- cannot be called before decleration
console.log(product3(4, 1)); //arrow-- cannot be called before decleration

// Recursion in JS
// Recursion -- to call function itself inside the own function body
// Recursion -- recurring -- re occur -- feri feri aaunu

// factorial // 6! -- 6*5*4*3*2*1 = 36*2 = 72 1!=1 0!=1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// 5*factorial(5-1)
// 5*factorial(4)
// 5*4*factorial(3)
// 5*4*3*factorial(2)
// 5*4*3*2*1 -- 120
