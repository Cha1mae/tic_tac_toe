// Initialize the game
document.addEventListener('DOMContentLoaded', initializeGame);

// Function to initialize the game
function initializeGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetGame);
}

// Handle cell click event
function handleCellClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (!makeMove(row, col)) {
        // Invalid move
        return;
    }

    // Check for winner or draw
    const winner = checkWinner();
    if (winner) {
        alert(`Player ${winner} wins!`);
        resetGame();
    } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
    } else {
        // Switch players
        switchPlayer();
    }
}

// Reset the game
function resetGame() {
    resetBoard();
    currentPlayer = PLAYER_X; // Assuming PLAYER_X is defined in game-logic.js
}

// Function to switch players
function switchPlayer() {
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X; // Assuming PLAYER_O is defined in game-logic.js
}
