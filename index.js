const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const config = require('./config.json');

// Setup app
const app = express();
app.use(express.json());

// Load config attributes
const port = config.port;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const mainRoutes = require('./app/index');
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Running peek on port ${port}`);
    console.log(`peek is now availbe under http://127.0.0.1:${port}`);
});