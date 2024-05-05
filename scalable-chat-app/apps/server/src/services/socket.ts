import { Server } from "socket.io";
import Redis from "ioredis";
import { config } from "../config";

const publisher = new Redis({
  host: config.REDIS.host,
  port: config.REDIS.port,
  username: config.REDIS.userName,
  password: config.REDIS.password,
});

const subscriber = new Redis({
  host: config.REDIS.host,
  port: config.REDIS.port,
  username: config.REDIS.userName,
  password: config.REDIS.password,
});

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init Socket Service...");
    this._io = new Server({
      cors: {
        allowedHeaders: "*",
        origin: "http://localhost:3000", //! `web` domain
      },
    });

    subscriber.subscribe(config.REDIS.channels.MESSAGES);
  }

  public get io(): Server {
    return this._io;
  }

  public initListeners() {
    const io = this._io;

    console.log("Init socket listeners...");

    io.on("connection", (socket) => {
      console.log("New client/socket connected: ", socket.id);

      // client can emit this event `event:message`
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log(`new message Received: ${message}`);
        // publish this message to redis
        await publisher.publish(
          config.REDIS.channels.MESSAGES,
          JSON.stringify({ message })
        );
      });
    });

    subscriber.on("message", (channel, message) => {
      if (channel === config.REDIS.channels.MESSAGES) {
        console.log("New message received from redis: ", message);
        io.emit("redis:message", message);
      }
    });
  }
}

export default SocketService;
