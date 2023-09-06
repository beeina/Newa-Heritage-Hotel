import sendRequest from "./send-request";
const BASE_URL = "/api/room";

export async function getRooms() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function addRoom(roomData) {
  return sendRequest(BASE_URL, "POST", roomData);
}

export async function getRoomsByBed(bed) {
  return sendRequest(`${BASE_URL}/bed/${bed}`, "POST");
}
