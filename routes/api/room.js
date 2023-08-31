const express = require("express");
const router = express.Router();
const roomCtrl = require("../../controllers/api/room");

router.post("/", roomCtrl.addRoom);
router.get("/", roomCtrl.getAllRooms);
router.post("/bed/:id", roomCtrl.findRooms);

module.exports = router;
