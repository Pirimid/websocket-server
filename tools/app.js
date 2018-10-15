const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("../src/index");

const PositionsData = require("../constants/sampleData");
const PositionsMetaData = require("../constants/metaData");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
  socket.on('from-client', (message) => {
    console.log("Message from client: ", message);
    socket.emit('from-server', `Got your message: ${message}`);
  });
  socket.on('get-data', () => startSendingDataToClient(socket));
  socket.on('FETCH_POSITIONS', () => startSendingDataToClient(socket));
  socket.on('FETCH_POSITOINS_META_DATA', () => socket.emit('POSITIONS_META_DATA_FETCHED', PositionsMetaData));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

startSendingDataToClient = (socket) => {
  socket.emit('POSITIONS_DATA_FETCHED', PositionsData);
  setInterval(() => sendUpdates(socket), 500);
}

const sendUpdates = (socket) => socket.emit("POSITIONS_DATA_UPDATED", generateNewUpdatedData());

const generateNewUpdatedData = () => {
  const data = PositionsData.map(symbol => ({ id: symbol.id, avgPrice: getNewValue(symbol.avgPrice) }));
  return data;
}

const getNewValue = (currentValue) => (Math.random() * ((currentValue + 10) - (currentValue - 10)) + (currentValue - 10)).toFixed(4);