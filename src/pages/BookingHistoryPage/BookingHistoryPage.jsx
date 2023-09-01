import { useState, useEffect } from 'react';
import * as bookingAPI from '../../utilities/booking-api';
import BookingList from '../../components/BookingList/BookingList';
import { Col } from 'react-bootstrap';

export default function BookingHistoryPage({ user, setUser }) {
  const [bookings, setBookings] = useState([]);
  const [activeBooking, setActiveBooking] = useState(null);

  const adminEmails = ['beeina@hotmail.com', 'bina02@gmail.com'];
  let isAdmin = false;
  if (adminEmails.indexOf(user.email) >= 0) {
      isAdmin = true;
  }

  useEffect(function() {
    async function getBookings() {
      let bookings
      console.log(isAdmin)
    
      if (isAdmin) {
        bookings = await bookingAPI.getAllBookings();
       
      } else {
        bookings = await bookingAPI.getBookings(user.email);
      }
      
      console.log(user)
      setActiveBooking(bookings[0] || null);
      setBookings(bookings);
    }
    getBookings();
  }, [user, isAdmin]);

  return (
    <main>
       {bookings.length ? <BookingList
        bookings={bookings}
        activebooking={activeBooking}
        setActiveBooking={setActiveBooking}
      /> :  <div className="form-container">
      <Col md={{span: 8, offset: 2}}>
          <span>You do not have any bookings.</span>
      
      </Col>
  </div>}
      
    </main>
  );
}