class Game {
  constructor() {
    this.board = this.createBoard();
    this.players = ['A', 'B'];
    this.currentPlayerIndex = 0;
    this.gameOver = false;
    this.moveHistory = [];
  }

  createBoard() {
    let board = Array(5).fill(null).map(() => Array(5).fill(null));
    board[0] = ['A-P1', 'A-H1', 'A-H2', 'A-P2', 'A-P3'];
    board[4] = ['B-P1', 'B-H1', 'B-H2', 'B-P2', 'B-P3'];
    return board;
  }

  getState() {
    return {
      board: this.board,
      currentPlayer: this.players[this.currentPlayerIndex],
      gameOver: this.gameOver,
      moveHistory: this.moveHistory,
    };
  }

  makeMove(player, move) {
    if (this.players[this.currentPlayerIndex] !== player) {
      return { valid: false, message: 'Not your turn' };
    }

    const { char, direction } = move;
    const pos = this.findCharacter(char);

    if (!pos) {
      return { valid: false, message: 'Character not found' };
    }

    let newPosition = this.calculateNewPosition(char, pos, direction);

    if (!newPosition || !this.isValidMove(char, pos, newPosition)) {
      return { valid: false, message: 'Invalid move' };
    }

    this.executeMove(pos, newPosition, char);
    this.moveHistory.push(`${char}:${direction}`);
    
    if (this.checkWinCondition()) {
      this.gameOver = true;
    } else {
      this.switchTurn();
    }

    return { valid: true };
  }

  calculateNewPosition(char, pos, direction) {
    let { x, y } = pos;
    let step = char.includes('H') ? 2 : 1;

    switch (direction) {
      case 'L':
        x -= step;
        break;
      case 'R':
        x += step;
        break;
      case 'F':
        y += (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        break;
      case 'B':
        y -= (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        break;
      case 'FL':
        if (char.includes('H2')) {
          x -= step;
          y += (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        }
        break;
      case 'FR':
        if (char.includes('H2')) {
          x += step;
          y += (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        }
        break;
      case 'BL':
        if (char.includes('H2')) {
          x -= step;
          y -= (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        }
        break;
      case 'BR':
        if (char.includes('H2')) {
          x += step;
          y -= (this.currentPlayerIndex === 0 ? 1 : -1) * step;
        }
        break;
    }

    return { x, y };
  }

  isValidMove(char, pos, newPosition) {
    const { x, y } = newPosition;
    if (x < 0 || x >= 5 || y < 0 || y >= 5) return false;
    if (this.board[y][x] && this.board[y][x][0] === char[0]) return false;

    if (char.includes('H')) {
      const path = this.getPath(pos, newPosition);
      for (let p of path) {
        if (this.board[p.y][p.x] && this.board[p.y][p.x][0] !== char[0]) {
          this.board[p.y][p.x] = null;
        }
      }
    }

    return true;
  }

  getPath(pos, newPosition) {
    const path = [];
    const dx = Math.sign(newPosition.x - pos.x);
    const dy = Math.sign(newPosition.y - pos.y);

    let x = pos.x + dx;
    let y = pos.y + dy;

    while (x !== newPosition.x || y !== newPosition.y) {
      path.push({ x, y });
      x += dx;
      y += dy;
    }

    return path;
  }

  executeMove(pos, newPosition, char) {
    this.board[pos.y][pos.x] = null;
    this.board[newPosition.y][newPosition.x] = char;
  }

  findCharacter(char) {
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (this.board[y][x] === char) {
          return { x, y };
        }
      }
    }
    return null;
  }

  switchTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  checkWinCondition() {
    const opponent = this.players[(this.currentPlayerIndex + 1) % this.players.length];
    return !this.board.flat().some(cell => cell && cell.startsWith(opponent));
  }
}

module.exports = { Game };
