const socketIO = require("socket.io");
const WS = require("ws");

const constants = require("./constants/constants");

const wsMessageHandler = require("./wsMessageHandler");

function configureWebSocket({ server, connectionType }) {
  let webSocket;
  if (connectionType === constants.SOCKET_IO) {
    const wsServer = socketIO(server);

    wsServer.on(constants.CONNECTION, socket => {
      console.log("New Socket.io client connected");
      socket.on(constants.DISCONNECT, () => console.log("Socket.io client disconnected"));
      wsMessageHandler.registerEventListenersOnSocketIO(socket);
    });
    webSocket = wsServer;

  } else if (connectionType === constants.STANDARD_WEB_SOCKET) {
    const wsServer = new WS.Server({ server });

    wsServer.on(constants.CONNECTION, webSocket => {
      console.log("New standard WebSocket client connected");
      console.log("Total connected clients: ", wsServer.clients.size);
      webSocket.on(constants.CLOSE, () => {
        console.log("Standard WebSokcet client disconnected")
        console.log("Total connected clients: ", wsServer.clients.size);
      });
      wsMessageHandler.registerEventListenersOnStdWebSocket(webSocket);
    });
    webSocket = wsServer;

  } else {
    console.log("Provided connection type '" + connectionType + "' is not supported");
  }
  return webSocket;
}

module.exports = configureWebSocket;