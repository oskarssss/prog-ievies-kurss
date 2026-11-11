const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/bookings', (req, res) => {
    const { name, phone, car, service, date, time } = req.body;

    if (!name || !phone || !car || !service || !date || !time) {
        return res.status(400).json({
            message: 'Visi lauki ir obligāti!'
        });
    }

    const existingBooking = db.prepare(`
        SELECT id FROM bookings
        WHERE date = ? AND time = ?
    `).get(date, time);

    if (existingBooking) {
        return res.status(409).json({
            message: 'Šis rezervācijas laiks jau ir aizņemts!'
        });
    }

    const stmt = db.prepare(`
        INSERT INTO bookings (name, phone, car, service, date, time)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(name, phone, car, service, date, time);

    res.status(201).json({
        message: 'Rezervācija veiksmīgi izveidota!',
        id: result.lastInsertRowid
    });
});


app.get('/api/bookings', (req, res) => {
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY date, time').all();

    res.json(bookings);
});


app.patch('/api/bookings/:id/status', (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    if (status !== 'confirmed' && status !== 'cancelled') {
        return res.status(400).json({
            message: 'Nederīgs rezervācijas statuss!'
        });
    }

    const stmt = db.prepare(`
        UPDATE bookings
        SET status = ?
        WHERE id = ?
    `);

    const result = stmt.run(status, id);

    if (result.changes === 0) {
        return res.status(404).json({
            message: 'Rezervācija nav atrasta!'
        });
    }

    res.json({
        message: 'Rezervācijas statuss veiksmīgi mainīts!'
    });
});


app.listen(3000, () => {
    console.log('Serveris darbojas!');
});