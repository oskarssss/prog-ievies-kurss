const Database = require('better-sqlite3');
const db = new Database('sistema.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        car TEXT NOT NULL,
        service TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL
    )
`);

module.exports = db;