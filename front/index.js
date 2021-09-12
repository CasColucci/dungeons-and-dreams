const socket = io("http://localhost:3000");

const joinBtn = document.getElementById("joinBtn");
const createBtn = document.getElementById("createBtn");
const roomIdInput = document.getElementById("roomIdInput");

const roomScreen = document.getElementById("roomScreen");
const initialScreen = document.getElementById("initialScreen");
const roomIdDisplay = document.getElementById("roomIdDisplay");
const userIdDisplay = document.getElementById("userIdDisplay");
const dmName = document.getElementById("dmName");
const userName = document.getElementById("userName");

createBtn.addEventListener("click", newRoom);
joinBtn.addEventListener("click", joinRoom);

socket.on("init", handleInit);
socket.on("roomId", handleRoomId);

let userNumber;

function newRoom() {
  if (dmName.value.length > 0) {
    socket.emit("newRoom", dmName);
    setup();
  }
}

function joinRoom() {
  if (userName.value.length > 0) {
    const code = roomIdInput.value;
    socket.emit("joinRoom", code, userName);
    setup();
  }
}

function handleInit(number) {
  userNumber = number;
}
function handleRoomId(roomId) {
  roomIdDisplay.innerText = roomId;
  socket.emit("emitAllUsers", roomId);
}

function setup() {
  initialScreen.style.display = "none";
  roomScreen.style.display = "block";
}

function updateUsers(users) {
  userIdDisplay.innerText = users;
}
