const express = require("express");
const http = require("http");

const port = process.env.PORT || 4001;
const index = require("../src/index");

const configureWebSocket = require("../src/wsConnectionManager");

const constants = require("../src/constants/constants");

const app = express();
app.use(index);

const server = http.createServer(app);

configureWebSocket({ server, connectionType: constants.STANDARD_WEB_SOCKET });

server.listen(port, () => console.log(`Listening on port ${port}`));