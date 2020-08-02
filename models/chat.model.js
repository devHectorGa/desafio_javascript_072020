const mongoose = require('mongoose');

const Chat = mongoose.model(
  'Chat',
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Chat;
