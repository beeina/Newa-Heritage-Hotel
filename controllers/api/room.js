const Room = require("../../models/room");

module.exports = {
  addRoom,
  findRooms,
  getAllRooms,
};

async function findRooms(req, res) {
  const rooms = await Room.find({ bed: req.params.id });
  res.json(rooms);
}

async function addRoom(req, res) {
  const room = await Room.create(req.body);
}

async function getAllRooms(req, res) {
  const rooms = await Room.find({});
  res.json(rooms);
}
