import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init Socket Service...");
    this._io = new Server();
  }

  public get io(): Server {
    return this._io;
  }

  public initListeners() {
    const io = this._io;

    console.log("Init socket listeners...");
    io.on("connection", (socket) => {
      console.log("New client/socket connected");

      // client can emit this event `event:message`
      socket.on("event:message", ({ message }: { message: string }) => {
        console.log(`new message Received: ${message}`);
      });
    });
  }
}

export default SocketService;
