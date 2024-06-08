const express = require('express');
const router = express.Router();

const maintainers = require('../../config.json').maintainers;

router.get('/', (req, res) => {
    res.json({ 
        message: 'success',
        data: {
            maintainers: maintainers
        }
    });
});

module.exports = router;