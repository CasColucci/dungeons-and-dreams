const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set the static folder
app.use(express.static(path.join(__dirname, "public")));

// start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// demo of handling a socket connection request from the client
io.on("connection", (socket) => {
  console.log("New WS Connection");
});
