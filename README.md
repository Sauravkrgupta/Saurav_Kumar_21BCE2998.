# Saurav_kumar_21BCE2998
![image](https://github.com/user-attachments/assets/f89b4b1c-1a8e-4454-a0b7-bec8527b7f97)
![image](https://github.com/user-attachments/assets/45dd3ccc-8221-4930-863e-e23d1d9ffb53)

![image](https://github.com/user-attachments/assets/2ca36e5e-9fa9-45d7-9a0a-090a5650b2e4)
![image](https://github.com/user-attachments/assets/20f2eaac-bc9f-4e50-9bcf-36ffff3d0a0a)
![image](https://github.com/user-attachments/assets/3b46fc04-533a-4c60-bcfb-a0e49bbcb5a3)

![image](https://github.com/user-attachments/assets/5bf2244b-80d1-45c2-9966-f40104e1af49)
![image](https://github.com/user-attachments/assets/7f821dd5-366f-47be-b2d1-3777d85579ce)

![image](https://github.com/user-attachments/assets/11fc5970-875f-4546-b854-75362c4660ea)
![image](https://github.com/user-attachments/assets/9112dcd8-ecce-4c4e-8a91-3079be82e4af)















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
