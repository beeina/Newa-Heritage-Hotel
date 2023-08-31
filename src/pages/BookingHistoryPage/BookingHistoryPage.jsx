import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as bookingAPI from '../../utilities/booking-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import BookingList from '../../components/BookingList/BookingList';

export default function BookingHistoryPage({ user, setUser }) {
  const [bookings, setBookings] = useState([]);
  const [activeBooking, setActiveBooking] = useState(null);


  useEffect(function() {
    async function getBookings() {
    
      const bookings = await bookingAPI.getBookings(user.email);
      console.log(user)
      setActiveBooking(bookings[0] || null);
      setBookings(bookings);
    }
    getBookings();
  }, [user]);

  return (
    <main className="BookingHistoryPage">
      <aside>
        <Link to="/booking/new" className="button btn-sm">NEW BOOKING</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>  
      {/* Render an BookingList component (needs to be coded) */}
      <BookingList
        bookings={bookings}
        activebooking={activeBooking}
        setActiveBooking={setActiveBooking}
      />
      {/* Render the existing BookingListOrder component */}
      {/* <BookingListOrder booking={activeBooking} /> */}

      {/* <button onClick={handleCheckToken}>Check When My Login Expries</button> */}
    
    </main>
  );
}