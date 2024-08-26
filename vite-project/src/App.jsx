import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import MoveControls from './components/MoveControls';
import './App.css';

function App() {
  const [gameState, setGameState] = useState({
    board: Array(5).fill(Array(5).fill(null)),
    currentPlayer: '',
    moveHistory: [],
    gameOver: false,
    winner: ''
  });
  const [player, setPlayer] = useState('');
  const [selectedChar, setSelectedChar] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const playerInput = prompt('Enter your player identifier (A or B):');
    setPlayer(playerInput);

    const socket = new WebSocket('ws://localhost:8080');
    setWs(socket);

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'init', player: playerInput }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'gameState') {
        setGameState({
          board: data.state.board,
          currentPlayer: data.state.currentPlayer,
          moveHistory: data.state.moveHistory,
          gameOver: data.state.gameOver,
          winner: data.state.gameOver ? (data.state.currentPlayer === player ? 'A' : 'B') : ''
        });
      }

      if (data.type === 'invalidMove') {
        alert(data.message);
      }
    };

    return () => {
      socket.close();
    };
  }, [player]);

  const selectCharacter = (char) => {
    setSelectedChar(char);
  };

  const handleMove = (direction) => {
    if (selectedChar && ws) {
      ws.send(JSON.stringify({ type: 'move', move: { char: selectedChar, direction } }));
      setSelectedChar(null);
    }
  };

  const handleNewGame = () => {
    window.location.reload(); // Simple way to reset the game
  };

  return (
    <div className="App">
      <h1>Chess-like Game</h1>
      <div className="status">Current Turn: <strong>{gameState.currentPlayer}</strong></div>
      <GameBoard 
        board={gameState.board} 
        onCharacterSelect={selectCharacter}
        player={player}
        selectedChar={selectedChar}
      />
      <MoveControls onMove={handleMove} selectedChar={selectedChar} />
      {gameState.gameOver && (
        <div className="game-over">
          <h2>Game Over! Player {gameState.winner} wins!</h2>
          <button onClick={handleNewGame}>Start New Game</button>
        </div>
      )}
      <div className="move-history">
        <h2>Move History</h2>
        <ul>
          {gameState.moveHistory.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
