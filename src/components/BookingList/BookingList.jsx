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
    <main>
      {BookingList}
    </main>
  );
} 

