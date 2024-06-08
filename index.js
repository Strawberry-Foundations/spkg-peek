const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');

// Check if config exists, if not, use default
const fileName = path.join(__dirname, 'config.json');
const defaultConfig = {
    "port": 3085,
    "dbpath": "/var/spkg/packages.db",
    "provide_repo_data": false
}
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify(defaultConfig, null, 4));
    console.log(`${fileName} created with default values`);
}

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
    console.log(`🔨 Running peek on port ${port}`);
    console.log(`✅ peek is now available under http://127.0.0.1:${port}`);
});