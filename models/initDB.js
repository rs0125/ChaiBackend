const db = require("./db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            quantity INTEGER,
            lastupdated DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS saleslog (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL,
    type TEXT CHECK(type IN ('incoming', 'outgoing', 'weekly update')) NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    `);
});