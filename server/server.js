const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// pull the function that randomly generates an ID
const { makeid } = require("./utils");
const { type } = require("os");

// set a variable with all the rooms
const socketRooms = {};

// set the path for the frontend
app.use(express.static(path.join(__dirname, "../front")));

const PORT = process.env.PORT || 3000;

// start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// on a new connection to the main server
io.on("connection", (socket) => {
  console.log("User has connected");
  socket.on("newRoom", handleNewRoom);
  socket.on("joinRoom", handleJoinRoom);

  function handleNewRoom() {
    let roomId = makeid(5);
    socket.join(roomId);
    socketRooms[socket.id] = roomId;
    socket.emit("roomId", roomId);
    socket.emit("init", 1);
  }

  function handleJoinRoom(roomId) {
    const room = io.sockets.adapter.rooms.has(roomId);
    let allUsers;
    if (room) {
      socket.join(roomId);
      socketRooms[socket.id] = roomId;
      socket.emit("init", 2);
      socket.emit("roomId", roomId);
    } else {
      socket.emit("unknownRoom");
      return;
    }
  }
});
