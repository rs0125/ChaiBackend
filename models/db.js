const sqlite3 = require("sqlite3").verbose();

// Creates a file-based DB (chai.db)
const db = new sqlite3.Database("chai.db", (err) => {
    if (err) return console.error(err.message);
    console.log("Connected to SQLite database.");
});

module.exports = db;
