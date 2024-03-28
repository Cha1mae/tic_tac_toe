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

    if (!makeMove(row, col, currentPlayer)) { // Current player makes a move
        // Invalid move
        return;
    }

    const winner = checkWinner();
    if (winner) {
        alert(`Player ${winner} wins!`);
        triggerConfetti();
        resetGame();
    } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
    } else {
        // Player made move, now AI moves
        makeAIMove();
    }
}

// Reset the game
function resetGame() {
    resetBoard();
    currentPlayer = PLAYER_X; // Player starts the game
}

// Function to trigger confetti effect
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiCount = 100;
    const colors = ['blue', 'pink', 'red'];
    const animationDuration = 15;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add(colors[Math.floor(Math.random() * colors.length)]);
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);

        // Remove confetti element after animation ends
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}
