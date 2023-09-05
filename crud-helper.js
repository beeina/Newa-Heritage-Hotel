// Connect to the database
require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const User = require("./models/user");
const Booking = require("./models/booking");
const Room = require("./models/room");

