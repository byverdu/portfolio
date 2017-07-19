import Express from 'express';
import path from 'path';
const bodyParser = require( 'body-parser' );
const app = Express();

// Express settings
const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(Express.static(path.join(__dirname, 'app/build')))

app.post('/', (req, res) => {
  console.log(req,res)
  res.sendFile(path.join(__dirname, 'app/build/xoxo.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/build/index.html'));
});

app.listen(`${port}`, () => {
  console.log(`app running on port ${port}`);
});
