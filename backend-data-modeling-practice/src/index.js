import express from "express";
import { connectToDB } from "./config/dbConnection.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = 8000;
// DB connection
connectToDB();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//! For DB-testing purpose
// app.post("/api/v1/todos", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     console.log({ body: req.body });
//     if (!name || !email || !password) {
//       res.status(400).json({ message: "All fields are required" });
//       throw new Error("All fields are required");
//     }

//     const user = await UserModel.create({
//       name,
//       email,
//       password, // Just for testing purpose store hash password in db
//     });

//     res.status(201).json({ message: "User created successfully", user });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating user", error: error.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
