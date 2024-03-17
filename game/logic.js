// Define the players
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Current player
let currentPlayer = PLAYER_X;

// Game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to make a move on the game board
function makeMove(row, col) {
    if (board[row][col] === '') {
        // Update the board with the current player's symbol
        board[row][col] = currentPlayer;
        updateCell(row, col);
        return true; // Move successful
    }
    return false; // Invalid move
}

// Function to update the cell on the HTML board
function updateCell(row, col) {
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.textContent = currentPlayer;
}

// Function to check for a winner
function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            return board[i][0];
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== '') {
            return board[0][j];
        }
    }

    // Check diagonals
    if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
        if (board[1][1] !== '') {
            return board[1][1];
        }
    }

    return null; // No winner yet
}

// Function to check if the board is full
function isBoardFull() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false; // Board is not full
            }
        }
    }
    return true; // Board is full
}

// Function to reset the game
function resetBoard() {
    // Clear the board
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Clear the cells on the HTML board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
