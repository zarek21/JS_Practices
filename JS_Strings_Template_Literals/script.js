//Recreate the description variable from the last assignment, this time using the template literal syntax.
const MexicoPopulation = 130000000
const country = 'Mexico';
const continent = 'America';
const language = 'Spanish'; 
const description = `${country} is in ${continent}, and its ${MexicoPopulation / 1000000} million people speak ${language}`;

console.log(description);

// I decided to divide its population by 1,000,000 so it prints out 130 million and no 130,000,000 million.