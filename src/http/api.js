const bodyParser = require('body-parser');
const { config } = require('../common');
const express = require('./common/express');
const { cors, notFoundToResponse, errorToResponse } = require('./middlewares');

const app = express();

// parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(cors);

// Load routes
app.use(require('./routes'));

app.use(notFoundToResponse);

app.use(errorToResponse);

const API_PORT = config.get('api.port');

// eslint-disable-next-line no-console
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
