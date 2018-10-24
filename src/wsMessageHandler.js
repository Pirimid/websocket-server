const sampleData = require("../constants/sampleData");
const metaData = require("../constants/metaData");

const constants = require("../constants/constants");

const MessageHandlers = {
  [constants.FETCH_SCRIPT_WISE_POSITOINS_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.symbolWisePositionPanelMetaData),
  [constants.FETCH_SCRIPT_WISE_POSITIONS]: (webSocket) => startSendingTickData(webSocket),
  [constants.FETCH_NET_POSITION_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.netPositionPanelMetaData),
  [constants.FETCH_NET_POSITIONS]: (webSocket) =>  sendMessage(webSocket, sampleData.netPositionData),
  [constants.FETCH_TICK_DATA]: (webSocket) => setInterval(() => startSendingTickData(webSocket), 500),
  [constants.FETCH_ORDER_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.orderDataMetaData),
  [constants.FETCH_ORDER_DATA]: (webSocket) => sendMarketData(webSocket)
};

function registerEventListenersOnSocketIO(webSocket) {
  webSocket.use((message, next) => {
    handleMessage(webSocket, message);
    return next();
  });
}

function registerEventListenersOnStdWebSocket(webSocket) {
  webSocket.on(constants.MESSAGE, message => {
    handleMessage(webSocket, message);
  });
}

function handleMessage(webSocket, message) {
  let msg = JSON.parse(message);
  if(MessageHandlers[msg.type] instanceof Function) {
    MessageHandlers[msg.type](webSocket, msg)
  } else {
    console.log("No message handler is defined for message type: ", msg.type);
  }
}

function sendMessage(webSocket, message) {
  const msg = JSON.stringify(message);
  webSocket.send(msg);
}

function startSendingTickData(webSocket) {
  const sampleTickData = [];
  sampleData.tickData.data.forEach(tickData => {
    sampleTickData.push({ ...tickData, last: getNewValue(tickData.bid) });
  });
  sendMessage(webSocket, { ...sampleData.tickData, data: sampleTickData });
}

startSendingDataToClient = (webSocket) => {
  sendMessage(webSocket, sampleData.symbolWisePositionData);
  setInterval(() => sendUpdates(webSocket), 500);
}

sendMarketData = (webSocket) => {
  sendMessage(webSocket, sampleData.orderData);
  setInterval(() => sendNewOrderData(webSocket), 1000);
}

sendNewOrderData = (webSocket) => {
  const newOrderData = [];
  const orderData = sampleData.orderData.data;
  for (let i = 1; i <= 2; i++) {
    const index = getRandomIndexBetween(0, orderData.length - 1);
    const order = orderData[index];
    newOrderData.push({ ...order, netQuantity: getNewValue(order.netQuantity) });
  }
  sendMessage(webSocket, { ...sampleData.orderData, data: newOrderData });
}

const sendUpdates = (webSocket) => sendMessage(webSocket, generateNewUpdatedData());

const generateNewUpdatedData = () => {
  const data = sampleData.symbolWisePositionData.data.map(symbol => ({ id: symbol.id, avgPrice: getNewValue(symbol.avgPrice) }));
  const updatedData = { type: constants.SCRIPT_WISE_POSITIONS_DATA_UPDATED, data };
  return updatedData;
}

const getNewValue = (currentValue) => (Math.random() * ((currentValue + 10) - (currentValue - 10)) + (currentValue - 10)).toFixed(4);

const getRandomIndexBetween = (startIndex, endIndex) => (Math.random() * (endIndex - startIndex) + startIndex).toFixed(0);

module.exports = { registerEventListenersOnSocketIO, registerEventListenersOnStdWebSocket };