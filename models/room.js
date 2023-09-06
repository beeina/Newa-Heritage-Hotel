const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    floor: { type: String, require: true },
    capacity: Number,
    roomNumber: Number,
    bed: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
