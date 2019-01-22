// DATABASE connection
const dbConfig = require('./db/secret');
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://' + dbConfig.username + ':' + dbConfig.password + '@' + dbConfig.baseurl;
const MONGO_URL = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(MONGO_URL, { useNewUrlParser: true, ssl: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const app = express();
const users = require('./routes/users.route');
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', users);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Server and consoles
let port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
