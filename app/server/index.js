const express = require('express');
const router = express.Router();

const dataAllowed = require('../../config.json').provide_repo_data;
const version = require('../../package.json').version;

router.get('/', (req, res) => {
    if (!dataAllowed) {
        res.status(401).json({ message: 'This instance has disabled repo data' });
    }
    
    res.json({ 
        message: 'success',
        data: {
            name: 'peek',
            version: version,
            os: process.platform,
            arch: process.arch,
            nodejs: process.version
        }
    });
});

module.exports = router;