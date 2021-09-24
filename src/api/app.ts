import "reflect-metadata"
const router = require('./controllers/PageController');
const express = require('express')
const app = express();

app.use('/', router);

export default app;
