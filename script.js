const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a shallow copy of the players array using slice()
const team1 = players.slice();

// Create a shallow copy of the person object using Object.assign()
const cap1 = Object.assign({}, person);

// Test the variables
console.log("team:", team);
console.log("team1:", team1);
console.log("cap1:", cap1);
