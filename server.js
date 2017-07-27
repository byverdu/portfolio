import Express from 'express';
import path from 'path';
const bodyParser = require( 'body-parser' );
const app = Express();
import { smtpConfig, emailOpts } from './emailConfig';
import ReactDOMServer from 'react-dom/server'

// Express settings
const port = process.env.port || 9090;
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(Express.static(path.join(__dirname, 'app/build')));

// route handler
app.get('/', (req, res) => {
  const renderedApp = ReactDOMServer.renderToString(element);
  res.sendFile(path.join(__dirname, 'app/build/index.html'));
});

app.post('/', (req, res) => {
  smtpConfig.sendMail( emailOpts( req.body ), error => {
    if( error ) {
      console.log(error);

      res.sendFile(path.join(__dirname, 'app/build/error.html'));
		} else {
    res.sendFile(path.join(__dirname, 'app/build/success.html'));

		console.log('yeppppp!!!');
		}
  });  
	smtpConfig.close();
});

app.listen(`${port}`, () => {
  console.log(`app running on port ${port}`);
});
