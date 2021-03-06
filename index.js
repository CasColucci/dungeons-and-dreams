const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 3000;
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set the static folder
app.use(express.static(path.join(__dirname, "../client")));

// start the server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let users = [];
let characters = [];

// demo of handling a socket connection request from the client
io.on("connection", (socket) => {
  socket.on("join server", (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
    io.emit("user display", users);
  });

  // interesting thing to note; a function can be passed from the client to this function and then used if needed
  socket.on("join room", (roomname) => {
    socket.join(roomname);
  });

  socket.on("add character", (character, user) => {
    characters.push(character);
    io.emit("init adjusted", characters);
  });

  // will need to be edited in order to allow for characters with the same name to be differentiated
  socket.on("remove character", (character) => {
    for (var i = 0; i < characters.length; i++) {
      if (characters[i] === character) {
        characters.splice(i, 1);
        io.emit("init adjusted", characters);
        i = characters.length;
      }
    }
  });

  socket.on("disconnect", () => {
    users = users.filter((u) => u.id !== socket.id);
    io.emit("user display", users);
  });
});

/*
  Note to self about the function of characters (and to change the name):
  Should create a specific variable within this variable to keep track of the index
  this way it can be used as an id number and we don't have to call a for loop to remove 
  the specific character we want. 
*/

/*
  - http name and room input, either join room or make a new room
  - GM is designated as the user who makes the room
  - GM needs the ability to create and order the roster. 
    - can be generated by inputing the initiative rolls, but can be edited manually if needed
  - all users see who's turn it is
  - GM gets to iterate through the list forwards and back (back in case they go forward on accident or need to fix something)
  
  extras:
  - include status effects <<< can select specific ones from a list, or have the GM manually write it
  - notes under characters and buffs
  - possible chat and/or reactions
*/
