import './BookingList.css';
import BookingListCard from '../BookingListCard/BookingListCard';


export default function BookingList({ bookings}) {
    const BookingList = bookings.map(booking => <BookingListCard
    booking={booking}
    key={booking._id}
  />);

  return (
    <main>
      {BookingList}
    </main>
  );
} 

