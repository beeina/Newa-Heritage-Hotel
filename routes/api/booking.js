const express = require("express");
const router = express.Router();
const bookingCtrl = require("../../controllers/api/booking");

// POST /api/orders/cart/items/:id
router.post("/", bookingCtrl.addBooking);
router.post('/email/:id', bookingCtrl.findBookings);

module.exports = router;
