// AI Logic for Tic Tac Toe

// Function to make a move for AI
function makeAIMove() {
    // Implement AI logic here
    // For simplicity, let's make a random move
    let emptyCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                emptyCells.push([i, j]);
            }
        }
    }

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const [row, col] = emptyCells[randomIndex];
        makeMove(row, col, PLAYER_O); // AI plays with '0'
    }
}
