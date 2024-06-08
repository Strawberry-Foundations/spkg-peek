const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');

const fileName = path.join(__dirname, 'config.json');
const defaultConfig = {
    "port": 3085,
    "dbpath": "/var/spkg/packages.db",
    "provide_server_data": false,
    "maintainers": [
        {
            "name": "admin", 
            "email": "admin@localhost"
        }
    ]
}

let config = {};

if (fs.existsSync(fileName)) {
    const existingConfig = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    config = { ...defaultConfig, ...existingConfig };
} else {
    config = defaultConfig;
}

fs.writeFileSync(fileName, JSON.stringify(config, null, 4));
console.log(`${fileName} created with default values`);

const app = express();
app.use(express.json());

const port = config.port;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const mainRoutes = require('./app/index');
app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`🔨 Running peek on port ${port}`);
    console.log(`✅ peek is now available under http://127.0.0.1:${port}`);
});