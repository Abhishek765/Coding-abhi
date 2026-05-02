import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware, TryCatch } from "@/middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import HttpError from "./utils/errorHandler";
import { utilityAgent } from "./lib/ai/agent";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.post(
  "/ai/utility-agent",
  TryCatch(async (req, res, next) => {
    const { message } = req.body;

    if (!message) return next(new HttpError(400, "Message is required"));
    if (typeof message !== "string")
      return next(new HttpError(400, "Message must be a string"));

    const { text, steps, totalUsage } = await utilityAgent.generate({
      prompt: message,
    });
    return res.status(200).json({
      success: true,
      data: text,
      meta: {
        steps,
        totalUsage,
      },
    });
  }),
);

app.get("/*splat", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log(
    "Server is working on Port:" + port + " in " + envMode + " Mode.",
  ),
);
