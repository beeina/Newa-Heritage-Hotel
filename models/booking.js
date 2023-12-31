const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    guestFullName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: Number,
    email: { type: String, required: true },
    capacity: Number,
    roomNumber: Number,
    bed: Number,
    fromDate: { type: Date, default: Date.now },
    toDate: { type: Date, default: Date.now },
    totalCost: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
