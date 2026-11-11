DROP INDEX IF EXISTS unique_booking_time;

CREATE UNIQUE INDEX unique_active_booking_time
ON bookings (date, time)
WHERE status != 'cancelled';
