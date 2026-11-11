const form = document.getElementById('bookingForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);

    if (response.ok) {
        form.reset();
    }
});

