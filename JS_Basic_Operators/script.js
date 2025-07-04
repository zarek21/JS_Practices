/*If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' */

let Mexicopopulation = 130000000;

console.log(Mexicopopulation / 2);
Mexicopopulation ++;

console.log(Mexicopopulation);

const FinlandPopulation = 6000000;
console.log(Mexicopopulation > FinlandPopulation);

const averageCountryPopulation = 33000000
console.log(Mexicopopulation < averageCountryPopulation);

const country = 'Mexico';
const continent = 'America';
const language = 'Spanish'; 
const description = country + ' is in ' + continent + ', and its ' + Mexicopopulation + ' million people speak ' + language;

console.log(description);