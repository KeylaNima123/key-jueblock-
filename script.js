
const boardSize = 8;
const gameBoard = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");

let score = 0;
let board = [];

function initGame() {
  gameBoard.innerHTML = "";
  board = [];
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.push(cell);
    gameBoard.appendChild(cell);
  }
  dropBlock();
}

function dropBlock() {
  const blockIndex = Math.floor(Math.random() * board.length);
  if (!board[blockIndex].classList.contains("block")) {
    board[blockIndex].classList.add("block");
    score += 10;
    scoreDisplay.textContent = `Puntos: ${score}`;
    messageDisplay.textContent = "¡Buen movimiento!";
    saveScore();
  } else {
    messageDisplay.textContent = "¡Juego terminado!";
    alert("¡Felicidades! Tu puntaje fue: " + score);
    score = 0;
    scoreDisplay.textContent = `Puntos: 0`;
    saveScore();
    initGame();
  }
}

function saveScore() {
  localStorage.setItem("blockblast-score", score);
}

function loadScore() {
  const saved = localStorage.getItem("blockblast-score");
  if (saved) {
    score = parseInt(saved);
    scoreDisplay.textContent = `Puntos: ${score}`;
  }
}

document.body.addEventListener("click", dropBlock);
loadScore();
initGame();
