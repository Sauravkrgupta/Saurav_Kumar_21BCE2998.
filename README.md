# Saurav_kumar_21BCE2998
# Chess-Like Game

This project is a chess-like game built using JavaScript for the server-side logic, WebSocket for real-time communication, and React for the frontend. The game features a 5x5 board with two players, each controlling characters with unique movement patterns.

## Features

- **Real-Time Multiplayer:** Players connect and play in real-time using WebSockets.
- **Character Types:** Three types of characters (Pawns, Hero1, Hero2) with unique movement and combat abilities.
- **Turn-Based Gameplay:** Players take turns to move their characters, with the goal of eliminating all opponent characters.
- **Game Over Conditions:** The game ends when one player eliminates all of the opponent's characters.

## Setup Instructions

### Server Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/chess-like-game.git
    cd chess-like-game
    ```

2. **Install Dependencies:**

    Navigate to the server directory and install the required Node.js packages:

    ```bash
    cd server
    npm install
    ```

3. **Start the Server:**

    Run the server using:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:8080`.

### Client Setup

1. **Navigate to the Client Directory:**

    ```bash
    cd ../client
    ```

2. **Install Dependencies:**

    Install the necessary packages:

    ```bash
    npm install
    ```

3. **Start the Client:**

    Run the React application:

    ```bash
    npm start
    ```

    The client will be available at `http://localhost:5173`.

## How to Play

1. Open the client in your web browser.
2. Enter your player identifier (`A` or `B`) when prompted.
3. Use the game board to select your characters and issue move commands.
4. The game displays the current state, including whose turn it is, and a history of moves.
5. The game ends when one player eliminates all of the opponent's characters. The winner is announced on the screen.
