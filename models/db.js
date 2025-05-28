const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Ensures correct absolute path to chai.db
const dbPath = path.join(__dirname, "chai.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) return console.error(err.message);
    console.log("Connected to SQLite database at", dbPath);
});

module.exports = db;
