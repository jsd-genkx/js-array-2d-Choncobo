"use strict";

const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0;
let y = 0;
const moves = [];
moves.push(board[x][y]); // Start at A

// Define movement functions
function moveRight() {
	if (y < 2) {
    y++;
    moves.push(board[x][y]);
  }
}

function moveLeft() {
	if (y > 0) {
    y--;
    moves.push(board[x][y]);
  }
}

function moveUp() {
	if (x > 0) {
    x--;
    moves.push(board[x][y]);
  }
}

function moveDown() {
	if (x < 2) {
    x++;
    moves.push(board[x][y]);
  }
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
