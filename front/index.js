const socket = io("http://localhost:3000");

// get the elements that will be used from the html
const joinBtn = document.getElementById("joinBtn");
const createBtn = document.getElementById("createBtn");
const roomIdInput = document.getElementById("roomIdInput");
const roomScreen = document.getElementById("roomScreen");
const initialScreen = document.getElementById("initialScreen");
const roomIdDisplay = document.getElementById("roomIdDisplay");
const userDisplay = document.getElementById("userIdDisplay");
const dmName = document.getElementById("dmName");
const userName = document.getElementById("userName");

createBtn.addEventListener("click", newRoom);
joinBtn.addEventListener("click", joinRoom);

// The current functions being passed in
socket.on("init", handleInit);
socket.on("roomId", handleRoomId);
socket.on("unknownRoom", handleUnknownRoom);
socket.on("userList", handleUserList);

let userNumber;

function newRoom() {
  if (dmName.value.length > 0) {
    socket.emit("newRoom", dmName.value);
    setup();
  }
}

function joinRoom() {
  if (userName.value.length > 0) {
    const roomId = roomIdInput.value;
    socket.emit("joinRoom", roomId, userName.value);
    setup();
  }
}

function handleUnknownRoom() {
  reset();
  alert("Unknown room code");
}

function handleInit(number) {
  userNumber = number;
}

function handleRoomId(roomId) {
  roomIdDisplay.innerText = roomId;
  socket.emit("updateUsers", roomId);
}

function handleUserList(users) {
  console.log(users);
  userDisplay.innerText = "";
  for (user of users) {
    userDisplay.innerText += user;
    userDisplay.innerText += ", ";
  }
}

function setup() {
  initialScreen.style.display = "none";
  roomScreen.style.display = "block";
}

function reset() {
  userNumber = null;
  roomIdInput.value = "";
  roomIdDisplay.innerText = "";
  initialScreen.style.display = "block";
  roomScreen.style.display = "none";
}
