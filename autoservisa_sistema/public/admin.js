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

        const actionsCell = document.createElement('td');

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Apstiprināt';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Atcelt';

        confirmButton.addEventListener('click', function() {
            changeStatus(booking.id, 'confirmed');
        });

        cancelButton.addEventListener('click', function() {
            changeStatus(booking.id, 'cancelled');
        });

        actionsCell.appendChild(confirmButton);
        actionsCell.appendChild(cancelButton);

        row.appendChild(actionsCell);

        table.appendChild(row);
    });
}

loadBookings();

async function changeStatus(id, status) {
    const response = await fetch(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: status })
    });

    const result = await response.json();

    alert(result.message);

    if (response.ok) {
        loadBookings();
    }
}

