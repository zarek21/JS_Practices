"use strict";

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Pizzara",
  owner: "Luigi Motoro",
};

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assigment operator ( NULL or UNDEFINED)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
rest1.owner &&= "<Anonymous>";
rest2.owner = rest2.owner && "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);
