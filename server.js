const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const usernames = {};
const rooms = [
  { name: "globalChat", creator: "anonymous" },
  { name: "chess", creator: "anonymous" },
  { name: "javascript", creator: "anonymous" },
];

io.on("connection", function (socket) {
  socket.on("creatUser", function (name) {
    socket.username = username;
    usernames[username] = username;
    socket.currentRoom = "globalChat";

    socket.join("globalChat");
    socket.emit("updateChat", "INFO", "You have joined globalChat");
  });
});

server.listen(4000, function () {
  console.log("server running at port 4000");
});
