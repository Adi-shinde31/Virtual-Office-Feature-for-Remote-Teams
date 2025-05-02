# 🏢 Virtual Office Video Call Web App

## 📌 Description
This is a collaborative virtual office web application designed to simulate real-time remote interaction. Users control avatars on a shared map, and can connect to others via live video calls. The project combines real-time databases and WebRTC technologies to mimic the dynamics of a real-world office online.

## 🎥 Demo Video

[Click here to view the video](https://github.com/Adi-shinde31/Virtual-Office-Feature-for-Remote-Teams/blob/master/docs/OpenAvenues_Demo_Video.mp4)

## 🚀 Steps to Run the Project

Follow these instructions to set up and launch the Virtual Office Video Call Web App on your local machine:

1. Open your terminal and navigate to the project’s root directory:
   ```bash
   cd /Users/xinyichen/Documents/OpenAvenues/microintern_project/code/oa_virtoffice_project
   ```

2. Inside this folder, you will find two main subdirectories: `client` and `server`.

3. Move into the `server` directory:
   ```bash
   cd server
   ```

4. Install all required backend packages:
   ```bash
   npm install
   ```
   > 💡 If you encounter any issues, please reach out to Xinyi for help.

5. Navigate into the server's source code directory:
   ```bash
   cd src
   ```
   At this point, your path should look like: `oa_virtoffice_project/server/src`.

6. Start the backend server:
   ```bash
   node index.js
   ```
   If it runs correctly, you’ll see a message like:
   ```
   Server is running on port 8080
   ```

7. Leave this terminal open with the server running, and launch a **new terminal window** for the frontend.

8. In the new terminal, go to the `client` directory:
   ```bash
   cd oa_virtoffice_project/client
   ```

9. Install the frontend dependencies:
   ```bash
   npm install
   ```

10. Build the frontend application:
    ```bash
    npm run-script build
    ```
    > ⚠️ You can safely ignore any warnings. If the build is successful, you’ll see:
    ```
    The build folder is ready to be deployed.
    ```

11. Launch the frontend server using:
    ```bash
    serve -s build
    ```
    Or, if `serve` is not installed globally, use:
    ```bash
    npx serve -s build
    ```

12. Open your web browser and visit:
    ```
    http://localhost:3000/
    ```

13. You should now see the map interface with a character positioned at the center, ready to interact.

---

## 🛠️ Project Overview

The **Virtual Office Video Call Web App** is a full-stack application that simulates an interactive office space. Users can move characters on a 2D map and initiate video calls when near others.

### 🧩 How It Works

- **Frontend (React):** Displays a virtual map with character avatars that move using keyboard controls (`W`, `A`, `S`, `D`).
- **Realtime Sync (Firebase):** Tracks and updates each user's position instantly so all users see live movements.
- **Video Calling (WebSocket + WebRTC):**
  - **WebSocket** handles signaling to set up peer-to-peer connections.
  - **WebRTC** enables direct video and audio communication between users, with low latency and no central server.

The app brings together real-time interaction and video chat to create a collaborative, virtual office environment.

## ✨ Project Design

![Image](https://github.com/user-attachments/assets/fb0d576d-87f3-4011-8be4-392dd087aedc)
