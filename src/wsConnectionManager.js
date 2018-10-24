const socketIO = require("socket.io");
const WS = require("ws");

const constants = require("../constants/constants");

const wsMessageHandler = require("./wsMessageHandler");

function configureWebSocket({ server, connectionType }) {
  let webSocket;
  if (connectionType === constants.SOCKET_IO) {
    const io = socketIO(server);

    io.on(constants.CONNECTION, socket => {
      console.log("New Socket.io client connected");
      socket.on(constants.DISCONNECT, () => console.log("Socket.io client disconnected"));
      wsMessageHandler.registerEventListenersOnSocketIO(socket);
    });
    webSocket = io;

  } else if (connectionType === constants.STANDARD_WEB_SOCKET) {
    const ws = new WS.Server({ server });

    ws.on(constants.CONNECTION, webSocket => {
      console.log("New standard WebSocket client connected");
      webSocket.on(constants.DISCONNECT, () => console.log("Standard WebSokcet client disconnected"));
      wsMessageHandler.registerEventListenersOnStdWebSocket(webSocket);
    });
    webSocket = ws;

  } else {
    console.log("Provided connection type '" + connectionType + "' is not supported");
  }
  return webSocket;
}

module.exports = configureWebSocket;