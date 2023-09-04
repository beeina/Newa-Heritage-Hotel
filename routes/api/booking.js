const express = require("express");
const router = express.Router();
const bookingCtrl = require("../../controllers/api/booking");

router.post("/", bookingCtrl.addBooking);
router.post("/email/:id", bookingCtrl.findBookings);
router.get("/all/", bookingCtrl.findAllBookings);
router.post("/cancel/id/:id", bookingCtrl.cancelBooking);

module.exports = router;
