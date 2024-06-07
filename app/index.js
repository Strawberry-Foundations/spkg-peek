const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("peek 1.0.0");
});

// Endpoints
router.use('/packages/fetch', require('./packages/fetch'));
router.use('/packages/search', require('./packages/search'));

module.exports = router;