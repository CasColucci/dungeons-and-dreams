const WebSocket = require('ws');

const socket = new WebSocket.Server({ port: 8080 });

socket.on("connection", ws => {
    console.log("New client connected");

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});