// DATABASE connection
const dbConfig = require('./db/secret');
const mongoose = require('mongoose');

const dev_db_url = 'mongodb://' + dbConfig.username + ':' + dbConfig.password + '@' + dbConfig.baseurl;
const MONGO_URL = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(
  () => {
    console.log('Database is connected');
  },
  (err) => {
    console.log('Can not connect to the database' + err);
  }
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const users = require('./routes/users.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', users);

// Server and consoles
let port = 1234;
app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
