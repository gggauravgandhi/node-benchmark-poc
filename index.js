const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');

const port = 8080;

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
const routes = require('./routes');
app.use('/', routes);

// listen to requests
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});