const express = require("express");
require('dotenv').config();
const configMiddleware = require('./middleware')

let app = express();

configMiddleware(app);

module.exports = app;