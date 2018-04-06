const express = require('express');
const helmet = require('morgan'); // should be helmet
const morgan = require('morgan');

const db = require('./data/dbConfig.js');

const server = express();

const actionModel = require(""); // (./actions/actionModel)
const projectModel = require(""); // (./projects/projectModel)



server.use(logger); // this will be undefined
server.use(morgan('dev'));
server.use(helemt()); // typo
server.use(express.json());

/*
* You don't need these two
*/
server.use("");
server.use("")



const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));
