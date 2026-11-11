CREATE UNIQUE INDEX IF NOT EXISTS unique_booking_time
ON bookings (date, time);
