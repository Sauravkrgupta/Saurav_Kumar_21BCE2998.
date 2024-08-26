const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { Game } = require('./game');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let game = new Game();

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    if (data.type === 'init') {
      ws.player = data.player;
      ws.send(JSON.stringify({ type: 'gameState', state: game.getState() }));
    }

    if (data.type === 'move') {
      const result = game.makeMove(ws.player, data.move);
      if (result.valid) {
        broadcast({
          type: 'gameState',
          state: game.getState()
        });
      } else {
        ws.send(JSON.stringify({ type: 'invalidMove', message: result.message }));
      }
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function broadcast(data) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
