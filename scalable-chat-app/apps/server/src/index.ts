import express from "express";

import { createServer } from "node:http";
import SocketService from "./services/socket";
import { config } from "./config";

async function init() {
  const app = express();
  const socketService = new SocketService();
  const httpServer = createServer(app);

  // constants
  const PORT = config.SERVER_PORT || 8000;

  // Routes
  app.get("/", (req, res) => {
    res.send("<h1>Hello from Home!!!</h1>");
  });

  // Attaching the socket server to http server
  socketService.io.attach(httpServer);
  socketService.initListeners();

  httpServer.listen(PORT, () =>
    console.log(`server listening on http://localhost:${PORT}`)
  );
}

init();
