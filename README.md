# Chess-Like Game

**A turn-based strategy game with real-time multiplayer capabilities, inspired by the classic game of chess but with unique characters and movement mechanics. Built using JavaScript, WebSocket, and React.**

## 🎮 Key Features

- **Real-Time Multiplayer:** Engage in strategic battles with opponents in real-time, facilitated by WebSocket communication.
- **Unique Characters:** Three distinct character types (Pawns, Hero1, Hero2) each with their own movement patterns and combat abilities.
- **Turn-Based Strategy:** Carefully plan your moves to outmaneuver your opponent and claim victory.
- **Dynamic Game Board:** A 5x5 grid where strategy and positioning are key to success.
- **Move History:** Track every move made by both players, with a detailed history available throughout the game.
- **Game Over Conditions:** The game ends when one player eliminates all of the opponent's characters, with the winner prominently displayed.

## 🖼️ Screenshots

1. **Player Entry (A):**
   ![Player A Entry](https://github.com/user-attachments/assets/f89b4b1c-1a8e-4454-a0b7-bec8527b7f97)

2. **Player Entry (B):**
   ![Player B Entry](https://github.com/user-attachments/assets/45dd3ccc-8221-4930-863e-e23d1d9ffb53)

3. **Game Board Display:**
   ![Game Board](https://github.com/user-attachments/assets/2ca36e5e-9fa9-45d7-9a0a-090a5650b2e4)

4. **Move Display for Player A:**
   ![Player A Moves](https://github.com/user-attachments/assets/20f2eaac-bc9f-4e50-9bcf-36ffff3d0a0a)

5. **Game Start with Player B's Turn:**
   ![Game Start A Turn](https://github.com/user-attachments/assets/3b46fc04-533a-4c60-bcfb-a0e49bbcb5a3)

6. **Game Start with Player A's Turn:**
   ![Game Start B Turn](https://github.com/user-attachments/assets/7f821dd5-366f-47be-b2d1-3777d85579ce)

7. **Move History Display:**
   ![Move History](https://github.com/user-attachments/assets/11fc5970-875f-4546-b854-75362c4660ea)

8. **Game Winner Announcement:**
   ![Game Winner](https://github.com/user-attachments/assets/9112dcd8-ecce-4c4e-8a91-3079be82e4af)

## 🚀 Setup Instructions

### Server Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Sauravkrgupta/Saurav_Kumar_21BCE2998..git
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

## 🕹️ How to Play

1. **Start the Game:**
   - Open the client in your web browser.
   - Enter your player identifier (`A` or `B`) when prompted.

2. **Gameplay:**
   - Use the game board to select your characters and issue move commands.
   - Each character has unique movement and combat abilities.
   - Take turns moving your characters with the goal of eliminating all opponent characters.

3. **Monitor the Game:**
   - The game displays the current state, including whose turn it is, and a history of moves.
   - The game ends when one player eliminates all of the opponent's characters.

4. **Winning:**
   - The winner is announced on the screen once the game is over, with the victorious player’s name displayed prominently.

## 🛠️ Technology Stack

- **Frontend:** React.js for building the user interface.
- **Backend:** Node.js for handling server-side logic.
- **WebSocket:** For real-time communication between players.
- **JavaScript:** Used extensively on both the client and server sides.
