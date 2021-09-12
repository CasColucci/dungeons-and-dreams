const socket = io("http://localhost:3000");

const joinBtn = document.getElementById("joinBtn");
const createBtn = document.getElementById("createBtn");
const roomIdInput = document.getElementById("roomIdInput");

const roomScreen = document.getElementById("roomScreen");
const initialScreen = document.getElementById("initialScreen");
const roomIdDisplay = document.getElementById("roomIdDisplay");

createBtn.addEventListener("click", newRoom);
joinBtn.addEventListener("click", joinRoom);

socket.on("init", handleInit);
socket.on("roomId", handleRoomId);

let userNumber;

function newRoom() {
  socket.emit("newRoom");
  setup();
}

function joinRoom() {
  const code = roomIdInput.value;
  socket.emit("joinRoom", code);
  setup();
}

function handleInit(number) {
  userNumber = number;
}
function handleRoomId(roomId) {
  roomIdDisplay.innerText = roomId;
}

function setup() {
  initialScreen.style.display = "none";
  roomScreen.style.display = "block";
}
