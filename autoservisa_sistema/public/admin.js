async function loadBookings() {
    const response = await fetch('/api/bookings');
    const bookings = await response.json();

    const table = document.getElementById('bookingsTable');

    table.innerHTML = '';

    bookings.forEach(booking => {
        const row = document.createElement('tr');

        const values = [
            booking.id,
            booking.name,
            booking.phone,
            booking.car,
            booking.service,
            booking.date,
            booking.time,
            booking.status
        ];

        values.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

loadBookings();
