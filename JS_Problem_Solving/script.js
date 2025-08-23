"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array
//  of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes
// there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Undestanding the problem

// - What is temperature amplitude? Answer : difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and retur it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp != "number") continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
//Function should now receive 2 arrays of temperature

// 1) Undestanding the problem
// With 2 arrays, should we implement functionality twice? NO! merge arrays

// 2) Breaking up into sub-problems
// Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp != "number") continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees Celsius:")),
//   };

// B) FIND
//   console.table(measurement);

//   const Kelvin = measurement.value + 273;
//   return Kelvin;
// };

// A) IDENTIFY BUG
// console.log(measureKelvin());

// CHALLENGE #1

// 1) Undestanding the problem
// - Array transformed into string, separated by ....
// What is the X days? ANSWER: index + 1;

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements at start and end of string

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const dayLabel = i + 1 === 1 ? "day" : "days";
    console.log(`... ${arr[i]}°C in ${i + 1} ${dayLabel} `);
  }
};

console.log(printForecast(temp1));
console.log(printForecast(temp2));

// Function which recives daily-work hours for a certain week,
// and returns

// 1) total hours worked
