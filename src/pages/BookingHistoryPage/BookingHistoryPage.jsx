import { useState, useEffect } from 'react';
import * as bookingAPI from '../../utilities/booking-api';
import BookingList from '../../components/BookingList/BookingList';
import { Col } from 'react-bootstrap';

export default function BookingHistoryPage({ user }) {
  const [bookings, setBookings] = useState([]);

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
     
      setBookings(bookings);
    }
    getBookings();
  }, [user, isAdmin]);

  return (
    <main>
       {bookings.length ? <BookingList
        bookings={bookings}
      /> :  <div className="form-container">
      <Col md={{span: 8, offset: 2}}>
          <span>You do not have any bookings.</span>
      
      </Col>
  </div>}
      
    </main>
  );
}