"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 23,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIgredient, ...otherIngredients) {
    console.log(
      `The main ingredient of your pizza is ${mainIgredient} and the extra ingredients are ${otherIngredients}`
    );
    console.log(otherIngredients);
  },
};

console.log("---------OR-----------");
// use Any data type, return ANY data type, short-circuiting
console.log(3 || "Zarek"); // PRINT 3 BECAUSE IT´S THE FIRST TRUTHY VALUE
console.log("" || "Zarek"); // PRINT ZAREK BECAUSE EMPTY STRING IS FALSE
console.log(true || 0); // PRINT TRUE BECASUE IT´S FIRST TRUTHY VALUE
console.log(undefined || null); // BOTH are falsy, so it returns the last falsy value

// PRINTS HELLO because it´s the first TRUTHY value
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---------AND-----------");
console.log(0 && "Zarek "); // DEVUELVE 0 POR QUE ES PRIMER FALSY QUE ENCUENTRA
console.log(7 && "Zarek"); // RETURNS Zarek because it´s the last truthy that it´s declared

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Spinach", "Tomatoe");
}

restaurant.orderPizza &&
  restaurant.orderPizza("Mushrooms", "Spinach", "Tomatoe");

// Practice More
