const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello 😀 from node app in container!" });
});

app.listen(PORT, () => {
  console.info(`listening on http://localhost:${PORT}`);
});
