const mongoose = require("mangoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    name: { type: String, index: true, required: true },
    floor: { type: String, require: true },
    capacity: Number,
    roomNumber: Number,
    bed: Number,
    occupiedDays: [Number],
    month: Number,
    year: Number,
    room: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
