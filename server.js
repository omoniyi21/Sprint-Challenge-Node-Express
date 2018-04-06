const express = require('express');
const helmet = require('morgan');
const morgan = require('morgan');

const db = require('./data/dbConfig.js');

const server = express();

const actionModel = require("");
const projectModel = require("");



server.use(logger);
server.use(morgan('dev'));
server.use(helemt());
server.use(express.json());

server.use("");
server.use("")



const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));