import sendRequest from "./send-request";
const BASE_URL = "/api/booking";

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function addBooking(bookingData) {
  return sendRequest(BASE_URL, "POST", bookingData);
}

export async function getBookings(email) {
  return sendRequest(`${BASE_URL}/email/${email}`, "POST");
}

export async function getAllBookings() {
  return sendRequest(`${BASE_URL}/all`, "GET");
}

export async function cancelBookingById(id) {
  return sendRequest(`${BASE_URL}/cancel/id/${id}`, "POST");
}
