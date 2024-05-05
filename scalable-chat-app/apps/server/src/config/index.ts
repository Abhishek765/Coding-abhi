import dotenv from "dotenv";

dotenv.config();

const _config = {
  SERVER_PORT: process.env.PORT,
  REDIS: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT!,
    userName: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    channels: {
      MESSAGES: "MESSAGES",
    },
  },
};

export const config = Object.freeze(_config);
