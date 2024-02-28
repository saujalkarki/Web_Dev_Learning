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
