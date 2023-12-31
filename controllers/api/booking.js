const Booking = require("../../models/booking");

module.exports = {
  addBooking,
  findBookings,
  findAllBookings,
  cancelBooking,
};

async function findBookings(req, res) {
  const bookings = await Booking.find({ email: req.params.id });
  res.json(bookings);
  console.log(bookings);
}

async function addBooking(req, res) {
  const booking = await Booking.create(req.body);
  res.json(booking);
}

async function findAllBookings(req, res) {
  const bookings = await Booking.find({});
  res.json(bookings);
  console.log(bookings);
}

async function cancelBooking(req, res) {
  const booking = await Booking.remove({ _id: req.params.id });
  res.json(booking);
}
