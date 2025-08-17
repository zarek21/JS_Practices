// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4])
// jonas [5] DOES NOT EXIST

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

// Filling types array
// types[i] = typeof jonas[i];

//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log("----ONLY STRINGS ----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] != "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("----BREAK WITH NUMBER ----");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// -----------------------NESTED & REVERSE LOOPS -----------------------------
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let repetition = 1; repetition <= 5; repetition++) {
//     console.log(`Exercise ${exercise}: repetition ${repetition}`);
//   }
// }

// -------------------- WHILE LOOP ----------------------------------
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvergae = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvergae([2, 3, 7]));
console.log(calcAvergae(totals));
console.log(calcAvergae(tips));
