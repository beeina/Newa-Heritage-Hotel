const Booking = require("../../models/booking");

module.exports = {
  addBooking,
  findBookings,
};

async function findBookings(req, res) {
  const bookings = await Booking.find({ email: req._id });
  res.json(bookings);
}

async function addBooking(req, res) {
  console.log(req.body);

  const booking = await Booking.create(req.body);
}
