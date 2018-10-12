const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("../src/index");

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
});

server.listen(port, () => console.log(`Listening on port ${port}`));

startSendingDataToClient = (socket) => {
  socket.emit('POSITIONS_DATA_FETCHED', data);
  setInterval(() => sendUpdates(socket), 500);
}

const sendUpdates = (socket) => socket.emit("POSITIONS_DATA_UPDATED", generateNewUpdatedData());

const generateNewUpdatedData = () => {
  let data = [];
  for (let i = 1; i <= 8; i++) {
    data.push({ id: i, avgPrice: getNewValue() });
  }
  return data;
}

const getNewValue = () => (Math.random() * (459 - 451) + 451).toFixed(4);

const data = [
  {
    id: 1,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 2,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 3,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 4,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 5,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 6,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 7,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
  {
    id: 8,
    symbol: "COPPERNOV",
    volume: 5,
    avgPrice: 457.3321,
    lastRate: 455.0501,
    profitLoss: 54800.0014,
    companyVolume: -15.68,
    companyPL: 85214.1245,
    companyExposure: 3004.2214,
    grossExposure: 5846.1452,
    grossPL: 95624.2451
  },
];