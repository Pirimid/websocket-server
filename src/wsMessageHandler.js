const sampleData = require("./constants/sampleData");
const metaData = require("./constants/metaData");

const constants = require("./constants/constants");

const MessageHandlers = {
  [constants.FETCH_CLIENT_MASTER_META_DATA]: (webSocket) => sendClientMasterMetaData(webSocket),
  [constants.FETCH_CLIENT_MASTER_DATA]: (webSocket) => sendClientMasterData(webSocket),
  [constants.FETCH_SYMBOL_MASTER_META_DATA]: (webSocket) => sendSymbolMasterMetaData(webSocket),
  [constants.FETCH_SYMBOL_MASTER_DATA]: (webSocket) => sendSymbolMasterData(webSocket),
  [constants.FETCH_SCRIPT_WISE_POSITOINS_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.symbolWisePositionPanelMetaData),
  [constants.FETCH_SCRIPT_WISE_POSITIONS]: (webSocket) => sendTickData(webSocket),
  [constants.FETCH_NET_POSITION_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.netPositionPanelMetaData),
  [constants.FETCH_NET_POSITIONS]: (webSocket) => sendMessage(webSocket, sampleData.netPositionData),
  [constants.FETCH_TICK_DATA]: (webSocket) => startSendingTickData(webSocket),
  [constants.FETCH_ORDER_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.orderDataMetaData),
  [constants.FETCH_ORDER_DATA]: (webSocket) => sendOrderData(webSocket),
  [constants.FETCH_COMMENT_CHANGE_META_DATA]: (webSocket) => sendCommentChangeMetaData(webSocket),
  [constants.FETCH_COMMENT_CHANGE_DATA]: (webSocket) => sendCommentChangeData(webSocket),
  [constants.FETCH_ALERT_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.alertMetaData),
  [constants.FETCH_ALERT_DATA]: (webSocket) => sendMessage(webSocket, sampleData.alertData),
  [constants.FETCH_DEALING_META_DATA]: (webSocket) => sendMessage(webSocket, metaData.dealingMetaData),
  [constants.FETCH_DEALING_DATA]: (webSocket) => sendMessage(webSocket, sampleData.dealingData)
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
  if (MessageHandlers[msg.type] instanceof Function) {
    MessageHandlers[msg.type](webSocket, msg)
  } else {
    console.log("No message handler is defined for message type: ", msg.type);
  }
}

function sendMessage(webSocket, message) {
  const msg = JSON.stringify(message);
  webSocket.send(msg);
}

function sendClientMasterMetaData(webSocket) {
  sendMessage(webSocket, metaData.clientMasterMetaData);
}

function sendClientMasterData(webSocket) {
  sendMessage(webSocket, sampleData.clientMasterData);
}

function sendSymbolMasterMetaData(webSocket) {
  sendMessage(webSocket, metaData.symbolMasterMetaData);
}

function sendSymbolMasterData(webSocket) {
  sendMessage(webSocket, sampleData.symbolMasterData);
}

function sendCommentChangeMetaData(webSocket) {
  sendMessage(webSocket, metaData.commentChangeMetaData);
}

function sendCommentChangeData(webSocket) {
  sendMessage(webSocket, sampleData.commentChangeData);
}

function startSendingTickData(webSocket) {
  let tickDataInterval = setInterval(() => {
    if (webSocket.readyState === 1) {
      sendTickData(webSocket);
    } else {
      clearInterval(tickDataInterval);
    }
  }, 500);
}

function sendTickData(webSocket) {
  const sampleTickData = [];
  sampleData.tickData.data.forEach(tickData => {
    sampleTickData.push({ ...tickData, last: getNewValue(tickData.bid) });
  });
  sendMessage(webSocket, { ...sampleData.tickData, data: sampleTickData });
}

startSendingDataToClient = (webSocket) => {
  sendMessage(webSocket, sampleData.symbolWisePositionData);
  let updatesInterval = setInterval(() => {
    if (webSocket.readyState === 1) {
      sendUpdates(webSocket);
    } else {
      clearInterval(updatesInterval);
    }
  }, 500);
}

sendOrderData = (webSocket) => {
  sendMessage(webSocket, sampleData.orderData);
  let orderDataInterval = setInterval(() => {
    if (webSocket.readyState === 1) {
      sendNewOrderData(webSocket);
    } else {
      clearInterval(orderDataInterval);
    }
  }, 1000);
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
  const data = sampleData.symbolWisePositionData.data.map(symbol => ({ id: symbol.id, clientAvg: getNewValue(symbol.clientAvg) }));
  const updatedData = { type: constants.SCRIPT_WISE_POSITIONS_DATA_UPDATED, data };
  return updatedData;
}

const getNewValue = (currentValue) => (Math.random() * ((currentValue + 10) - (currentValue - 10)) + (currentValue - 10)).toFixed(4);

const getRandomIndexBetween = (startIndex, endIndex) => (Math.random() * (endIndex - startIndex) + startIndex).toFixed(0);

module.exports = { registerEventListenersOnSocketIO, registerEventListenersOnStdWebSocket };