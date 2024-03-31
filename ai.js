// AI Logic for Tic Tac Toe

// Function to check if a player is about to win
function isAboutToWin(board, player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === '')
            return [i, 2];
        if (board[i][0] === player && board[i][2] === player && board[i][1] === '')
            return [i, 1];
        if (board[i][1] === player && board[i][2] === player && board[i][0] === '')
            return [i, 0];
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === '')
            return [2, i];
        if (board[0][i] === player && board[2][i] === player && board[1][i] === '')
            return [1, i];
        if (board[1][i] === player && board[2][i] === player && board[0][i] === '')
            return [0, i];
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === '')
        return [2, 2];
    if (board[0][0] === player && board[2][2] === player && board[1][1] === '')
        return [1, 1];
    if (board[1][1] === player && board[2][2] === player && board[0][0] === '')
        return [0, 0];
    if (board[0][2] === player && board[1][1] === player && board[2][0] === '')
        return [2, 0];
    if (board[0][2] === player && board[2][0] === player && board[1][1] === '')
        return [1, 1];
    if (board[1][1] === player && board[2][0] === player && board[0][2] === '')
        return [0, 2];

    // No winning move
    return null;
}

// Function to make a move for AI
function makeAIMove() {
    // Check if the opponent is about to win
    let winningMove = isAboutToWin(board, PLAYER_X); // Assuming the opponent plays with 'X'
    if (winningMove) {
        makeMove(winningMove[0], winningMove[1], PLAYER_O); // Block the opponent
        return;
    }

    // If the opponent is not about to win, make a random move
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
