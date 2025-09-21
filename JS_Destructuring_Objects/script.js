"use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 23,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// but what if we want the variable name
// to be different from the propertie name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// And what if we want to set 'DEFAULT' values for properties
// which does not exist with that name on the object
// THIS HELP US TO NOT RECEIVE ERRORS OR BUGS BECAUSE OF UNDEFINED VALUE
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// And what if I want to mutate variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const ventanaModal = {
//   titulo: [],
//   mensaje: [],
//   textoBoton: [],
//   mostrarModal: function ({
//     titulo,
//     mensaje,
//     textoBoton,
//     mostrarIcono = false,
//     autoCerrar = false,
//   }) {
//     console.log(titulo, mensaje, textoBoton, mostrarIcono, autoCerrar);
//   },
// };

// ventanaModal.mostrarModal({
//   titulo: "VENTANA MODAL",
//   mensaje: "HOLA, SOY YO",
//   textoBoton: "HAZME CLICK",
// });

// La función es independiente, no necesita estar dentro de un objeto.
// function mostrarModal({
//   titulo,
//   mensaje,
//   textoBoton = "Aceptar", // <-- 1. Aquí está el valor por defecto que faltaba
//   mostrarIcono = false,
//   autoCerrar = false,
// }) {
// 2. Usamos un `console.log` con formato para que la salida sea más clara
//   console.log("Mostrando modal con la siguiente configuración:");
//   console.log(`- Título: ${titulo}`);
//   console.log(`- Mensaje: ${mensaje}`);
//   console.log(`- Botón: ${textoBoton}`);
//   console.log(`- Mostrar Ícono: ${mostrarIcono}`);
//   console.log(`- Auto Cerrar: ${autoCerrar}`);
// }

// --- Casos de Prueba ---

// 1. Llamada con todas las opciones personalizadas
// console.log("--- Caso 1 ---");
// mostrarModal({
//   titulo: "Confirmación Requerida",
//   mensaje: "¿Estás seguro de que quieres eliminar este elemento?",
//   textoBoton: "Sí, eliminar",
//   mostrarIcono: true,
// });

// 2. Llamada con solo lo indispensable (ahora sí usará los valores por defecto)
// console.log("\n--- Caso 2 ---");
// mostrarModal({
//   titulo: "Éxito",
//   mensaje: "La operación se completó correctamente.",
// });

