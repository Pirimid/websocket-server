const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("../src/index");

const sampleData = require("../constants/sampleData");
const metaData = require("../constants/metaData");

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
  socket.on('FETCH_POSITOINS_META_DATA', () => socket.emit('POSITIONS_META_DATA', metaData.positionPanelMetaData));
  socket.on('FETCH_NET_POSITION_META_DATA', () => socket.emit('NET_POSITION_META_DATA', metaData.mainPanelData));
  socket.on('FETCH_NET_POSITIONS', () => socket.emit('NET_POSITIONS', sampleData.netPositionData));
  socket.on('FETCH_TICK_DATA', () => socket.emit('TICK_DATA', sampleData.tickData));
});

server.listen(port, () => console.log(`Listening on port ${port}`));

startSendingDataToClient = (socket) => {
  socket.emit('POSITIONS_DATA', sampleData.positionsData);
  setInterval(() => sendUpdates(socket), 500);
}

const sendUpdates = (socket) => socket.emit("POSITIONS_DATA_UPDATED", generateNewUpdatedData());

const generateNewUpdatedData = () => {
  const data = sampleData.positionsData.map(symbol => ({ id: symbol.id, avgPrice: getNewValue(symbol.avgPrice) }));
  return data;
}

const getNewValue = (currentValue) => (Math.random() * ((currentValue + 10) - (currentValue - 10)) + (currentValue - 10)).toFixed(4);