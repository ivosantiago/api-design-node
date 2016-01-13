var express = require('express');
var app = express();
var api = require('./api/api');
var logger = require('./util/logger');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

app.use(function (err, req, res, next) {
  if (err) {
    logger.log('Error');
    req.send(err);
  }
  next();
})

// export the app for testing
module.exports = app;
