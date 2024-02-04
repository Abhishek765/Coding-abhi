import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connection';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

//! DB Connection
connectDB();

//! middlewares

//! Routes
app.get('/', (req, res) => {
  res.send('<h2> Hello from Home!!!</h2>');
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
