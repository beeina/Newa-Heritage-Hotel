import * as userService from "../../utilities/users-service"
import * as bookingAPI from '../../utilities/booking-api';
import { useState, useEffect } from 'react';

export default function BookingHistoryPage({ user, setUser }) {
  const [bookings, setBookings] = useState([]);

  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  useEffect(function() {
    async function getBookings() {
      const bookings = await bookingAPI.getBookings(user.email);
      
      setBookings(bookings);
    }
    getBookings();
  }, []);

  return (
    <>
    <h1>OrderHistoryPage</h1>
    <button onClick={handleCheckToken}>Check When My Login Expries</button>
    </>
  );
}