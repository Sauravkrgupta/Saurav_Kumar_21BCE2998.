import React from 'react';

function GameBoard({ board, onCharacterSelect, player, selectedChar }) {
  return (
    <div className="game-board">
      {board.map((row, y) => (
        <div key={y} className="row">
          {row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${cell ? cell.split('-')[0] : 'empty'} ${cell === selectedChar ? 'selected' : ''}`}
              onClick={() => cell && cell.split('-')[0] === player ? onCharacterSelect(cell) : null}
            >
              {cell && <span className="character">{cell}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
