const express = require('express');
const router = express.Router();

const { version } = require('../package.json');

router.get('/', (req, res) => {
    res.json({ 
        message: 'success',
        peek: {
            version: version
        }
    });
});

// Endpoints
router.use('/packages/fetch', require('./packages/fetch'));
router.use('/packages/fetchAll', require('./packages/fetchAll'));
router.use('/packages/search', require('./packages/search'));

module.exports = router;