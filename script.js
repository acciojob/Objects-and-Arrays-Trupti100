const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array (team)
const team = players;

// Create a shallow copy of the players array (team1)
const team1 = [...players];

// Create a shallow copy of the person object (cap1)
const cap1 = { ...person };

// Testing modifications on the copied arrays and object
team.push("Tom");
team1.push("Jerry");
cap1.name = "Jane Smith";

console.log("Original players:", players);
console.log("team:", team);
console.log("team1:", team1);
console.log("Original person:", person);
console.log("cap1:", cap1);