// PRACTICE MORE
// const books = [
//   {
//     title: "Algorithms",
//     author: ["Robert Sedgewick", "Kevin Wayne"],
//     publisher: "Addison-Wesley Professional",
//     publicationDate: "2011-03-24",
//     edition: 4,
//     keywords: [
//       "computer science",
//       "programming",
//       "algorithms",
//       "data structures",
//       "java",
//       "math",
//       "software",
//       "engineering",
//     ],
//     pages: 976,
//     format: "hardcover",
//     ISBN: "9780321573513",
//     language: "English",
//     programmingLanguage: "Java",
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Structure and Interpretation of Computer Programs",
//     author: [
//       "Harold Abelson",
//       "Gerald Jay Sussman",
//       "Julie Sussman (Contributor)",
//     ],
//     publisher: "The MIT Press",
//     publicationDate: "2022-04-12",
//     edition: 2,
//     keywords: [
//       "computer science",
//       "programming",
//       "javascript",
//       "software",
//       "engineering",
//     ],
//     pages: 640,
//     format: "paperback",
//     ISBN: "9780262543231",
//     language: "English",
//     programmingLanguage: "JavaScript",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ["Randal E. Bryant", "David Richard O'Hallaron"],
//     publisher: "Prentice Hall",
//     publicationDate: "2002-01-01",
//     edition: 1,
//     keywords: [
//       "computer science",
//       "computer systems",
//       "programming",
//       "software",
//       "C",
//       "engineering",
//     ],
//     pages: 978,
//     format: "hardcover",
//     ISBN: "9780130340740",
//     language: "English",
//     programmingLanguage: "C",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Operating System Concepts",
//     author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
//     publisher: "John Wiley & Sons",
//     publicationDate: "2004-12-14",
//     edition: 10,
//     keywords: [
//       "computer science",
//       "operating systems",
//       "programming",
//       "software",
//       "C",
//       "Java",
//       "engineering",
//     ],
//     pages: 921,
//     format: "hardcover",
//     ISBN: "9780471694663",
//     language: "English",
//     programmingLanguage: "C, Java",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: "Engineering Mathematics",
//     author: ["K.A. Stroud", "Dexter J. Booth"],
//     publisher: "Palgrave",
//     publicationDate: "2007-01-01",
//     edition: 14,
//     keywords: ["mathematics", "engineering"],
//     pages: 1288,
//     format: "paperback",
//     ISBN: "9781403942463",
//     language: "English",
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "The Personal MBA: Master the Art of Business",
//     author: "Josh Kaufman",
//     publisher: "Portfolio",
//     publicationDate: "2010-12-30",
//     keywords: ["business"],
//     pages: 416,
//     format: "hardcover",
//     ISBN: "9781591843528",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: "Crafting Interpreters",
//     author: "Robert Nystrom",
//     publisher: "Genever Benning",
//     publicationDate: "2021-07-28",
//     keywords: [
//       "computer science",
//       "compilers",
//       "engineering",
//       "interpreters",
//       "software",
//       "engineering",
//     ],
//     pages: 865,
//     format: "paperback",
//     ISBN: "9780990582939",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: "Deep Work: Rules for Focused Success in a Distracted World",
//     author: "Cal Newport",
//     publisher: "Grand Central Publishing",
//     publicationDate: "2016-01-05",
//     edition: 1,
//     keywords: ["work", "focus", "personal development", "business"],
//     pages: 296,
//     format: "hardcover",
//     ISBN: "9781455586691",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// 1.0 Destructure the first book object from the books array into
// variables called title, author and ISBN.
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 1.1 Each book object has the keywords property.
// Destructure the first book object from the books
// array into a variable called tags.
// The tags variable should be assigned with the value of the
// keywords property.
// const { keywords: tags } = books[0];
// console.log(tags);

// 1.2 The seventh book from the books array is missing
// the programmingLanguage property.
// Destructure the seventh book object (books[6])
// into variables called language and programmingLanguage.
// Assign the programmingLanguage variable with a default value
// of 'unknown'.
// const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);

// 1.3 Below are two variables called bookTitle and bookAuthor.
// Reassign them with the values of the title and
// author properties of the first book object from the books array.
// let bookTitle = "unknown";
// let bookAuthor = "unknown";
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookAuthor, bookTitle);

// 1.4 Destructure the first book object from the books array into
// a variable called bookRating. In the result of your destructuring,
// the bookRating variable should be assigned with the value of the book[0].
// thirdParty.goodreads.rating property.
// Please do most of the work on the left side of the assignment operator:
//  const ... = books[0];
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// 1.5 Write a function called printBookInfo that has three parameters called
// title, author and year. This function should work for a single object passed
// as an argument, and it should log to the console information about the book
// in this format: "${title} by ${author}, ${year}".
// If year is undefined (was not passed),
// it should be assigned with a default value of 'year unknown'.
// function printBookInfo({ title, author, year = "year unknown" }) {
//   console.log(`${title} by ${author}, ${year}`);
// }
// console.log("LIBRO - 1");
// printBookInfo(books[0]);

// ANOTHER WAY OF DOING THIS SAME FUNCTION
// function printBookInfo(book) {
//   const { title, author, year = "year unknown" } = book;
//   console.log(`${title} by ${author}, ${year}`);
// }
// printBookInfo(books[3]);

function createUser({ email, name, role = "user" }) {
  console.log("CREACIÓN DE USUARIO");
  console.log(`---NOMBRE: ${name}`);
  console.log(`---EMAIL: ${email}`);
  console.log(`---ROLE: ${role}`);
}

const userData = {
  name: "Zarek",
  email: "jorge.saleme77@gmail.com",
};

const adminData = {
  name: "GEORGE",
  email: "miEmail@mail.com",
  role: "ADMIN",
};

createUser(userData);
createUser(adminData);
