const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { makeid } = require("./utils");

const socketRooms = {};

app.use(express.static(path.join(__dirname, "../front")));

const PORT = process.env.PORT || 3000;

// start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let users = [];

io.on("connection", (socket) => {
  console.log("User has connected");
  socket.on("newRoom", handleNewRoom);

  socket.on("disconnect", (socket) => console.log("User disconnected"));

  function handleNewRoom() {
    let roomName = makeid(5);
    socketRooms[socket.id] = roomName;
    socket.emit("roomId", roomName);
    socket.join(roomName);
    socket.number = 1;
    socket.emit("init", 1);
  }
});
