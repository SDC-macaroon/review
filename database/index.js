const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/mongo-test';
const db = mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = db;
