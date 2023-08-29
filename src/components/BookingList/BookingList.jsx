import './BookingList.css';
import BookingListOrder from '../BookingListOrder/BookingListOrder';


export default function BookingList({ bookings, activeBooking, setActiveBooking }) {
    const BookingList = bookings.map(booking => <BookingListOrder
    booking={booking}
    activeBooking={activeBooking}
    setActiveBooking={setActiveBooking}
    key={booking._id}
  />);

  return (
    <main className={`BookingList ${bookings.length ? '' : 'no-booking'}`}>
      {BookingList}
    </main>
  );
} 

  //   return (
  //     <main className="BookingList">
  //       {booking}
  //     </main>
  //   );
  // }

// export default function BookingList({ booking, activeBooking, setActiveBooking }) {





 // const booking = booking.map(booking =>
    //   <BookingListOrder
    //     booking={booking}
    //     key={booking._id}
    //     bookingOrder={booking}
    //     handleAddToBooking={handleAddToBooking}
    //   />
    // );