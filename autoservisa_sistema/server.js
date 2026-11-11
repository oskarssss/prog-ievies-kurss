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


app.listen(3000, () => {
    console.log('Serveris darbojas!');
});