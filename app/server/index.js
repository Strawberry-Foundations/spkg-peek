const express = require('express');
const router = express.Router();

const dataAllowed = require('../../config.json').provide_server_data;
const version = require('../../package.json').version;

router.get('/', (req, res) => {
    if (!dataAllowed) {
        return res.status(401).json({ message: 'This instance has disabled server data collection' });
    }
    
    res.json({ 
        message: 'success',
        data: {
            name: 'peek',
            version: version,
            os: process.platform,
            arch: process.arch,
            nodejs: process.version,
            apiuptime: process.uptime(),
        }
    });
});

module.exports = router;