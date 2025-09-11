"use strict";

console.log(me); // UNDEFINED because it is var
// console.log(job); // its on dead zone
// console.log(year); // its on dead zone

var me = "Zarek";
let job = "Student";
const year = 1991;

// FUNCTIONS
console.log(addDecl(2, 3)); // This one works because of its hoisting level which is high
// console.log(addExpr(2, 3)); // THIS NOT DUE ITS HOISTING LEVEL WHICH IS LOW
// console.log(addArrow(2, 3)); // THIS NOT DUE ITS HOISTING LEVEL WHICH IS LOW
// and we can see both arrow and expression are CONST variable type
// Which of course do not work calling them before actually declaring them

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// EXAMPLE

if (!numProducts) deleteShoppingCart(); // This will trigger even though
// our products are not zero becuase hositing of var is undefined
// because it is called after the function and not before
// Do not use var to declare variables ( best pratices )
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All productis deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // it is a propertie of window global js becuase it is var
console.log(y === window.y); // it´s not a global propertie
console.log(z === window.z); // it´s not a global propertie
