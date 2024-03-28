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
        triggerConfetti(); // Add this line
        resetGame();
    } else if (isBoardFull()) {
        alert("It's a draw!");
        triggerConfetti(); // And this line
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
// Function to trigger confetti effect
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiCount = 100;
    const colors = ['blue', 'pink', 'red'];
    const animationDuration = 15;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add(colors[Math.floor(Math.random() * colors.length)]); // Assign random color
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);

        // Remove confetti element after animation ends
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}
