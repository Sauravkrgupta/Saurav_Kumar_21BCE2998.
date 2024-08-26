const ws = new WebSocket('ws://localhost:8080');
let player = prompt('Enter your player identifier (A or B):');
let selectedChar = null;

ws.onopen = () => {
    ws.send(JSON.stringify({ type: 'init', player }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    if (data.type === 'gameState') {
        updateBoard(data.state.board);
        document.getElementById('status').textContent = `Current Turn: ${data.state.currentPlayer}`;
    }

    if (data.type === 'invalidMove') {
        alert(data.message);
    }
};

function updateBoard(board) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear previous board

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            const cell = document.createElement('div');
            const char = board[y][x];
            cell.classList.add('cell');
            
            if (char) {
                const playerChar = char.split('-')[0];
                cell.textContent = char;
                cell.classList.add(playerChar);
                if (playerChar === player) {
                    cell.onclick = () => selectCharacter(char);
                }
            } else {
                cell.classList.add('empty');
            }

            gameBoard.appendChild(cell);
        }
    }
}

function selectCharacter(char) {
    selectedChar = char;
    const move = prompt('Enter move direction (L, R, F, B):');
    if (move) {
        ws.send(JSON.stringify({ type: 'move', move: { char, direction: move } }));
    }
}
