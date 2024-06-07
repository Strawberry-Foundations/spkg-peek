const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.q;

    if (query == null) {
        
    }
    
    res.send('Fetch here');
});

module.exports = router;