const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoTours = require('./routes/toursRoutes')

const app = express();

dotenv.config({path: './config.env'})

app.use(express.json());

app.use('/cartillas/v1.1/mongo', mongoTours)

module.exports = app;