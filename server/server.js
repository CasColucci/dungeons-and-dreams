const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// pull the function that randomly generates an ID
const { makeid } = require("./utils");

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
  let users = [];

  socket.on("disconnect", (socket) => console.log("User disconnected"));

  function handleNewRoom(user) {
    let roomName = makeid(5);
    socketRooms[socket.id] = roomName;
    socket.emit("roomId", roomName);
    socket.join(roomName);
    socket.number = 1;
    socket.emit("init", 1);
    users.push(user);
  }

  function handleJoinRoom(roomId, user) {
    const room = io.sockets.adapter.rooms[roomId];
    let allUsers;
    if (room) {
      allUsers = room.sockets;
    }

    let numSockets = 0;
    if (allUsers) {
      numSockets = Object.keys(allUsers).length;
    }
    if (numSockets === 0) {
      socket.emit("unknownRoom");
      return;
    }
    socketRooms[socket.id] = roomId;
    socket.join(roomId);
    socket.number = 2;
    socket.emit("init", 2);
    socket.emit("roomId", roomId);
    users.push(user);
    emitAllUsers(roomId);
  }
  function emitAllUsers(roomName) {
    io.sockets.in(roomName).emit("updateUsers", users);
  }
});
