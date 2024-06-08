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
router.use('/packages/search', require('./packages/search'));
router.use('/repo', require('./repo/index'));
router.use('/server', require('./server/index'))

module.exports = router;