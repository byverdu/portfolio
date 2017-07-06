import Express from 'express';
import path from 'path';
const app = Express();

// Express settings
const port = process.env.port || 3000;
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.listen(`${port}`, () => {
  console.log(`app running on port ${port}`);
});
