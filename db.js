const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const dbPath = require('./config.json').dbpath;

if (!fs.existsSync(dbPath)) {
    console.error(`❌ Database error: File '${dbPath}' couldn't be found`);
    process.exit(1);
}

let db;

function connectDatabase() {
    if (!db) {
        db = new sqlite3.Database(dbPath, (err) => {
            console.log("📁 Trying to connect to database...");
            if (err) {
                console.error("❌ Database error: ", err.message);
            } else {
                checkIfTableExists("packages");
                checkIfTableExists("plugins");
                console.log("✅ Database connected");
            }
        });
    }
    return db;
}

function checkIfTableExists(table) {
    const query = `SELECT name FROM sqlite_master WHERE type='table' AND name='${table}';`;
    
    db.get(query, (err, row) => {
        if (err) {
            console.error("❌ Error checking table existence: ", err.message);
            process.exit(1);
        }
        if (row) {
            console.log(`✅ Table '${table}' exists`);
        } else {
            console.log(`❌ Table ${table}' does not exist`);
            process.exit(1);
        }
    });
}

module.exports = connectDatabase();