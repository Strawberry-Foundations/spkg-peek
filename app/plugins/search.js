const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res) => {
    const query = req.query.q;

    if (!query || query.trim() === '') {
        return res.status(400).json({ message: "Query parameter 'q' cannot be empty" });
    }
    
    const sql = `
        SELECT name, version, fetch_url, filename, desc, author
        FROM plugins
        WHERE name LIKE ?
    `;
    const params = [`%${query}%`];

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No plugins found' });
        }
        res.json({
            message: 'success',
            plugins: rows
        });
    });
});

module.exports = router;