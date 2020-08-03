const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./models');
const dbConfig = require('./config/db.config');
const socketIo = require('socket.io');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const Role = db.role;

const corsOptions = {
  origin:
    process.env.NODE_ENV !== `production`
      ? `http://localhost:3000`
      : `https://simple-chat-devhectorga.herokuapp.com/`,
};

app.use(cors(corsOptions));
app.use(express.json({ extended: true }));

const rut = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rttv4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

db.mongoose
  .connect(rut, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Chat Application' });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const expressServer = app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ', port);
});

const io = socketIo(expressServer);

const Chat = require('./routes/chat.routes');

Chat(app, io);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
