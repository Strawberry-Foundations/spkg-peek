const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res) => {
    const query = req.query.q;
    let sql, params;

    if (!query || query.trim() === '') {
        sql = `
            SELECT name, version, branch, arch, url, specfile, filename
            FROM packages
        `;
        params = [];
    } else {
        sql = `
            SELECT name, version, branch, arch, url, specfile, filename
            FROM packages
            WHERE name = ?
        `;
        params = [query];
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No packages found' });
        }
        res.json({
            message: 'success',
            packages: rows
        });
    });
});

module.exports = router;