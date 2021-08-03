const WebSocket = require("ws");
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

//const socket = new WebSocket.Server({ port: 8080 });

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

/*
socket.on("connection", ws => {
    console.log("New client connected");

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});
*/
http.listen(8080, () => console.log("listening on http://localhost:8080"));
