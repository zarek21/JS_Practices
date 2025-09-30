"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.0 Create one player array for each team
// ( variables 'player1' and 'player2')
const [player1, player2] = game.players;
console.log(player1, player2);

// 1.1 The first player in any player array is the goalkeeper and the
// others are the field players. For Bayern Munich ( team 1 ) create one
// variable ( 'gk' ) with the goalkeeper's name, and one array
// ( 'fieldPlayer') with all the remaining 10 field players
const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);

// 1.2 Create an array allPlayers containing all players of both teams
// (22 players).
// const [...allPlayers] = game.players;
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 1.3 During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array (players1Final) containing all the original
// team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
const players1Final = [...game.players[0], "Thiago", "Perisic", "Coutinho"];
console.log(players1Final);

// 1.4 Based on the game.odds object, create one variable for each odd
// (called team1, draw and team2).
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 1.5 Write a function (printGoals) that receives an arbitrary number
// of player names (NOT an array) and prints each of them to the console,
// along with the number of goals who were scored
// (number of player names passed in).
function printGoals(...playerNames) {
  console.log(
    `The players are: ${playerNames} and they scored ${playerNames.length} goals`
  );
}
printGoals("Davies", "Muller", "Lewandoski", "Kimmich");
printGoals(...game.scored);

// 1.6 The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.
console.log(
  `The odds says the most likely team to win is Bayern Munich with an odd of ${
    team1 || team2
  }`
);

team1 < team2 && console.log("Team 1 is more likely to win");
