const sqlite3 = require('sqlite3').verbose();
const dbPath = require('./config.json').dbpath;

let db;

function connectDatabase() {
    if (!db) {
        db = new sqlite3.Database(dbPath, (err) => {
            console.log("📁 Trying to connect to database...");
            if (err) {
                console.error("❌ Database error:", err.message);
            } else {
                console.log("✅ Database connected");
            }
        });
    }
    return db;
}

module.exports = connectDatabase();