"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // WITHOUT ENHANCED OBJECT LITERALS
  // openingHours:openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIgredient, ...otherIngredients) {
    console.log(
      `The main ingredient of your pizza is ${mainIgredient} and the extra ingredients are ${otherIngredients}`
    );
    console.log(otherIngredients);
  },
};

// PRACTICE MORE
// 1.0 Below is the bookData array that contains other arrays. Each inner
// array consists of the property name (first element), and the value
// (second element). For example, in
// ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the
// property name, and 'Computer Networking: A Top-Down Approach' is meant
// to be the value assigned to that property name.Using computed properties,
// fill the newBook object with the properties and values from the bookData
// array. The first one is done already.
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// 1.1 Below is the pages variable. Add it as a property of the newBook2
// object. Use the shorter way.
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
console.log(newBook2);
