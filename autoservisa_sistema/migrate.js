const fs = require('fs');
const path = require('path');
const db = require('./database');

db.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL UNIQUE
    )
`);

const files = fs.readdirSync(path.join(__dirname, 'migrations')).sort();

for (const file of files) {
    const existing = db.prepare(
        'SELECT id FROM migrations WHERE filename = ?'
    ).get(file);

    if (!existing) {
        const sql = fs.readFileSync(
            path.join(__dirname, 'migrations', file),
            'utf8'
        );

        const runMigration = db.transaction(() => {
            db.exec(sql);
            db.prepare(
                'INSERT INTO migrations (filename) VALUES (?)'
            ).run(file);
        });

        runMigration();

        console.log('Migrācija izpildīta:', file);
    }
}

db.close();
