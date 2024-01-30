import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('<h2> Hello from Home!!!</h2>');
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
