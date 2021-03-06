let currentPlayer = 'X';
let nextPlayer = 'O';
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

const handleClick = function (event) {
	const cell = event.target;
	cell.innerHTML = currentPlayer;
	if (currentPlayer === 'X') {
		playerSelections = playerXSelections;
		nextPlayer = 'O';
	} else {
		playerSelections = playerOSelections;
		nextPlayer = 'X';
	}
	playerSelections.push(Number(cell.id));
	if (checkWinner(playerSelections)) {
		alert('Player ' + currentPlayer + ' wins!');
		resetGame();
	}
	if (checkDraw()) {
		alert('Draw!');
		resetGame();
	}
	// Swap players
	currentPlayer = nextPlayer;
};
