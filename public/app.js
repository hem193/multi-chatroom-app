var socket = io();

var userlist = document.getElementById("active_users_list");
var roomlist = document.getElementById("active_rooms-list");
var message = document.getElementById("messageInput");
var sendMessageBtn = document.getElementById("send_message_btn");
var roomInput = document.getElementById("roomInput");
var createRoomBtn = document.getElementById("room_add_icon_holder");
const chatDisplay = docuemt.getElementById("chat");

var currentRoom = "globalChat";
var myUsername = " ";

socket.on("connect", function () {
  myUsername = prompt("Enter name");
  socket.emit("createUser", myUsername);
});

socket.on("updateChat", function (username, data) {
  if (username === "INFO") {
    chatDisplay.innerHTML = `<div class='announcement'><span>${data}</span></div>`;
  }
});
