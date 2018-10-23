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
  socket.on('FETCH_SCRIPT_WISE_POSITIONS', () => startSendingDataToClient(socket));
  socket.on('FETCH_SCRIPT_WISE_POSITOINS_META_DATA', () => socket.emit('SCRIPT_WISE_POSITION_META_DATA', metaData.symbolWisePositionPanelMetaData));
  socket.on('FETCH_NET_POSITION_META_DATA', () => socket.emit('NET_POSITION_META_DATA', metaData.netsymbolWisePositionPanelMetaData));
  socket.on('FETCH_NET_POSITIONS', () => socket.emit('NET_POSITIONS', sampleData.netPositionData));
  socket.on('FETCH_TICK_DATA', () => setInterval(() => startSendingTickData(socket), 500));
  socket.on('FETCH_ORDER_META_DATA', () => socket.emit('ORDER_META_DATA', metaData.orderDataMetaData));
  socket.on('FETCH_ORDER_DATA', () => sendMarketData(socket));
});
server.listen(port, () => console.log(`Listening on port ${port}`));

function startSendingTickData(socket) {
  const sampleTickData = [];
  sampleData.tickData.forEach(tickData => {
    sampleTickData.push({ ...tickData, last: getNewValue(tickData.bid) });
  });
  socket.emit('TICK_DATA', sampleTickData);
}

startSendingDataToClient = (socket) => {
  socket.emit('SCRIPT_WISE_POSITIONS_DATA', sampleData.symbolWisePositionData);
  setInterval(() => sendUpdates(socket), 500);
}

sendMarketData = (socket) => {
  socket.emit('ORDER_DATA', sampleData.orderData);
  setInterval(() => sendNewOrderData(socket), 1000);
}

sendNewOrderData = (socket) => {
  const newOrderData = [];
  const orderData = sampleData.orderData;
  for (let i = 1; i <= 2; i++) {
    const index = getRandomIndexBetween(0, orderData.length - 1);
    const order = orderData[index];
    newOrderData.push({ ...order, netQuantity: getNewValue(order.netQuantity) });
  }
  socket.emit('ORDER_DATA', newOrderData);
}

const sendUpdates = (socket) => socket.emit("SCRIPT_WISE_POSITIONS_DATA_UPDATED", generateNewUpdatedData());

const generateNewUpdatedData = () => {
  const data = sampleData.symbolWisePositionData.map(symbol => ({ id: symbol.id, avgPrice: getNewValue(symbol.avgPrice) }));
  return data;
}

const getNewValue = (currentValue) => (Math.random() * ((currentValue + 10) - (currentValue - 10)) + (currentValue - 10)).toFixed(4);

const getRandomIndexBetween = (startIndex, endIndex) => (Math.random() * (endIndex - startIndex) + startIndex).toFixed(0);