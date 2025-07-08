// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours. 🪙

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array. 🪙

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array. 🪙

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'. 🪙

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ['Guatemala', 'Estados Unidos', 'Belice'];
console.log(neighbours);
neighbours.push('Utopia'); // Adds new element at the last postion of the array
console.log(neighbours);

// Unfortunately, after some time the new country is dissolved

neighbours.pop(); // Removes last element of an array
console.log(neighbours);

if (neighbours.includes('Germany')){ // .includes () === true || false -- true or false
    console.log ('Probably not a central european country :D');
}

const index = neighbours.indexOf('Belice'); // 🔍 Looks up for the index
if(index !== -1){                          // ✅ It only changes if index is finded 
    neighbours[index] = 'Republic of Belice'; // 📝 It replaces the value to the new one 
}

console.log(neighbours); // 🖨️ Prints out the new array modified element

