const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res) => {
    const sql = `
        SELECT name, version, branch, arch, url, specfile, filename
        FROM packages
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No packages found' });
        }
        res.json({
            message: 'success',
            package: rows
        });
    });
});

module.exports = router;