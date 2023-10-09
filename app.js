
const express = require('express');
const cors = require('cors');
const app = express();
var router = express.Router();
require('./db/connect');
// Import initialization functions
const initializeCategories = require('./initialization/categories');
const initializeProducts = require('./initialization/products');

// Middleware
app.use(cors());
app.use(express.json());

//Set Up the Database connection
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;