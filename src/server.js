const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb+srv://<user>:<pass>@cluster0-lql7c.mongodb.net/<database>?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);
