const express = require("express");
const router = express.Router();
const bookingCtrl = require("../../controllers/api/booking");


router.post("/", bookingCtrl.addBooking);
router.post('/email/:id', bookingCtrl.findBookings);

module.exports = router;
