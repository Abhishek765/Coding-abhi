import express from "express";

const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
