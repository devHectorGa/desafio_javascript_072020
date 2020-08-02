const mongoose = require('mongoose');
const ChatModel = mongoose.model('Chat');
const { authJwt } = require('../middlewares');

const Chat = (app, io) => {
  app.get('/api/chat', async (req, res) => {
    const ChatList = await ChatModel.find().sort({ date: -1 }).limit(20);

    return res.json({ chats: ChatList });
  });

  io.of('/socket').on('connect', authJwt.verifyToken, async (socket) => {
    console.log('Connected');

    socket.on('typing', async (message) => {
      console.log(message);
      socket.broadcast.emit('typing', { message: message.name });
    });

    try {
      socket.on('message', async (message) => {
        const chatList = await ChatModel.find().sort({ date: -1 }).limit(20);
        io.emit('Message', { chats: chatList });
        const chat = new ChatModel({
          username: message.name,
          message: message.message,
        });
        await chat.save();

        const chats = await ChatModel.find().sort({ date: -1 }).limit(20);

        io.emit('Message', { chats: chats });
      });
    } catch (error) {
      console.error(error.message);
    }

    socket.on('typing', (name) => {
      io.emit('typing', { name: `${name.name}` });
    });

    socket.on('disconnect', () => {
      console.log('Disconnected');
    });
  });
};

module.exports = Chat;
