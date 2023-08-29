const Booking = require("../../models/booking");

module.exports = {
  addBooking,
  findBookings,
};

async function findBookings(req, res) {
  const bookings = await Booking.find({ email: req.params.id });
  res.json(bookings);
  console.log(bookings);
}

async function addBooking(req, res) {
  const booking = await Booking.create(req.body);
}
