import './BookingList.css';
import BookingListOrder from '../BookingListOrder/BookingListOrder';


export default function BookingList({ bookings}) {
    const BookingList = bookings.map(booking => <BookingListOrder
    booking={booking}
    key={booking._id}
  />);

  return (
    <main>
      {BookingList}
    </main>
  );
} 

