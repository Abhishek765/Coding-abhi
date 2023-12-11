import http from "http";
import SocketService from "./services/socket";

async function init() {
  const socketService = new SocketService();
  const httpServer = http.createServer();
  const PORT = process.env.PORT || 8000;

  // Attaching the socket server to http server
  socketService.io.attach(httpServer);
  socketService.initListeners();

  httpServer.listen(PORT, () => console.log(`server listening on ${PORT}`));
}

init();
